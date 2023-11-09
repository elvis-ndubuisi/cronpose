import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const authRouter = createTRPCRouter({
	login: publicProcedure
		.input(z.object({ email: z.string() }))
		.mutation(async ({ ctx, input }) => {
			console.log(input);
		}),
	register: publicProcedure
		.input(z.object({ name: z.string() }))
		.mutation(async ({ ctx, input }) => {
			console.log(input);
		}),
});
