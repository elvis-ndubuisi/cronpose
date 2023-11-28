"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";

export default function UserMenu(props: { session: Session }) {
	const user = props.session.user;
	return (
		<section className="flex items-center gap-2">
			{/* <Badge variant="secondary" className="">
				200 MCR
			</Badge> */}
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={"ghost"} className="relative h-8 w-8 rounded-full">
						<Avatar className="h-8 w-8">
							<AvatarImage src={user.image ?? ""} alt={user.name ?? ""} />
							<AvatarFallback>SC</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				{/* Menu */}
				<DropdownMenuContent className="w-56" align="end" forceMount>
					<DropdownMenuLabel className="">
						<div className="flex flex-col space-y-1">
							<p className="text-sm font-semibold leading-none">
								{user.name ?? ""}
							</p>
							<p className="text-xs font-medium leading-none text-muted-foreground">
								{user.email}
							</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<p className="px-4 text-xs font-medium">200 Credits Remaining</p>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem asChild>
							<Link href={`/n/subscribers`}>Dashboard</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Billing
							<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Settings
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>New Team</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => signOut()}>
						Log out
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</section>
	);
}
