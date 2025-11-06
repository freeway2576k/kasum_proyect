import { z } from "zod";


export const LoginSchema = z.object({
    email: z.email("auth.login_form.errors.invalid_email").min(1,"auth.login_form.errors.invalid_email"),
    password: z.string().min(3,"auth.login_form.errors.invalid_password")
  });

  export type LoginFormData = z.infer<typeof LoginSchema>;