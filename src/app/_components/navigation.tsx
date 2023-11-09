import { NavMenu } from "./nav-menu";
import { UserNav } from "./user-nav";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "../lib/utils";
import { getServerAuthSession } from "@/server/auth";
import { ThemeToggle } from "./theme-toggle";

export async function Navigation(): Promise<JSX.Element> {
	const session = await getServerAuthSession();
	return (
		<header className='sticky top-0 border-b border-gray-200 bg-white/10 backdrop-blur-md dark:border-gray-800 dark:bg-black/10'>
			<div className='mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3'>
				<div className='flex items-baseline space-x-6'>
					<h1 className='text-2xl font-semibold tracking-normal'>
						Mail<span className='font-bold text-primary'>Repo</span>
					</h1>
					<NavMenu />
				</div>
				<section className='flex items-center gap-4'>
					{session?.user ? (
						<UserNav />
					) : (
						<>
							<Link
								className={cn(buttonVariants({ variant: "ghost" }))}
								href='/account'>
								Login
							</Link>
							{/* <Link
								href='/account'
								className={cn(
									buttonVariants({ variant: "outline" }),
									"bg-black text-white dark:bg-white dark:text-black",
								)}>
								Start for free
							</Link> */}
						</>
					)}
					<ThemeToggle />
					<UserNav />
				</section>
			</div>
		</header>
	);
}

// export async function Navigation(): Promise<JSX.Element> {
// 	const session = await getServerAuthSession();

// 	return (
// 		<nav className='sticky border-b border-gray-600 bg-gray-800 text-white backdrop-blur-md'>
// 			<section className='relative mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 py-3'>
// 				<div className='flex items-center gap-6'>
// 					<Link
// 						href='/'
// 						className='flex items-center gap-2 text-xl font-semibold'>
// 						Fizzletter
// 					</Link>
// 				</div>
// 				<ul className='flex items-center gap-4 text-gray-300'>
// 					{navigation.map((link) => (
// 						<li
// 							key={link.name}
// 							className='group font-medium'>
// 							<Link
// 								href={link.href}
// 								className='group-hover:text-blue-400'>
// 								{link.name}
// 							</Link>
// 						</li>
// 					))}
// 				</ul>
// 				<div className='flex items-center gap-4'>
// 					<button
// 						type='button'
// 						className='rounded-lg bg-blue-700 px-5 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'>
// 						Get Started
// 					</button>
// 					{/* Profile */}
// 					<button
// 						type='button'
// 						className='mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0'>
// 						<span className='sr-only'>Open user menu</span>
// 						<Image
// 							src=''
// 							alt='user profile'
// 							width={30}
// 							height={30}
// 							className='aspect-square h-8 w-8 rounded-full bg-white'
// 						/>
// 					</button>
// 					{/* User dropdown menu */}
// 					<div
// 						className='absolute right-3 top-10 z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700'
// 						id='user-dropdown'>
// 						<div className='px-4 py-3'>
// 							<span className='block text-sm text-gray-900 dark:text-white'>
// 								Bonnie Green
// 							</span>
// 							<span className='block truncate  text-sm text-gray-500 dark:text-gray-400'>
// 								name@flowbite.com
// 							</span>
// 						</div>
// 						<ul
// 							className='py-2'
// 							aria-labelledby='user-menu-button'>
// 							<li>
// 								<a
// 									href='#'
// 									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'>
// 									Dashboard
// 								</a>
// 							</li>
// 							<li>
// 								<a
// 									href='#'
// 									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'>
// 									Settings
// 								</a>
// 							</li>
// 							<li>
// 								<a
// 									href='#'
// 									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'>
// 									Earnings
// 								</a>
// 							</li>
// 							<li>
// 								<a
// 									href='#'
// 									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'>
// 									Sign out
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</section>
// 		</nav>
// 	);
// }
