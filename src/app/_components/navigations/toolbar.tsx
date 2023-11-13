import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";
import { Mail, Trash } from "../icons";

export default function Toolbar() {
	return (
		<TooltipProvider>
			<header className="flex items-center justify-between py-2">
				<section className="flex gap-4">
					{/* Compose */}
					<Tooltip>
						<TooltipTrigger>
							<Link href="/n/componse/new">
								<Mail className="h-5 w-5 hover:opacity-60" />
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Compose a mail</p>
						</TooltipContent>
					</Tooltip>
					{/* Trash */}
					<Tooltip>
						<TooltipTrigger>
							<Link href="/n/componse/new">
								<Trash className="h-5 w-5 hover:opacity-60" />
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Compose a mail 3</p>
						</TooltipContent>
					</Tooltip>
					{/* Undo */}
					<Tooltip>
						<TooltipTrigger>
							<Link href="/n/componse/new">
								<Mail className="h-5 w-5 hover:opacity-60" />
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Compose a mail 223</p>
						</TooltipContent>
					</Tooltip>
					{/* Redo */}
					<Tooltip>
						<TooltipTrigger>
							<Link href="/n/componse/new">
								<Mail className="h-5 w-5 hover:opacity-60" />
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Compose a mail 223</p>
						</TooltipContent>
					</Tooltip>
				</section>
				<section></section>
			</header>
		</TooltipProvider>
	);
}
