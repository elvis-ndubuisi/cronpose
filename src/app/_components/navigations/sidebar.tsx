import { Separator } from "../ui/separator";
import {
	Settings,
	Trash,
	ScrollText,
	MailBox,
	MailWarning,
	SendHorizontal,
	Envelope,
} from "../icons";
import { SidebarLink } from "./nav-links";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import GroupList from "../group/group-list";

export default function Sidebar() {
	return (
		<aside className="flex h-full w-60 flex-col justify-between space-y-3 p-3">
			<section className="flex flex-col gap-1">
				<SidebarLink href="/n/emails">
					<Envelope className="mr-3 h-5 w-5" />
					Emails
				</SidebarLink>
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
				<SidebarLink href="/n/settings">
					<Settings className="mr-3 h-5 w-5" />
					Settings
				</SidebarLink>
				<SidebarLink href="/analytics">
					<MailWarning className="mr-3 h-5 w-5" />
					Analytics
				</SidebarLink>
			</section>
			<Separator />
			<GroupList />
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
