import { z } from "zod";

export const mailSchema = z.object({
	id: z.string(),
	subscriberName: z.string().optional(),
	email: z.string().email(),
	subscriptionDate: z.string(),
	group: z.array(z.string()),
});
export type Mail = z.infer<typeof mailSchema>;
