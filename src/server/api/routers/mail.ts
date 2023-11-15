import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const mailRouter = createTRPCRouter({
	compose: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
		return "";
	}),
	sent: protectedProcedure.query(({ ctx, input }) => {
		return "sent";
	}),
	draft: protectedProcedure.query(({ ctx, input }) => {
		return "draft";
	}),
	trash: protectedProcedure.query(({ ctx, input }) => {
		return "trash";
	}),
	save: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
		return "save to draft";
	}),
	delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
		return "delete mail";
	}),
	edit: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
		return "edit draft";
	}),
});
