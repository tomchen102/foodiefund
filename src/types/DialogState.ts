export interface DialogState<T> {
  dialogState: {
    isOpen: boolean;
    currentItem: T | null;
    mode: "add" | "edit" | "delete" | null;
  };
  openDialog?: (mode: "add" | "edit") => void;
  closeDialog?: () => void;
}
