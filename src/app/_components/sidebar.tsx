import { Separator } from "./ui/separator";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
	Settings,
	Trash,
	ScrollText,
	MailBox,
	MailWarning,
	SendHorizontal,
	Users,
} from "./icons";
import { SidebarLink } from "./nav-link";

export default function Sidebar() {
	return (
		<aside className='flex h-full w-52 flex-col justify-start space-y-3 p-3'>
			<section className='flex flex-col gap-1'>
				<SidebarLink href='/u/subscribers'>
					<MailBox className='mr-3 h-5 w-5' />
					Subscribers
				</SidebarLink>
				{/* <Link
					href='/u/subscribers'
					className={buttonVariants({
						variant: "secondary",
						className: "flex w-full justify-stretch",
					})}>
					<MailBox className='mr-3 h-5 w-5' />
					Subscribers
				</Link> */}
				<SidebarLink href='/u/sent'>
					<SendHorizontal className='mr-3 h-5 w-5' />
					Sent
				</SidebarLink>
				<SidebarLink href='/u/draft'>
					<ScrollText className='mr-3 h-5 w-5' />
					Draft
				</SidebarLink>
				<SidebarLink href='/u/trash'>
					<Trash className='mr-3 h-5 w-5' />
					Trash
				</SidebarLink>
				<SidebarLink href='/settings'>
					<Settings className='mr-3 h-5 w-5' />
					Settings
				</SidebarLink>
				<SidebarLink href='/analytics'>
					<MailWarning className='mr-3 h-5 w-5' />
					Analytics
				</SidebarLink>
			</section>
			<Separator />
			<section className='flex flex-col gap-1'>
				<h2 className='mb-2 text-lg font-semibold tracking-tight'>Groups</h2>
				<SidebarLink href='/u/group/asdfad'>
					<Users className='mr-3 h-5 w-5' />
					Sales Team
				</SidebarLink>
				<SidebarLink href='/u/group/asdfad'>
					<Users className='mr-3 h-5 w-5' />
					Youtube People
				</SidebarLink>
				<SidebarLink href='/u/group/asdfad'>
					<Users className='mr-3 h-5 w-5' />
					Expenses
				</SidebarLink>
				<SidebarLink href='/u/group/asdfad'>
					<Users className='mr-3 h-5 w-5' />
					Personal
				</SidebarLink>
			</section>
		</aside>
	);
}
