import { api } from "~/trpc/server";
import { unstable_noStore as noStore } from "next/cache";
import { ScrollArea } from "../ui/scroll-area";
import { SidebarLink } from "../navigations/nav-links";
import { Container, Users } from "../icons";
import { CreateGroup } from "./create-group";

// TODO: rename folder api to group
export default async function GroupList() {
	noStore();
	const groups = await api.folder.getFolders.query();

	return (
		<ScrollArea className="flex flex-1 flex-col gap-1">
			<div className="flex items-center justify-between">
				<h2 className="mb-2 flex items-center space-x-2 text-lg font-semibold tracking-tight">
					<Container className="h-5 w-5" /> <span>Groups</span>
				</h2>
				{/* <AddFolder /> */}
				<CreateGroup />
			</div>
			{/* TODO: add empty state view */}
			{groups.map((group) => (
				<SidebarLink
					href={`/n/group/${group.name.toLowerCase()}`}
					key={group.id}
				>
					<Users className="mr-3 h-5 w-5" />
					{group.name}
				</SidebarLink>
			))}
		</ScrollArea>
	);
}
