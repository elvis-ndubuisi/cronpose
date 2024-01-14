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
import { createGroupAction } from "~/app/_actions/folder-actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusIcon } from "@radix-ui/react-icons";

export function CreateGroup() {
	const router = useRouter();
	const [name, setName] = useState<string>("");
	// const createFolder = api.folder.create.useMutation({
	// 	onSuccess: () => {
	// 		router.refresh();
	// 		setName("");
	// 	},
	// });
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="icon" variant="ghost">
					<PlusIcon />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<form action={createGroupAction}>
					<DialogHeader>
						<DialogTitle>Add new folder</DialogTitle>
						<DialogDescription>
							Group your subscribed mails into folders.
						</DialogDescription>
					</DialogHeader>
					<div className="flex items-center space-x-2">
						{/* <form
						action={createGroupAction}
						// onSubmit={(e) => {
						// 	e.preventDefault();
						// 	console.log("okkkk");
						// 	createFolder.mutate({ name });
						// }}
						className="grid flex-1 gap-2"
					> */}
						<Label htmlFor="name" className="sr-only">
							Folder Name
						</Label>
						<Input
							id="name"
							// onChange={(e) => setName(e.target.value)}
							placeholder="Folder name"
						/>
						{/* </form> */}
					</div>
					<DialogFooter>
						{/* <Button type="submit" disabled={createFolder.isLoading}>
						{createFolder.isLoading ? "Saving..." : "Save changes"}
					</Button> */}
					</DialogFooter>
					<Button type="submit">Save changes</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
