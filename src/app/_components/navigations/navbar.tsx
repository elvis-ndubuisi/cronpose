import { cn } from "~/lib/utils";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import UserMenu from "../user-menu";
import { buttonVariants } from "../ui/button";

export default async function Navbar() {
	const session = await getServerAuthSession();
	return (
		<header className="sticky top-0 border-b border-gray-200 bg-white/10 backdrop-blur-md dark:border-gray-800 dark:bg-black/10">
			<section className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3">
				<h1 className="text-2xl font-semibold tracking-normal">
					Mail<span className="text-primary font-bold">Aster</span>
				</h1>
				{session ? (
					<UserMenu session={session} />
				) : (
					<Link
						className={cn(buttonVariants({ variant: "link" }))}
						href="/api/auth/signin"
					>
						Join
					</Link>
				)}
			</section>
		</header>
	);
}
