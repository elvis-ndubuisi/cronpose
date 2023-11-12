"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function SidebarLink(props: { children: React.ReactNode; href: string }) {
	const pathname = usePathname();

	if (props.href !== pathname) {
		return (
			<Link
				href={props.href}
				className={buttonVariants({
					variant: "ghost",
					className: "flex w-full justify-stretch",
				})}>
				{props.children}
			</Link>
		);
	}

	return (
		<Link
			href={props.href}
			className={buttonVariants({
				variant: "secondary",
				className: "flex w-full justify-stretch",
			})}>
			{props.children}
		</Link>
	);
}
