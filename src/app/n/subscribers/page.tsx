import SubscribersTable from "~/app/_components/table/subscribers-table";
import { columns } from "~/app/_components/table/columns";
import AddSubscriber from "~/app/_components/buttons/add-subscriber";
import { api } from "~/trpc/server";
import { unstable_noStore as noStore } from "next/cache";

export default async function Subscribers() {
	noStore();
	const subscribers = await api.subscriber.getSubs.query();
	return (
		<div className="flex h-full flex-1 flex-col p-3">
			<header className="flex items-center justify-between space-y-2">
				<div className="my-2">
					<h1 className="text-2xl font-bold">Welcome user</h1>
					<p>you have not touched yout code today</p>
				</div>
				<div>
					<AddSubscriber />
				</div>
			</header>
			<SubscribersTable data={subscribers} columns={columns} />
		</div>
	);
}
