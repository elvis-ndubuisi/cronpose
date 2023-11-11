import Link from "next/link";
import { Navigation } from "./_components/navigation";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import { getServerAuthSession } from "@/server/auth";
import { geist } from "@/app/lib/font";
import { Settings, Send, Mail, Icon00, Tweak } from "@/app/_components/icons";
// import { api } from "@/trpc/server";

export default async function Home() {
	// const hello = await api.post.hello.query({ text: "from tRPC" });
	const session = await getServerAuthSession();

	return (
		<>
			<Navigation />
			<main className='flex min-h-screen'>
				<div className='mx-auto grid items-center gap-6'>
					<div className='flex flex-col justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h1 className='bg-gradient-to-r from-zinc-900 to-gray-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent dark:from-white dark:to-gray-500 sm:text-5xl xl:text-6xl/none'>
								Welcome to our email client
							</h1>
							<p className='mx-auto max-w-[600px] text-zinc-600 dark:text-zinc-100 md:text-xl'>
								Manage all your emails in one place. Securely and efficiently.
							</p>
						</div>
						<div className='mx-auto w-full max-w-sm space-y-2'>
							<form className='flex space-x-2'>
								<Input
									className='max-w-lg flex-1 border-gray-900 bg-gray-800 text-white'
									placeholder='Enter your email'
									type='email'
								/>
								<Button
									variant='default'
									type='submit'>
									Start Now
								</Button>
							</form>
							<section>
								<Icon00 />
								<Tweak />
								<Settings />
								<Mail />
								<Send />
							</section>
							<p className='text-xs text-zinc-600 dark:text-zinc-100'>
								Start managing your emails today.
								<Link
									className='text-white underline underline-offset-2'
									href='#'>
									Terms & Conditions
								</Link>
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
