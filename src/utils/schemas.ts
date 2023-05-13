import { object, string, InferType } from "yup";

export const loginSchema = object({
  email: string().email("Invalid Email").required("Email is required"),
  password: string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
}).required();

export type LoginFormFields = InferType<typeof loginSchema>;
