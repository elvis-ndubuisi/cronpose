"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { type Row } from "@tanstack/react-table";
import { mailSchema } from "~/lib/validations/mails";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import EditSubscriber from "../buttons/edit-subscriber";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface DataTableRowActionsProps<TData> {
	row: Row<TData>;
}

export default function SubscribersTableRowActions({
	row,
}: DataTableRowActionsProps<TData>) {
	const router = useRouter();
	const email = mailSchema.parse(row.original);

	const deleteSubscriber = api.subscriber.delete.useMutation({
		onSuccess: () => {
			router.refresh();
		},
	});

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
				>
					<DotsHorizontalIcon className="h-4 w-4" />
					<span className="sr-only">Open menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[160px]">
				<DropdownMenuItem>
					<EditSubscriber {...email} />
				</DropdownMenuItem>
				<DropdownMenuItem>Make a copy</DropdownMenuItem>
				<DropdownMenuItem>Favorite</DropdownMenuItem>
				{/* <DropdownMenuSeparator />
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuRadioGroup value={task.label}>
							{labels.map((label) => (
								<DropdownMenuRadioItem
									key={label.value}
									value={label.value}>
									{label.label}
								</DropdownMenuRadioItem>
							))}
						</DropdownMenuRadioGroup>
					</DropdownMenuSubContent>
				</DropdownMenuSub> */}
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={() => deleteSubscriber.mutate({ id: email.id })}
				>
					<>
						Delete
						<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
					</>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
