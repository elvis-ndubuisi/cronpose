import Link from "next/link";
import { UserNav } from "./user-nav";

const LINKS = [
	{ title: "Home", href: "/" },
	{ title: "Templates", href: "template" },
	{ title: "Profile", href: "profile" },
	{ title: "Notification", href: "/notifications" },
];

export default function DashboardMenu() {
	return (
		<header className='py-2'>
			<section className='font-sm mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-3'>
				<nav className='flex items-center gap-4'>
					{LINKS.map((link) => (
						<Link
							className='text-sm capitalize'
							href={link.href}
							key={link.title}>
							{link.title}
						</Link>
					))}
				</nav>
				{/* <UserNav /> */}
			</section>
		</header>
	);
}
