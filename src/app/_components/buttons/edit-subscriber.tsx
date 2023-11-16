"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { api } from "~/trpc/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Mail } from "~/lib/validations/mails";

export default function EditSubscriber(props: Mail) {
	const router = useRouter();
	const [formData, setFormData] = useState({ address: "", name: "" });
	// TODO: add zod validation check

	const editSubscriber = api.subscriber.edit.useMutation({
		onSuccess() {
			router.refresh();
		},
	});

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div>Edit</div>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[475px]">
				<DialogHeader>
					<DialogTitle>Edit Subscriber</DialogTitle>
					<DialogDescription>
						This will save the current playground state as a preset which you
						can access later or share with others.
					</DialogDescription>
				</DialogHeader>

				<div className="grid gap-4 py-4">
					<div className="grid gap-2">
						<Label htmlFor="name">Name</Label>
						<Input
							id="name"
							autoFocus
							placeholder="Davy Jones"
							defaultValue={props?.name}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, name: e.target.value }))
							}
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="description">Email Address</Label>
						<Input
							id="email"
							type="email"
							defaultValue={props.address}
							placeholder="subscriber@email.com"
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, address: e.target.value }))
							}
						/>
					</div>
				</div>

				<DialogFooter>
					<Button
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							editSubscriber.mutate({
								address: formData.address,
								...(formData.name && { name: formData.name }),
								id: props.id,
							});
						}}
					>
						{editSubscriber.isLoading ? "Saving..." : "Save"}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
