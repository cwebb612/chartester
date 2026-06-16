import { ReactNode } from 'react';

type Project = {
  // id determines order it shows up in dev table.
  // id can also be considered the "priority" or "coolness"
  id: number;
  previewImageUrl?: string;
  title: string;
  shortDescription: string;
  status: string;
  statusColor?: string
  statusIcon?: ReactNode;
  techStack?: string[];
  route: string;
}

export const projectList: Project[] = [
  // Personal portfolio (here)
  {
    id: 0,
    title: "Personal Portfolio",
    shortDescription: "The website you are looking at right now.",
    status: "You're looking at it",
    statusColor: "#0e421d",
    techStack: ["React", "Web Infrastructure", "GCP"],
    route: "/portfolio"
  },
  // The rack
  {
    id: 1,
    title: "Mini Rack",
    shortDescription: "A few computers that enable me to do a lot of cool things on my home network",
    status: "Ever Evolving",
    techStack: ["Networking", "OS", "Docker"],
    route: "/rack",
  },
  // homekit V3
  // hallway lights (deprecated)
  // money talk app
  {
    id: 4,
    title: "Money Talk",
    shortDescription: "A self-hosted application to track your money. Up to you to talk about it",
    status: "v1.5.1",
    techStack: ["NextJS", "Typescript", "MongoDB"],
    route: "/money-talk",
  }
  // bench club
  // Brawl Stars AI
  // March Madness Brute Force Tuning (in progress)
  // Cellular automate (coming)
  // Minecraft Forever World
]
