import Link from "next/link";
import { cn } from "../lib/utils";

export function NavMenu({ className, ...props }: React.HtmlHTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn("flex items-baseline space-x-4 lg:space-x-6", className)}
			{...props}>
			<Link href='/about'>About</Link>
			<Link href='/features'>Features</Link>
			<Link href='/pricing'>Pricing</Link>
			<Link href='/developer'>Developer</Link>
		</nav>
	);
}
