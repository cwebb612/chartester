import { ReactNode, ComponentType } from 'react';
import Portfolio from '../projectPages/Portfolio/Portfolio';
import MoneyTalk from '../projectPages/MoneyTalk/MoneyTalk';
import Rack from '../projectPages/Rack/Rack';
import Homekit from '../projectPages/Homekit/Homekit'

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
  {
    id: 1,
    title: "Personal Portfolio",
    shortDescription: "This website",
    status: "You're looking at it",
    statusColor: "#05bb38",
    techStack: ["React", "Typescript", "Firebase"],
    pageContent: Portfolio,
  },
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
  {
    id: 3,
    title: "Homekit",
    shortDescription: "A tablet to handle all things to do with my home life",
    status: "v2",
    statusColor: "#0f8b32",
    techStack: ["Kotlin", "Android"],
    pageContent: Homekit,
  },
  // hallway lights (deprecated)
  {
    id: 4,
    title: "Money Talk",
    shortDescription: "A self-hosted application to track your money. Up to you to talk about it",
    status: "v1.6.0",
    statusColor: "#c99b04",
    techStack: ["NextJS", "Typescript", "MongoDB"],
    pageContent: MoneyTalk,
  }
  // bench club
  // Brawl Stars AI
  // March Madness Brute Force Tuning (in progress)
  // Cellular automata (coming)
  // Minecraft Forever World
]
