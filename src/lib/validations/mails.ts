import { z } from "zod";

export const mailSchema = z.object({
	id: z.string(),
	name: z.string().optional(),
	address: z.string().email(),
	subscriptionDate: z.date().optional(),
	folder: z.array(z.string()).optional(),
	authorId: z.string().optional(),
});
export type Mail = z.infer<typeof mailSchema>;
