"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";
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

export function UserNav() {
	return (
		<section className='flex items-center gap-2'>
			<Badge
				variant='default'
				className='py-1.5'>
				200 Credits
			</Badge>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant={"ghost"}
						className='relative h-8 w-8 rounded-full'>
						<Avatar className='h-8 w-8'>
							<AvatarImage
								src='/avatars/01.png'
								alt='@shadcn'
							/>
							<AvatarFallback>SC</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				{/* Menu */}
				<DropdownMenuContent
					className='w-56'
					align='end'
					forceMount>
					<DropdownMenuLabel className=''>
						<div className='flex flex-col space-y-1'>
							<p className='text-sm font-semibold leading-none'>shadcn</p>
							<p className='text-xs font-medium leading-none text-muted-foreground'>
								m@example.com
							</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem asChild>
							<Link href={`/u/dashboard`}>Dashboard</Link>
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
					<DropdownMenuItem>
						Log out
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</section>
	);
}
