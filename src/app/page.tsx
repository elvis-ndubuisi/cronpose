import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";
import Navbar from "./_components/navigations/navbar";
import PageFooter from "./_components/page-footer";
import { Button } from "./_components/ui/button";
import { redirect } from "next/navigation";

export default async function Home() {
	// const hello = await api.post.hello.query({ text: "from tRPC" });
	const session = await getServerAuthSession();
	if (session?.user) redirect("/n/subscribers");

	return (
		<>
			<Navbar />
			<section className="grid h-[400px] place-content-center">
				<div className="mx-auto max-w-screen-xl space-y-2 px-4">
					<h1 className="bg-gradient-to-b from-secondary-foreground to-accent-foreground bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
						Revolutionize Your Mailing Experience.
					</h1>
					<p className="mx-auto max-w-[600px] text-accent-foreground md:text-xl">
						Join us and take control of your inbox. Fast, secure, and designed
						for modern life.
					</p>
					<Button variant="secondary" size="lg">
						Get Started
					</Button>
				</div>
			</section>
			{/* <main className="min-h-screen">section</main> */}
			<PageFooter />
		</>
	);
}
