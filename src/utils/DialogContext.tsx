"use client";
import { DialogState } from "@/types/DialogState";
import { ProviderProps } from "@/types/ProviderType";
import { createContext, useContext, useState } from "react";

const DialogContext = createContext<DialogState<unknown> | undefined>(undefined);

export const DialogProvider = <T,>({ children }: ProviderProps) => {
  const [dialogState, setDialogState] = useState<DialogState<T>>({
    dialogState: {
      isOpen: false,
      currentItem: null,
      mode: null,
    },
  });

  const openDialog = (mode: "add" | "edit") =>
    setDialogState({
      dialogState: {
        isOpen: true,
        currentItem: null,
        mode,
      },
    });
  const closeDialog = () =>
    setDialogState({
      dialogState: {
        isOpen: false,
        currentItem: null,
        mode: null,
      },
    });

  return (
    <DialogContext.Provider value={{ ...dialogState, openDialog, closeDialog }}>{children}</DialogContext.Provider>
  );
};

export const useDialog = <T,>() => {
  const context = useContext(DialogContext as React.Context<DialogState<T> | undefined>);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
