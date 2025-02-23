"use client";
import { createContext, useContext, useState } from "react";

import { DialogState } from "@/types/DialogState";
import { ChildrenProps } from "@/types/ProviderType";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DialogContext = createContext<DialogState<any> | undefined>(undefined);

export const DialogProvider = <T,>({ children }: ChildrenProps) => {
  const [dialogState, setDialogState] = useState<DialogState<T>>({
    dialogState: {
      isOpen: false,
      currentItem: null,
      mode: null,
    },
    openDialog: () => {},
    closeDialog: () => {},
  });

  const openDialog = (mode: "add" | "edit" | "delete", currentItem?: T) =>
    setDialogState({
      dialogState: {
        isOpen: true,
        currentItem: currentItem ?? null,
        mode,
      },
      openDialog: () => {},
      closeDialog: () => {},
    });
  const closeDialog = () =>
    setDialogState({
      dialogState: {
        isOpen: false,
        currentItem: null,
        mode: null,
      },
      openDialog: () => {},
      closeDialog: () => {},
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
