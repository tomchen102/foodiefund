"use client";
import { UseMutateFunction } from "@tanstack/react-query";
import {
  useReactTable,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

type GetColumnsParams<T, V> = {
  openDialogDeleteData?: (id: string, email: string) => void;
  openDialogEditData?: (data: T) => void;
  UpdateSwitch?: UseMutateFunction<AxiosResponse<V>, AxiosError, V>;
  filter?: number | undefined;
};

const useTableConfig = <TData, T>(
  data: TData[],
  getColumns: (params: GetColumnsParams<TData, T>) => ColumnDef<TData>[],
  openDialogDeleteData?: (id: string, email: string) => void,
  openDialogEditData?: (data: TData) => void,
  UpdateSwitch?: UseMutateFunction<AxiosResponse<T>, AxiosError, T>,
  filter?: number | undefined
) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const columns = getColumns({ openDialogEditData, openDialogDeleteData, UpdateSwitch, filter });

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return table;
};

export default useTableConfig;
