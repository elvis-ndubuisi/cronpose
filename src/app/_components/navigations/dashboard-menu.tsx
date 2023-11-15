import Link from "next/link";
import UserMenu from "../user-menu";
import { getServerAuthSession } from "~/server/auth";

const LINKS = [
	{ title: "Home", href: "/" },
	{ title: "Templates", href: "/templates" },
	{ title: "Profile", href: "/profile" },
	{ title: "Notification", href: "/notifications" },
];

export default async function DashboardMenu() {
	const session = await getServerAuthSession();
	return (
		<header className="py-2">
			<section className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-3">
				<nav className="flex items-center gap-4">
					{LINKS.map((link) => (
						<Link
							className="text-sm capitalize"
							href={link.href}
							key={link.title}
						>
							{link.title}
						</Link>
					))}
				</nav>
				{session && <UserMenu session={session} />}
			</section>
		</header>
	);
}
