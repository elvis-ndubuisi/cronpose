"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Facebook, Google } from "@/app/_components/icons";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/app/_components/ui/form";
import { AuthFormValue, authFormSchema } from "@/app/lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

export default function LoginForm() {
	const form = useForm<AuthFormValue>({
		resolver: zodResolver(authFormSchema),
		defaultValues: {},
		mode: "onChange",
	});

	const onSubmit = () => {
		return "";
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='mx-auto w-full max-w-md space-y-4'>
				<div className='flex items-center justify-between gap-4'>
					<Button
						className='flex flex-1 items-center gap-2 font-semibold'
						variant='outline'
						onClick={() => signIn("facebook")}>
						<Facebook /> <span>Facebook</span>
					</Button>
					<Button
						className='flex flex-1 items-center gap-2 font-semibold'
						variant='outline'
						onClick={() => signIn("google")}>
						<Google /> <span>Google</span>
					</Button>
				</div>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Enter email</FormLabel>
							<FormControl>
								<Input
									placeholder='shadcn'
									type='email'
									{...field}
								/>
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
}
