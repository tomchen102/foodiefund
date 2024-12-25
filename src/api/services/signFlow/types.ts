import { FormLoginSchema, FormRegisterSchema } from "@/schema/UserAuthSchema";
import { z } from "zod";

export interface DataResponse {
  user: {
    name: string;
    photo: string;
    token: string;
  };
}

export type FormRegisterSchemaType = z.infer<typeof FormRegisterSchema>;
export type FormLoginSchemaType = z.infer<typeof FormLoginSchema>;
