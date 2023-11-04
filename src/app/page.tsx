import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function Home() {
	const hello = await api.post.hello.query({ text: "from tRPC" });
	const session = await getServerAuthSession();

	return (
		<main className="flex min-h-screen flex-col items-center justify-center"></main>
	);
}

// async function CrudShowcase() {
// 	const session = await getServerAuthSession();
// 	if (!session?.user) return null;

// 	const latestPost = await api.post.getLatest.query();

// 	return (
// 		<div className="w-full max-w-xs">
// 			{latestPost ? (
// 				<p className="truncate">Your most recent post: {latestPost.name}</p>
// 			) : (
// 				<p>You have no posts yet.</p>
// 			)}

// 			<CreatePost />
// 		</div>
// 	);
// }
