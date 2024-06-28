"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { setTheme } = useTheme();
	return (
		<div className={"my-4 flex gap-4"}>
			<MoonIcon onClick={() => setTheme("dark")} width={16} height={16} className={"cursor-pointer"} />

			<SunIcon onClick={() => setTheme("light")} width={16} height={16} className={"cursor-pointer"} />
		</div>
	);
}
