import { z } from "zod";

import {
	createTRPCRouter,
	protectedProcedure,
	publicProcedure,
} from "~/server/api/trpc";

export const folderRouter = createTRPCRouter({
	create: protectedProcedure
		.input(z.object({ name: z.string().min(1) }))
		.mutation(async ({ ctx, input }) => {
			return await ctx.db.subscriberFolder.create({
				data: {
					authorId: ctx.session.user.id,
					name: input.name,
				},
			});
		}),
	delete: protectedProcedure
		.input(z.string())
		.mutation(async ({ ctx, input }) => {
			return await ctx.db.subscriberFolder.delete({ where: { id: "" } });
		}),
	edit: protectedProcedure.input(z.string()).mutation(async () => {
		return "";
	}),
	getFolders: protectedProcedure.query(({ ctx, input }) => {
		return "";
	}),
});
