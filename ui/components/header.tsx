"use client";

import { cn } from "@/lib/utils";
import { Label } from "@/ui/primitives/label";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/ui/primitives/navigation-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/ui/primitives/dropdown-menu";

export function Header() {
	const path = usePathname();
	return (
		<NavigationMenu className={"max-w-7x fixed inset-0 top-4 z-50 mx-auto h-14 w-[95%]"}>
			<NavigationMenuList className={"flex gap-2 bg-zinc-900 bg-opacity-10 px-4 py-2 backdrop-blur-sm"}>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={cn(path === "/" ? "bg-secondary text-secondary-foreground" : "", navigationMenuTriggerStyle())}
						>
							Radium
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/products" legacyBehavior passHref>
						<NavigationMenuLink
							className={cn(
								path === "/products" ? "bg-secondary text-secondary-foreground" : "",
								navigationMenuTriggerStyle()
							)}
						>
							Products
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/features" legacyBehavior passHref>
						<NavigationMenuLink
							className={cn(
								path === "/docs" ? "bg-secondary text-secondary-foreground" : "",
								navigationMenuTriggerStyle()
							)}
						>
							Docs
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className={"hidden md:block"}>
					<Link href="/features" legacyBehavior passHref>
						<NavigationMenuLink
							className={cn(
								path === "/blog" ? "bg-secondary text-secondary-foreground" : "",
								navigationMenuTriggerStyle()
							)}
						>
							Blog
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className={"hidden md:block"}>
					<Link href="/features" legacyBehavior passHref>
						<NavigationMenuLink
							className={cn(
								path === "/about" ? "bg-secondary text-secondary-foreground" : "",
								navigationMenuTriggerStyle()
							)}
						>
							About
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className={"block md:hidden"}>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<HamburgerMenuIcon
								height={35}
								width={35}
								className={"cursor-pointer rounded-md p-2 hover:bg-black hover:text-white"}
							/>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className={
								"mt-2 flex w-32 flex-col items-center justify-center p-4 bg-zinc-900 bg-opacity-10 backdrop-blur-sm border-none"
							}
						>
							<DropdownMenuItem className={"focus:bg-black focus:text-white"}>Blog</DropdownMenuItem>
							<DropdownMenuItem className={"focus:bg-black focus:text-white"}>About</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
