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

export default function Sidebar() {
	return (
		<aside className='flex h-full w-52 flex-col justify-start space-y-3 py-3'>
			<section>
				<Link
					href='subscribers'
					className={buttonVariants({
						variant: "ghost",
						className: "flex w-full justify-stretch",
					})}>
					<MailBox className='mr-3 h-5 w-5' />
					Subscribers
				</Link>
				<Link
					href='sent'
					className={buttonVariants({
						variant: "ghost",
						className: "flex w-full justify-stretch",
					})}>
					<SendHorizontal className='mr-3 h-5 w-5' />
					Sent
				</Link>
				<Link
					href='draft'
					className={buttonVariants({
						variant: "ghost",
						className: "flex w-full justify-stretch",
					})}>
					<ScrollText className='mr-2 h-5 w-5' />
					Draft
				</Link>
				<Link
					href='trash'
					className={buttonVariants({
						variant: "ghost",
						className: "flex w-full justify-stretch",
					})}>
					<Trash className='mr-3 h-5 w-5' />
					Trash
				</Link>
				<Link
					href='/settings'
					className={buttonVariants({
						variant: "ghost",
						className: "flex w-full justify-stretch",
					})}>
					<Settings />
					Settings
				</Link>
				<Link
					href='analytics'
					className={buttonVariants({
						variant: "ghost",
						className: "flex w-full justify-stretch",
					})}>
					<MailWarning className='mr-3 h-5 w-5' />
					Analytics
				</Link>
			</section>
			<Separator />
			<section className='flex flex-col space-y-2'>
				<h2 className='mb-2 text-lg font-semibold tracking-tight'>Group</h2>

				<Link
					href='/u/group/asdfad'
					className={buttonVariants({
						variant: "ghost",
						className: "flex w-full justify-stretch",
					})}>
					<Users className='mr-3 h-5 w-5' />
					Sales Team
				</Link>
				<Link
					href='/u/group/asdfad'
					className={buttonVariants({
						variant: "ghost",
						className: "flex w-full justify-stretch",
					})}>
					<Users className='mr-3 h-5 w-5' />
					Youtube People
				</Link>
				<Link
					href='/u/group/asdfad'
					className={buttonVariants({
						variant: "ghost",
						className: "flex w-full justify-stretch",
					})}>
					<Users className='mr-3 h-5 w-5' />
					Expenses
				</Link>
				<Link
					href='/u/group/asdfad'
					className={buttonVariants({
						variant: "ghost",
						className: "flex w-full justify-stretch",
					})}>
					<Users className='mr-3 h-5 w-5' />
					Personal
				</Link>
			</section>
		</aside>
	);
}
