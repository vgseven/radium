import { ThemeToggle } from "@/ui/components/theme-toggle";
import { Title } from "@/ui/components/title";
import { Button } from "@/ui/primitives/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

function Home() {
  return (
    <>
      <Title title={"Radium React.js Template"} />
      <div
        className={
          "relative flex h-screen flex-col items-center justify-center"
        }
      >
        <h1 className={"text-5xl"}>Radium React.js Template</h1>
        <a
          href={"https://github.com/vgseven/radium"}
          target={"_blank"}
          rel="noreferrer"
        >
          <Button className={"mt-6 rounded-full"}>
            <GitHubLogoIcon className={"mx-2"} /> Star on GitHub
          </Button>
        </a>
        <ThemeToggle />
      </div>
    </>
  );
}
