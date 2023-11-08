// "use client";

// import React from "react";
// import { Button } from "./ui/button";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { api } from "@/trpc/react";

// export function UserLoginForm() {
// 	const [isLoading, setIsLoading] = React.useState<boolean>(false);

// 	const subscribe = api.email.subscribe.useMutation();
// 	async function onSubmit(e) {
// 		e.preventDefault();
// 		const res = await subscribe.mutateAsync({ email: "email@email.com" });
// 		console.log(res);
// 	}
// 	return (
// 		<section className='grid gap-6'>
// 			<form onSubmit={onSubmit}>
// 				<div className='grid gap-2'>
// 					<div className='grid gap-1'>
// 						<Label
// 							className='sr-only'
// 							htmlFor='email'>
// 							Email
// 						</Label>
// 						<Input
// 							id='email'
// 							placeholder='name@example.com'
// 							type='email'
// 							autoCapitalize='none'
// 							autoComplete='email'
// 							autoCorrect='off'
// 							disabled={isLoading}
// 						/>
// 					</div>
// 					<Button disabled={isLoading}>
// 						{/* {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />} */}
// 						Sign In with Email
// 					</Button>
// 				</div>
// 			</form>
// 			<div className='relative'>
// 				<div className='absolute inset-0 flex items-center'>
// 					<span className='w-full border-t' />
// 				</div>
// 				<div className='relative flex justify-center text-xs uppercase'>
// 					<span className='bg-background px-2 text-muted-foreground'>
// 						Or continue with
// 					</span>
// 				</div>
// 			</div>
// 			<Button
// 				variant='outline'
// 				type='button'
// 				disabled={isLoading}>
// 				{isLoading ? (
// 					// <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
// 					<span>loading</span>
// 				) : (
// 					// <Icons.gitHub className='mr-2 h-4 w-4' />
// 					<span>loadingnoot</span>
// 				)}{" "}
// 				Github
// 			</Button>
// 		</section>
// 	);
// }
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
	useFormField,
} from "@/app/_components/ui/form";
import { loginSchema } from "@/app/lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
	const form = useForm();
	const onSubmit = () => {
		return "";
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-4'>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Enter username</FormLabel>
							<FormControl>
								<Input
									placeholder='shadcn'
									type='text'
									{...field}
								/>
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Enter username</FormLabel>
							<FormControl>
								<Input
									placeholder='shadcn'
									type='text'
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
			<Button
				className='flex items-center gap-2 font-semibold'
				variant='outline'>
				<Facebook /> <span>Facebook</span>
			</Button>
			<Button
				className='flex items-center gap-2 font-semibold'
				variant='outline'>
				<Google /> <span>Google</span>
			</Button>
			{/* <FormField
				control={form.control}
				name='username'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Username</FormLabel>
						<FormControl>
							<Input
								placeholder='username'
								{...field}
							/>
						</FormControl>
					</FormItem>
				)}
			/> */}
		</Form>
	);
}
