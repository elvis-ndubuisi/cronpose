"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { type Mail } from "~/lib/validations/mails";
import SubscribersTableColumnHeader from "./subscribers-table-column-header";
import SubscribersTableRowActions from "./subscribers-table-row-actions";

export const columns: ColumnDef<Mail>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected()}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
				className="translate-y-[2px]"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
				className="translate-y-[2px]"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "id",
		header: ({ column }) => (
			<SubscribersTableColumnHeader column={column} title="Email ID" />
		),
		cell: ({ row }) => (
			<div className="line-clamp-1 w-[80px]">{row.getValue("id")}</div>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<SubscribersTableColumnHeader column={column} title="Subscriber Name" />
		),
		cell: ({ row }) => {
			// const label = labels.find((label) => label.value === row.original.label);

			return (
				<div className="flex space-x-2">
					{/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue("name")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "address",
		header: ({ column }) => (
			<SubscribersTableColumnHeader column={column} title="Email Address" />
		),
		cell: ({ row }) => {
			// const label = labels.find((label) => label.value === row.original.label);

			return (
				<div className="flex space-x-2">
					{/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue("address")}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "subscriptionDate",
		header: ({ column }) => (
			<SubscribersTableColumnHeader column={column} title="Subscription Date" />
		),
		cell: ({ row }) => {
			const date = new Date(
				row.getValue("subscriptionDate"),
			).toLocaleDateString();
			return (
				<div className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">{date}</span>
				</div>
			);
		},
	},
	{
		accessorKey: "folders",
		header: ({ column }) => (
			<SubscribersTableColumnHeader column={column} title="Group" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue("folder")}
					</span>
				</div>
			);
		},
	},

	// {
	// 	accessorKey: "status",
	// 	header: ({ column }) => (
	// 		<SubscriberTableColumnHeader
	// 			column={column}
	// 			title='Status'
	// 		/>
	// 	),
	// 	cell: ({ row }) => {
	// 		const status = statuses.find((status) => status.value === row.getValue("status"));

	// 		if (!status) {
	// 			return null;
	// 		}

	// 		return (
	// 			<div className='flex w-[100px] items-center'>
	// 				{status.icon && <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />}
	// 				<span>{status.label}</span>
	// 			</div>
	// 		);
	// 	},
	// 	filterFn: (row, id, value) => {
	// 		return value.includes(row.getValue(id));
	// 	},
	// },
	// {
	// 	accessorKey: "priority",
	// 	header: ({ column }) => (
	// 		<SubscriberTableColumnHeader
	// 			column={column}
	// 			title='Priority'
	// 		/>
	// 	),
	// 	cell: ({ row }) => {
	// 		const priority = priorities.find(
	// 			(priority) => priority.value === row.getValue("priority"),
	// 		);

	// 		if (!priority) {
	// 			return null;
	// 		}

	// 		return (
	// 			<div className='flex items-center'>
	// 				{priority.icon && (
	// 					<priority.icon className='mr-2 h-4 w-4 text-muted-foreground' />
	// 				)}
	// 				<span>{priority.label}</span>
	// 			</div>
	// 		);
	// 	},
	// 	filterFn: (row, id, value) => {
	// 		return value.includes(row.getValue(id));
	// 	},
	// },
	{
		id: "actions",
		cell: ({ row }) => <SubscribersTableRowActions row={row} />,
	},
];
