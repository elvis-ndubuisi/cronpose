import { z } from "zod";

import {
	createTRPCRouter,
	protectedProcedure,
	publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const subscriberRouter = createTRPCRouter({
	add: protectedProcedure
		.input(
			z.object({
				name: z.string().min(4).toLowerCase().trim().optional(),
				address: z.string().trim().email({ message: "Provide a valid email" }),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			return await ctx.db.subscriber.create({
				data: {
					address: input.address,
					name: input.name,
					unsubscribeId: ctx.session.user.id,
				},
			});
		}),
	delete: protectedProcedure
		.input(z.string())
		.mutation(async ({ ctx, input }) => {
			return await ctx.db.subscriber.delete({ where: { id: input } });
		}),
	edit: protectedProcedure
		.input(z.object({}))
		.mutation(async ({ ctx, input }) => {
			return await ctx.db.subscriber.findFirst({ where: { id: "" } });
		}),
	group: protectedProcedure.input(z.object({})).mutation(() => {
		return "";
	}),
	getSubs: protectedProcedure.query(({ ctx }) => {
		return "";
	}),
	getSubsGroup: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
		return "";
	}),
	// hello: publicProcedure
	// 	.input(z.object({ text: z.string() }))
	// 	.query(({ input }) => {
	// 		return {
	// 			greeting: `Hello ${input.text}`,
	// 		};
	// 	}),

	// create: protectedProcedure
	// 	.input(z.object({ name: z.string().min(1) }))
	// 	.mutation(async ({ ctx, input }) => {
	// 		// simulate a slow db call
	// 		await new Promise((resolve) => setTimeout(resolve, 1000));

	// 		return ctx.db.post.create({
	// 			data: {
	// 				name: input.name,
	// 				createdBy: { connect: { id: ctx.session.user.id } },
	// 			},
	// 		});
	// 	}),

	// getLatest: protectedProcedure.query(({ ctx }) => {
	// 	return ctx.db.post.findFirst({
	// 		orderBy: { createdAt: "desc" },
	// 		where: { createdBy: { id: ctx.session.user.id } },
	// 	});
	// }),

	// getSecretMessage: protectedProcedure.query(() => {
	// 	return "you can now see this secret message!";
	// }),
});
