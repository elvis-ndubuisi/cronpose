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
import { PlusIcon } from "@radix-ui/react-icons";

export default function AddFolder() {
	const router = useRouter();
	const [name, setName] = useState<string>("");
	const createFolder = api.folder.create.useMutation({
		onSuccess: () => {
			router.refresh();
			setName("");
		},
	});
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="icon" variant="ghost">
					<PlusIcon />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Add new folder</DialogTitle>
					<DialogDescription>
						Group your subscribed mails into folders.
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							console.log("okkkk");
							createFolder.mutate({ name });
						}}
						className="grid flex-1 gap-2"
					>
						<Label htmlFor="link" className="sr-only">
							Folder Name
						</Label>
						<Input
							id="name"
							onChange={(e) => setName(e.target.value)}
							placeholder="Folder name"
						/>
					</form>
				</div>
				<DialogFooter>
					<Button type="submit" disabled={createFolder.isLoading}>
						{createFolder.isLoading ? "Saving..." : "Save changes"}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
