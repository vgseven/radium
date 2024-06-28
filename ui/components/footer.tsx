import { XLogoIcon } from "@/ui/icons/x-logo-icon";
import { Label } from "@/ui/primitives/label";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import icon from "@/public/favicon.png";

export function Footer() {
	return (
		<div className={"my-4 flex flex-col items-center justify-center gap-4"}>
			<Label
				className={
					"bg-gradient-to-tl from-black via-zinc-500 to-zinc-800 bg-clip-text text-[14rem] tracking-tighter text-transparent max-lg:text-[12rem] max-md:text-[10rem] max-sm:text-[5.5rem]"
				}
			>
				Radium
			</Label>
			<div className={"mb-3 flex flex-row items-center justify-center gap-6 text-black dark:text-zinc-400"}>
				<Link href={"https://silver.vgseven.com"} target="_blank">
					<Image height={25} width={25} src={icon} alt={"silver-company"} />
				</Link>
				<Link href={"https://x.com/vgsevenn/"} target="_blank">
					<XLogoIcon
						width={25}
						height={25}
						className={"rounded-full bg-white p-1 text-black hover:bg-black hover:text-white"}
					/>
				</Link>
				<Link href={"https://github.com/vgseven"} target="_blank">
					<GitHubLogoIcon
						width={25}
						height={25}
						className={"rounded-full bg-white p-1 text-black hover:bg-black hover:text-white"}
					/>
				</Link>
				<Link href={"https://linkedin.com/in/vgseven"} target="_blank">
					<LinkedInLogoIcon
						width={25}
						height={25}
						className={"rounded-full bg-white p-1 text-black hover:bg-black hover:text-white"}
					/>
				</Link>
			</div>
			<div className={"flex flex-row gap-2 text-zinc-800/85"}>
				<Label className={"hover:cursor-pointer hover:text-black max-sm:text-[12px]"}>Company</Label>
				<Label className={"hover:cursor-pointer hover:text-black max-sm:text-[12px]"}>Terms and Condition</Label>
				<Label className={"hover:cursor-pointer hover:text-black max-sm:text-[12px]"}>Privacy Policy</Label>
				<Label className={"hover:cursor-pointer hover:text-black max-sm:text-[12px]"}>Contact</Label>
			</div>
			<Label className={"font-geistMono text-zinc-600"}>&copy; 2024 VGSEVEN</Label>
		</div>
	);
}
