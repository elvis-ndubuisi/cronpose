import { Separator } from "~/app/_components/ui/separator";
import { MailCard, MailCardSkeleton } from "~/app/_components/mail-card";
import { ScrollArea } from "~/app/_components/ui/scroll-area";
import { Search, Flag } from "~/app/_components/icons";

export default function MailsListings(props: {
	children: React.ReactNode;
	params: { action: string };
}) {
	return (
		<>
			<section className="flex w-full">
				<div>
					<header className="sticky top-0 flex items-center justify-between px-2 py-1">
						<div className="flex items-center gap-2">
							<Flag className="h-4 w-4" />
							<p className="font-bold capitalize">{props.params.action}</p>
						</div>
						<button className="p-1">
							<Search className="h-5 w-5" />
						</button>
					</header>
					<ScrollArea className="h-full w-[370px] p-3">
						{/* <MailCardSkeleton /> */}
						{/* <MailCardSkeleton /> */}
						{/* <MailCardSkeleton /> */}
						<MailCardSkeleton />
						<MailCard mail_id={"23"} />
						<MailCard mail_id={"234"} />
						<MailCard mail_id={"234"} />
						<MailCard mail_id={"234"} />
					</ScrollArea>
				</div>
				<Separator orientation="vertical" />
				{props.children}
			</section>
		</>
	);
}
