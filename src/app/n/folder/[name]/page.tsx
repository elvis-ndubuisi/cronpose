import AddSubscriber from "~/app/_components/buttons/add-subscriber";
import { columns } from "~/app/_components/table/columns";
import SubscribersTable from "~/app/_components/table/subscribers-table";
import { api } from "~/trpc/server";

export default async function Folder(props: { params: { name; string } }) {
	const subscribers = await api.folder.getSubscribers.query({
		name: props.params.name,
	});
	return (
		<section className="flex h-full flex-1 flex-col p-3">
			<header className="flex items-center justify-between space-y-2">
				<div>
					<h1>Welcome user</h1>
				</div>
				<div>
					<AddSubscriber />
				</div>
			</header>
			<SubscribersTable data={subscribers} columns={columns} />
		</section>
	);
}
