import * as z from "zod";

export const authFormSchema = z.object({
	username: z.string().min(5).max(23, { message: "Username must be provided" }),
	email: z.string().email(),
});

export type AuthFormValue = z.infer<typeof authFormSchema>;
