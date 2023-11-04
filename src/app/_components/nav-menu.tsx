import Link from "next/link";
import { cn } from "../lib/utils";

export function NavMenu({ className, ...props }: React.HtmlHTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn("flex items-center space-x-4 lg:space-x-6", className)}
			{...props}>
			<Link href='/'>About</Link>
			<Link href='/'>Features</Link>
			<Link href='/'>Pricing</Link>
			<Link href='/'>Pricing</Link>
		</nav>
	);
}
