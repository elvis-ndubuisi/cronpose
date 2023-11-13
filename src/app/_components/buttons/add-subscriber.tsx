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
import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function AddSubscriber() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					<PlusCircledIcon className="mr-3 h-5 w-5" />
					Add Email
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[475px]">
				<DialogHeader>
					<DialogTitle>Add Subscriber</DialogTitle>
					<DialogDescription>
						This will save the current playground state as a preset which you
						can access later or share with others.
					</DialogDescription>
				</DialogHeader>

				<div className="grid gap-4 py-4">
					<div className="grid gap-2">
						<Label htmlFor="name">Name</Label>
						<Input id="name" autoFocus placeholder="Davy Jones" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="description">Email Address</Label>
						<Input id="email" type="email" placeholder="subscriber@email.com" />
					</div>
				</div>

				<DialogFooter>
					<Button type="submit">Save</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
