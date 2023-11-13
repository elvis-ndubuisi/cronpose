"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function SidebarLink(props: {
	children: React.ReactNode;
	href: string;
}) {
	const pathname = usePathname();

	return (
		<Link
			href={props.href}
			className={buttonVariants({
				variant: pathname.includes(props.href) ? "secondary" : "ghost",
				className: "flex w-full justify-stretch",
			})}
		>
			{props.children}
		</Link>
	);
}
