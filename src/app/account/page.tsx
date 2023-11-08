import { Metadata } from "next";
import Link from "next/link";
// import { UserLoginForm } from "@/app/_components/user-login-form";
// import UserLoginForm from "@/app/_components/user-login-form";
import LoginForm from "./login-form";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/app/lib/utils";

export const metadata: Metadata = {
	title: "Login",
	description: "Authentication forms built using the components.",
};

export default function LoginPage() {
	return (
		<main className='mx-auto grid h-screen max-w-screen-2xl grid-cols-2'>
			<aside className='relative hidden bg-gray-100 md:block'>
				<Link
					href='/'
					className='absolute left-4 top-4 text-2xl font-bold tracking-tight md:text-3xl'>
					Ceed-Mail
				</Link>
			</aside>
			{/* <UserLoginForm /> */}
			<div className='relative grid place-content-center lg:p-8'>
				<nav className='absolute right-4 top-4 flex items-center gap-3'>
					<Link
						href='/'
						className={cn(buttonVariants({ variant: "ghost" }))}>
						Home
					</Link>
					<Link
						href='/pricing'
						className={cn(buttonVariants({ variant: "ghost" }))}>
						Pricing
					</Link>
					<Link
						href='/account/register'
						className={cn(buttonVariants({ variant: "outline" }))}>
						Register
					</Link>
				</nav>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col space-y-2 text-center'>
						<h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
							Create an account
						</h1>
						<p className='text-muted-foreground'>
							Enter your email below to create your account
						</p>
					</div>
					<LoginForm />
					<p className='px-8 text-center text-sm text-muted-foreground'>
						By clicking continue, you agree to our{" "}
						<Link
							href='/terms'
							className='underline underline-offset-4 hover:text-primary'>
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link
							href='/privacy'
							className='underline underline-offset-4 hover:text-primary'>
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</div>
		</main>
	);
}
