import { UseMutateFunction, UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponse } from "./errorResponse";

export type MutationAction<T> = UseMutateFunction<AxiosResponse<T>, AxiosError<ErrorResponse>, T>;
export type MutationResult<T> = UseMutationResult<AxiosResponse<T>, AxiosError<ErrorResponse>, T>;
