import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
	getServerSession,
	type DefaultSession,
	type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProdiver from "next-auth/providers/facebook";

import { env } from "~/env.mjs";
import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string;
			// ...other properties
			// role: UserRole;
		} & DefaultSession["user"];
	}

	// interface User {
	//   // ...other properties
	//   // role: UserRole;
	// }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
	callbacks: {
		session: ({ session, user }) => ({
			...session,
			user: {
				...session.user,
				id: user.id,
			},
		}),
		// jwt: async ({ token, user }) => {
		// 	if (user) {
		// 		token.id = user.id;
		// 		token.email = user.email;
		// 	}
		// 	return token;
		// },
		// async jwt(params) {},
		// async session({ session, user, token }) {},
		// signIn(params) {
		// 	const { user } = params;
		// 	const credit = 200;
		// 	return true;
		// },
	},
	// session: { strategy: "jwt" },
	// jwt: { maxAge: 15 * 24 * 30 * 60 },
	// pages: {
	// 	signIn: "/auth",
	// },
	secret: env.NEXTAUTH_SECRET,
	adapter: PrismaAdapter(db),
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
		FacebookProdiver({
			clientId: env.FACEBOOK_CLIENT_ID,
			clientSecret: env.FACEBOOK_CLIENT_SECRET,
		}),
	],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
