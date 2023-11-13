import AddSubscriber from "~/app/_components/buttons/add-subscriber";
import { columns } from "~/app/_components/table/columns";
import SubscribersTable from "~/app/_components/table/subscribers-table";
import { mails } from "~/lib/data";

export default function Folder() {
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
			<SubscribersTable data={mails} columns={columns} />
		</section>
	);
}
