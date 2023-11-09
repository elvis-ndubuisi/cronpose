import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
// TODO: change public procedure to protected

export const emailRouter = createTRPCRouter({
	add: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
		console.log(input);
	}),
	subscribe: publicProcedure
		.input(z.object({ email: z.string().email() }))
		.mutation(async ({ ctx, input }) => {
			return ctx.db.email.create({ data: { email: input.email } });
		}),
	unsubscribe: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
		console.log(input);
	}),
	delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
		console.log(input);
	}),
});
