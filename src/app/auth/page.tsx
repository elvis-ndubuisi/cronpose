import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Login",
	description: "Authentication forms built using the components.",
};

export default function AuthPage() {
	return (
		<>
			<main className="mx-auto grid h-screen max-w-screen-2xl">
				<div className="relative grid place-content-center lg:p-8">
					<div className="mx-auto flex w-full flex-col justify-center space-y-6 px-4 sm:w-[350px]">
						<div className="flex flex-col space-y-2 text-center">
							<h1 className="text-2xl font-bold tracking-tight md:text-3xl">
								Create an account
							</h1>
							<p className="text-muted-foreground">
								Enter your email below to create your account
							</p>
						</div>
						{/* <AuthForm goes here /> */}
						<p className="text-muted-foreground px-8 text-center text-sm">
							By clicking continue, you agree to our{" "}
							<Link
								href="/terms"
								className="hover:text-primary underline underline-offset-4"
							>
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link
								href="/privacy"
								className="hover:text-primary underline underline-offset-4"
							>
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
