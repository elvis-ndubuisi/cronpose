import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";

export default async function Home() {
	// const hello = await api.post.hello.query({ text: "from tRPC" });
	const session = await getServerAuthSession();

	return (
		<main className='flex min-h-screen flex-col items-center justify-center'>
			<div className='flex w-full max-w-sm flex-col gap-4 rounded-md border border-gray-500 p-6'>
				<header className='space-y-1'>
					<h1 className='text-2xl font-medium'>Create an account</h1>
					<p className='text-sm text-gray-300'>
						Enter your email below to create an account
					</p>
				</header>
				<div className='flex items-center justify-between'>
					<button
						type='button'
						className='min-w-[150px] rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200'>
						Alternative
					</button>
					<button
						type='button'
						className='min-w-[150px] rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200'>
						Alternative
					</button>
				</div>
				<form action=''></form>
				<div className='flex items-center'>
					<span className='border' />
					<p>OR CONTINUE WITH</p>
					<span className='border' />
				</div>
				<button>Gmail</button>

				<footer>
					<p>
						By clicking continue, you agree to our{" "}
						<Link href={"/"}>Terms of Services</Link> and{" "}
						<Link href={"/"}>Privacy Policy</Link>
					</p>
				</footer>
			</div>
		</main>
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
