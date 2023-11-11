import SubscribersTable from "@/app/_components/subscribers-table";
import { columns } from "@/app/_components/colunms";
import AddEmail from "@/app/_components/add-email";

export default function Subscribers() {
	return (
		<div className='flex h-full flex-1 flex-col p-3'>
			<header className='flex items-center justify-between space-y-2'>
				<div className='my-2'>
					<h1 className='text-2xl font-bold'>Welcome user</h1>
					<p>you have not touched yout code today</p>
				</div>
				<div>
					<AddEmail />
				</div>
			</header>
			<SubscribersTable
				data={tasks}
				columns={columns}
			/>
		</div>
	);
}

const tasks = [
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
	{
		id: "TASK-8782",
		email: "example@gmail.com",
		subscriptionDate: "2033-23-23",
		subscriberName: "Elvis Ndubuisi",
		group: ["medium", "works"],
	},
];
