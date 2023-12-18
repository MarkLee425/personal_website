import { get as getEmoji } from "node-emoji";

type TValue = string | number | string[];

type TInitiation = {
    [key: string]: TValue;
    position: string[];
}

export const INITIATION: TInitiation = {
    welcome: "Hello World! Welcome to my personal website. " + getEmoji("grin"),
    proceed: "To proceed, please click the 'Get Started' button.",
    position: ["Frontend Engineer", "Backend Engineer", "Full-stack Engineer"],
    introduction: "I'm Mark Lee " + getEmoji("grin"),
    description: "Expertise on software development, frontend with React and backend with Java SpringBoot/Node in TypeScript. Interest in infrastructuring development and devops operations."
}