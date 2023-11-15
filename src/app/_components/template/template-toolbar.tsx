import { Button, buttonVariants } from "../ui/button";
import { Settings } from "../icons";

export default function TemplateToolbar() {
	return (
		<header className="flex items-center justify-between">
			<section>
				<Button size="icon">bk</Button>
				<h4>Template title</h4>
			</section>
			<div>preview</div>
			<section>
				<Button size="icon">Undo</Button>
				<Button size="icon">Redo</Button>
				<Button>Draft</Button>
				<Button>Save</Button>
			</section>
		</header>
	);
}
