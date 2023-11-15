import { buttonVariants } from "../_components/ui/button";
import Link from "next/link";

export default function Templates() {
	return (
		<main className="grid min-h-screen place-content-center">
			<Link
				className={buttonVariants({ variant: "default" })}
				href="/templates/new"
			>
				Create new template
			</Link>
		</main>
	);
}
