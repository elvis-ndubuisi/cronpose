import Link from "next/link";
import { getServerAuthSession } from "@/server/auth";

export async function Navigation(): JSX.Element {
	const session = await getServerAuthSession();
	return (
		<nav className="sticky border-gray-200 bg-white dark:bg-black">
			<div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4 lg:px-[18px]">
				<Link href="/" className="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="mr-3 h-8"
						alt="Flowbite Logo"
					/>
					<span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
						FizzLetter
					</span>
				</Link>
				<div className="flex items-center md:order-2">
					<button
						type="button"
						className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
						id="user-menu-button"
						aria-expanded="false"
						data-dropdown-toggle="user-dropdown"
						data-dropdown-placement="bottom"
					>
						<span className="sr-only">Open user menu</span>
						<img
							className="h-8 w-8 rounded-full"
							src="/docs/images/people/profile-picture-3.jpg"
							alt="user photo"
						/>
					</button>
					<div
						className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
						id="user-dropdown"
					>
						<div className="px-4 py-3">
							<span className="block text-sm text-gray-900 dark:text-white">
								Bonnie Green
							</span>
							<span className="block truncate  text-sm text-gray-500 dark:text-gray-400">
								name@flowbite.com
							</span>
						</div>
						<ul className="py-2" aria-labelledby="user-menu-button">
							<li>
								<Link
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Dashboard
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Settings
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Earnings
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Sign out
								</Link>
							</li>
						</ul>
					</div>
					<button
						data-collapse-toggle="navbar-user"
						type="button"
						className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
						aria-controls="navbar-user"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="h-5 w-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>

				<div
					className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
					id="navbar-user"
				>
					<ul className="mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
						<li>
							<Link
								href="#"
								className="block rounded bg-rose-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
								aria-current="page"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
							>
								Pricing
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
