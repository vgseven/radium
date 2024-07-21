import { copyFiles } from "@/functions/prepare-project";
import * as terminal from "@clack/prompts";
import * as fs from "node:fs";
import * as path from "node:path";
import { packageInstall } from "@/functions/prepare-project";
import { gitInit } from "@/functions/prepare-project";
import { updatePackageJson } from "@/functions/prepare-project";
import { addBiome, addShadcnUI, addTheme } from "@/functions/setting-project";

export async function New(projName: string) {
  const s = terminal.spinner();

  const newOptions = await terminal.group(
    {
      noteTS: () => {
        terminal.note(
          "We use TypeScript by default..",
          "For Better Type Safety"
        );
      },
      noteNX: () =>
        terminal.note(
          "Next.js is the only supported framework, Soon React and others.",
          "Currently"
        ),
      noteBase: () =>
        terminal.note(
          "Base Next.js Template consist TailwindCSS and Geist Font..",
          "Base Template Initialized"
        ),
      addBiome: () =>
        terminal.confirm({
          message: "Do You want to add biome?",
          initialValue: true,
        }),
      addShadcnUI: () =>
        terminal.confirm({
          message: "Do You want to add shadcn-ui?",
          initialValue: true,
        }),
      addTheme: () =>
        terminal.confirm({
          message: "Do You want to add theme?",
          initialValue: true,
        }),
      choosePackageManager: () =>
        terminal.select({
          message: "Select Package Manager",
          initialValue: "bun",
          options: [
            {
              value: "pnpm",
              label: "pnpm",
            },
            {
              value: "yarn",
              label: "yarn",
            },
            {
              value: "npm",
              label: "npm",
            },
            {
              value: "bun",
              label: "bun",
            },
          ],
        }),
      install: () =>
        terminal.confirm({
          message: "Install dependencies?",
          initialValue: false,
        }),
      git: () =>
        terminal.confirm({
          message: "Initialize Git?",
          initialValue: false,
        }),
    },
    {
      onCancel: () => {
        terminal.cancel("Operation cancelled.");
        process.exit(0);
      },
    }
  );

  try {
    s.start("Initializing Project");
    await copyFiles(projName);

    const packageJSONPath = path.join(projName, "package.json");
    if (fs.existsSync(packageJSONPath)) {
      await updatePackageJson(projName, projName);
    }
    s.stop("Project initialized successfully!");

    if (newOptions.addBiome) {
      s.message("Adding biome...");
      await addBiome(projName);
      s.stop("Biome added successfully!");
    }

    if (newOptions.addShadcnUI) {
      s.start("Adding shadcn-ui...");
      await addShadcnUI(projName);
      s.stop("shadcn-ui added successfully!");
    }

    if (newOptions.addTheme) {
      s.start("Adding theme...");
      await addTheme(projName);
      s.stop("theme added successfully!");
    }

    const projectPath = path.join(process.cwd(), projName);
    if (newOptions.install) {
      s.start("Installing Dependencies");
      await packageInstall(projectPath, newOptions.choosePackageManager);
      s.stop("Dependencies installed successfully!");
    }

    if (newOptions.git) {
      s.start("Initializing Git");
      await gitInit(projectPath);
      s.stop("Git initialized successfully!");
    }

    let message = "";
    if (!newOptions.install) {
      message = `cd ${projName} \n${newOptions.choosePackageManager} i \n${newOptions.choosePackageManager} run dev`;
    } else {
      message = `cd ${projName} \n${newOptions.choosePackageManager} run dev`;
    }

    terminal.note(message, "Happy Coding!");
    process.exit(0);
  } catch (error) {
    terminal.note(`Error: ${error}`, "Project Initialization Failed");
    process.exit(1);
  }
}
