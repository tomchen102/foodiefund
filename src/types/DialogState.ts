export interface DialogStateDetails<T> {
  isOpen: boolean;
  currentItem: T | null;
  mode: "add" | "edit" | "delete" | null;
}

export type DialogState<T> = {
  dialogState: DialogStateDetails<T>;
  openDialog: (mode: "add" | "edit" | "delete", currentItem?: T) => void;
  closeDialog: () => void;
};
