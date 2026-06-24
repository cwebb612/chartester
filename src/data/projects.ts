import { ReactNode, ComponentType } from 'react';
import Portfolio from '../projectPages/Portfolio/Portfolio';
import MoneyTalk from '../projectPages/MoneyTalk/MoneyTalk';
import Rack from '../projectPages/Rack/Rack';

export type Project = {
  // id determines order it shows up in dev table.
  // id can also be considered the "priority" or "coolness"
  id: number;
  previewImageUrl?: string;
  previewImageSrc?: string;
  title: string;
  shortDescription: string;
  status: string;
  statusColor?: string;
  statusIcon?: ReactNode;
  techStack?: string[];
  pageContent?: ComponentType<any>;
}

export const projectList: Project[] = [
  // Personal portfolio (here)
  {
    id: 1,
    title: "Personal Portfolio",
    shortDescription: "The website you are looking at right now.",
    status: "You're looking at it",
    statusColor: "#05bb38",
    techStack: ["React", "Infrastructure", "GCP"],
    pageContent: Portfolio,
  },
  // The rack
  {
    id: 2,
    title: "Mini Rack",
    shortDescription: "A few computers that enable me to do a lot of cool things on my home network",
    status: "Ever Evolving",
    statusColor: "#0e3bcf",
    techStack: ["Networking", "OS", "Docker"],
    pageContent: Rack,
  },
  // homekit V3
  // hallway lights (deprecated)
  // money talk app
  {
    id: 4,
    title: "Money Talk",
    shortDescription: "A self-hosted application to track your money. Up to you to talk about it",
    status: "v1.5.1",
    statusColor: "#c99b04",
    techStack: ["NextJS", "Typescript", "MongoDB"],
    pageContent: MoneyTalk,
  }
  // bench club
  // Brawl Stars AI
  // March Madness Brute Force Tuning (in progress)
  // Cellular automate (coming)
  // Minecraft Forever World
]
