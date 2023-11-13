import Toolbar from "~/app/_components/navigations/toolbar";

export default function ViewPage({ params }: { params: { view: string } }) {
	return (
		<div className="w-full p-2">
			<Toolbar />
			{params.view}
		</div>
	);
}
