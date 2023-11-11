"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
}

export default function SubscriberTableToolbar() {
	return <section className='flex items-center justify-between'>table toolbar</section>;
}
