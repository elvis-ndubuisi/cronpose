import { Separator } from "@/app/_components/ui/separator";

export default function MailActions({ children }: { children: React.ReactNode }) {
	return (
		<section className='flex'>
			<div className='h-full w-full max-w-sm p-3'>adsfa</div>
			<Separator orientation='vertical' />
			{children}
		</section>
	);
}
