import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Navbar from "./_components/navigations/navbar";
import PageFooter from "./_components/page-footer";

export default async function Home() {
	const hello = await api.post.hello.query({ text: "from tRPC" });
	const session = await getServerAuthSession();

	return (
		<>
			<Navbar />
			<main className="min-h-screen"></main>
			<PageFooter />
		</>
	);
}
