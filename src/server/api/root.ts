import { postRouter } from "~/server/api/routers/post";
import { subscriberRouter } from "~/server/api/routers/subscriber";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	post: postRouter,
	subscriber: subscriberRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
