import { Button } from "@/ui/primitives/button";
import { Label } from "@/ui/primitives/label";
import { UnderlineHover } from "@/ui/primitives/underline-hover";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
	return (
		<main className={"relative flex h-screen flex-col items-center justify-center"}>
			<Label
				className={
					"mb-6 bg-gradient-to-tl from-black via-zinc-500 to-zinc-800 bg-clip-text text-7xl tracking-tighter text-transparent max-sm:text-6xl font-semibold text-center max-lg:mx-4"
				}
			>
				Empowering Developers
			</Label>
			<Label className={"text-sm max-sm:text-[12px] my-1 text-muted-foreground text-center max-w-[48rem] max-lg:mx-4"}>
				Radium, <UnderlineHover variant={"secondary"}>Empowering Developers</UnderlineHover> To Rapidly Ship Projects.
				Our mission is to streamline the development process by enabling developers to{" "}
				<UnderlineHover variant={"secondary"}>focus on innovation and functionality</UnderlineHover>, rather than
				dealing with issues, resources, and configurations.
			</Label>
			<div className={"my-4 flex flex-row gap-4"}>
				<Link href="/docs">
					<Button variant={"outline"}>Get Started</Button>
				</Link>
				<Link href="https://github.com/silver-radium/">
					<Button variant={"secondary"}>
						<GitHubLogoIcon className={"mr-2"} /> Star on GitHub
					</Button>
				</Link>
			</div>
		</main>
	);
}
