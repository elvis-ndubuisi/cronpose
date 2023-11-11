import { z } from "zod";

export const emailsSchema = z.object({
	id: z.string(),
	subscriberName: z.string().optional(),
	email: z.string().email(),
	subscriptionDate: z.string(),
	group: z.array(z.string()),
});
export type Emails = z.infer<typeof emailsSchema>;
