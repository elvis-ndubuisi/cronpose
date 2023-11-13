import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Button } from "./_components/ui/button";

export default async function Home() {
	const hello = await api.post.hello.query({ text: "from tRPC" });
	const session = await getServerAuthSession();
	return (
		<main className="min-h-screen">
			<Button variant={"destructive"}>asdfads</Button>
		</main>
	);
}
