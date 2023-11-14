import { Separator } from "../ui/separator";
import {
	Settings,
	Trash,
	ScrollText,
	MailBox,
	MailWarning,
	SendHorizontal,
	Users,
} from "../icons";
import { SidebarLink } from "./nav-links";
import { buttonVariants } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import AddFolder from "../buttons/add-folder";

export default function Sidebar() {
	return (
		<aside className="flex h-full w-60 flex-col justify-between space-y-3 p-3">
			<section className="flex flex-col gap-1">
				<SidebarLink href="/n/subscribers">
					<MailBox className="mr-3 h-5 w-5" />
					Subscribers
				</SidebarLink>
				<SidebarLink href="/n/sent">
					<SendHorizontal className="mr-3 h-5 w-5" />
					Sent
				</SidebarLink>
				<SidebarLink href="/n/draft">
					<ScrollText className="mr-3 h-5 w-5" />
					Draft
				</SidebarLink>
				<SidebarLink href="/n/trash">
					<Trash className="mr-3 h-5 w-5" />
					Trash
				</SidebarLink>
				<SidebarLink href="/settings">
					<Settings className="mr-3 h-5 w-5" />
					Settings
				</SidebarLink>
				<SidebarLink href="/analytics">
					<MailWarning className="mr-3 h-5 w-5" />
					Analytics
				</SidebarLink>
			</section>
			<Separator />
			<ScrollArea className="flex flex-1 flex-col gap-1">
				<div className="flex items-center justify-between">
					<h2 className="mb-2 text-lg font-semibold tracking-tight">Groups</h2>
					<AddFolder />
				</div>
				<SidebarLink href="/n/folder/asdfad">
					<Users className="mr-3 h-5 w-5" />
					Sales Team
				</SidebarLink>
				<SidebarLink href="/n/folder/asdfad">
					<Users className="mr-3 h-5 w-5" />
					Youtube People
				</SidebarLink>
				<SidebarLink href="/n/folder/asdfad">
					<Users className="mr-3 h-5 w-5" />
					Expenses
				</SidebarLink>
			</ScrollArea>
			<Separator />
			<Link
				className={buttonVariants({ size: "lg", variant: "default" })}
				href="/n/compose/new"
			>
				Compose
			</Link>
		</aside>
	);
}