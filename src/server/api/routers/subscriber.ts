import { z } from "zod";

import {
	createTRPCRouter,
	protectedProcedure,
	publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const subscriberRouter = createTRPCRouter({
	// Adds a single new subscriber to subscribers list
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
					authorId: ctx.session.user.id,
				},
			});
		}),
	// Deletes a single subscriber from subscribers list
	delete: protectedProcedure
		.input(z.object({ id: z.string() }))
		.mutation(async ({ ctx, input }) => {
			return await ctx.db.subscriber.delete({
				where: { id: input.id, authorId: ctx.session.user.id },
			});
		}),
	// Deletes all selected subscriber from subscriber list
	deleteSelected: protectedProcedure
		.input(z.array(z.string()))
		.mutation(({ ctx, input }) => {
			return "";
		}),
	// Edit subscriber's name/address
	edit: protectedProcedure
		.input(
			z.object({
				id: z.string(),
				name: z.string().trim().toLowerCase().optional(),
				address: z.string().trim().toLowerCase().email().optional(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			return await ctx.db.subscriber.update({
				where: { id: input.id, authorId: ctx.session.user.id },
				data: { address: input.address, name: input.name },
			});
		}),
	// Add a subscriber to a group
	group: protectedProcedure
		.input(
			z.object({
				subscribers: z.array(z.string()),
				groupName: z.string().min(4),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			return "";
		}),
	// Fetch all subscribers -- paginated
	getSubs: protectedProcedure.query(async ({ ctx }) => {
		return await ctx.db.subscriber.findMany({
			where: { authorId: ctx.session.user.id },
		});
	}),
	// Fetch all subscribers in a group -- paginated
	getSubsGroup: protectedProcedure
		.input(z.string())
		.query(async ({ ctx, input }) => {
			return await ctx.db.subscriber.findMany({ where: { id: "" } });
		}),
	// Removes a subscriber from a group
	deleteSubcriberFromGroup: protectedProcedure
		.input(z.string())
		.mutation(() => {
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
