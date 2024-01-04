import {
  About,
  Certificate,
  Code,
  Contact,
  Home,
  Work,
} from "../ui/react-icons";

type LinkRoute = Record<"description" | "route" | "icon", string | JSX.Element>;

export const linkRoutes: LinkRoute[] = [
  {
    description: "Home",
    route: "/",
    icon: <Home size={20} />,
  },
  {
    description: "About",
    route: "/about",
    icon: <About size={20} />,
  },
  {
    description: "Experience",
    route: "/experience",
    icon: <Work size={20} />,
  },
  {
    description: "Education",
    route: "/education",
    icon: <Certificate size={20} />,
  },
  {
    description: "Skills",
    route: "/skills",
    icon: <Code size={20} />,
  },
  {
    description: "Contact",
    route: "/contact",
    icon: <Contact size={20} />,
  },
];
