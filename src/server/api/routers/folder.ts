import { z } from "zod";
import { Input } from "~/app/_components/ui/input";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const folderRouter = createTRPCRouter({
	create: protectedProcedure
		.input(z.object({ name: z.string().min(4) }))
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
			return await ctx.db.subscriberFolder.delete({ where: { id: input } });
		}),
	edit: protectedProcedure
		.input(z.object({ name: z.string().min(4), id: z.string() }))
		.mutation(async ({ ctx, input }) => {
			return await ctx.db.subscriberFolder.update({
				where: { id: input.id, authorId: ctx.session.user.id },
				data: { name: input.name },
			});
		}),
	getFolders: protectedProcedure.query(async ({ ctx }) => {
		return await ctx.db.subscriberFolder.findMany({
			where: { authorId: ctx.session.user.id },
		});
	}),
	getSubscribers: protectedProcedure
		.input(z.object({ name: z.string() }))
		.query(async ({ ctx, input }) => {
			return await ctx.db.subscriberFolder.findMany({
				where: { authorId: ctx.session.user.id, name: input.name },
			});
		}),
});
