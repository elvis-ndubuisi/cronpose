"use client";

import * as React from "react";
import { MoonIcon, SunIcon, LaptopIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Tabs, TabsTrigger, TabsList } from "./ui/tabs";

export function ThemeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export function ThemeToggleInline() {
	const { setTheme } = useTheme();

	return (
		<Tabs>
			<TabsList className="grid grid-cols-3">
				<TabsTrigger onClick={() => setTheme("dark")} value="dark">
					<MoonIcon className="h-4 w-4" />
				</TabsTrigger>
				<TabsTrigger onClick={() => setTheme("light")} value="light">
					<SunIcon className="h-4 w-4" />
				</TabsTrigger>
				<TabsTrigger onClick={() => setTheme("system")} value="system">
					<LaptopIcon className="h-4 w-4" />
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}
