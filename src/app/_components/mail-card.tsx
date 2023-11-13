"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { cn } from "~/lib/utils";
import { Skeleton } from "./ui/skeleton";

export function MailCard(props: { mail_id: string }) {
	const params = useParams<{ action: string }>();
	const path = usePathname();
	const href = `/n/${params.action}/${props.mail_id}`;

	return (
		<Link
			href={href}
			className={cn(
				"mb-2 block rounded-md border p-2",
				path === href && "border-primary opacity-50",
			)}
		>
			<div className="flex items-center justify-between gap-3">
				<h3 className="line-clamp-1 flex-1 text-sm font-medium">
					Email title Lorem
				</h3>
				<Button
					type="button"
					onClick={(e) => {
						e.preventDefault();
						alert("clicked");
					}}
					size="icon"
					variant="ghost"
				>
					<DotsHorizontalIcon />
				</Button>
			</div>
			<p className="line-clamp-2 text-sm leading-tight opacity-60">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis est,
				reprehenderit culpa quisquam accusamus aliquid nihil aliquam
				consequuntur libero! Reprehenderit soluta quod sed aliquam doloremque
				recusandae suscipit aut corporis asperiores?
			</p>
			<time className="text-xs text-gray-500 dark:text-gray-400">
				22-34-1234
			</time>
		</Link>
	);
}

export function MailCardSkeleton() {
	return (
		<div className="mb-2 flex flex-col space-y-2 rounded-md border p-2">
			<div className="flex justify-between">
				<Skeleton className="h-6 w-1/2" />
				<Skeleton className="h-6 w-6" />
			</div>
			<Skeleton className="h-3 w-full" />
			<Skeleton className="h-3 w-[200px]" />
		</div>
	);
}
