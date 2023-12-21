import { get as getEmoji } from "node-emoji";
import {
  Java,
  Javascript,
  MongoDB,
  Mui,
  MySQL,
  NextJS,
  PostgreeSQL,
  Python,
  ReactJS,
  Redux,
  TailwindCSS,
  Typescript,
  NodeJS,
  Kafka,
  Docker,
  Kubernetes,
  WebSocket,
  Golang,
  ExpressJS,
  Fastify,
  AWS,
  Redis,
  Cpp,
  Unity,
} from "../../components/ui/react-icons";

export type TEducation = {
  title: string;
  description: string[];
  start: string;
  end?: string;
  href: string;
  major?: {
    name: string;
    href: string;
  };
};

type TEducationBio = Record<string, TEducation>;

type TExperienceBio = {
  current?: Omit<TJob, "end" | "endMonth" | "endYear">;
  past: TJob[];
};

type TJob = {
  company: string;
  position: string;
  description: string[];
  start: string;
  end: string;
  startMonth: number;
  endMonth: number;
  startYear: number;
  endYear: number;
  href?: string;
  techStack?: string[];
};

type TValue = string | number | string[];

type TContext = {
  [key: string]: TValue;
  position: string[];
};

export const context: TContext = {
  proceed: "To proceed, please click the 'Get Started' button.",
  position: [
    "Software Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "Full-stack Engineer",
  ],
  introduction: "I'm Mark Lee " + getEmoji("grin"),
  description:
    "Expertise on software development, frontend with React and backend with Java SpringBoot / Node in TypeScript. Interest in Infrastructuring development and DevOps operations.",
  copyright: "Copyright ©2023 Mark Lee.",
  websiteWithHeart: "This website is made with " + getEmoji("heart"),
  aboutTitle: "Who is Mark?",
  aboutIntroduction:
    "Mark is a self-taught and highly motivated software engineer with enthusiasm and passion for software development.",
  aboutGoal:
    "To leverage my skills and expertise as a frontend, backend, or full-stack developer.",
  aboutDescription:
    "With extensive experience in programming using ReactJS and NodeJS, I specialize in JavaScript and TypeScript. Additionally, I have a solid understanding of both SQL and NoSQL databases, allowing me to efficiently handle data management tasks. Furthermore, I possess a keen interest and proficiency in infra engineering, enabling me to tackle complex infrastructure challenges. I'm excited to embark on new projects and contribute to the dynamic world of software development. Feel free to explore my website and get in touch if you'd like to collaborate or learn more about my work!",
};

export const educationBio: TEducationBio = {
  university: {
    title: "Bachelor of Engineering | The University of Hong Kong (HKU)",
    description: [
      "I am currently pursuing a Bachelor's degree of Industrial Engineering & Logistics, which focus on optimizing complex systems, improving efficiency, designing 3D models and streamlining processes.",
      "At the same time, I am also a self-learnt software engineer. I have started learning programming from 2021, starting from frontend technology using ReactJS, TypeScript to backend technology using NodeJS, Flask and SpringBoot.",
    ],
    major: {
      name: "Industrial Engineering & Logistics Management (IELM)",
      href: "https://www.imse.hku.hk/",
    },
    start: "2018",
    href: "https://engg.hku.hk/",
  },
  secondary: {
    title: "Tin Ka Ping Secondary School | Hong Kong",
    description: [
      "I have completed the Diploma of Secondary Education in Hong Kong. I have got a total score of 26 out of 35 in my Best 6 subjects, which is quite decent result in Hong Kong.",
      "More importantly, throughout the school life, I have built up tremendous interest in Mathematics and logics related topics, hence Engineering was chosen as my University study.",
    ],
    start: "2012",
    end: "2018",
    href: "http://www.tkpss.edu.hk/v2/index.php",
  },
  primary: {
    title: "Tsang Mui Millennium School",
    description: [
      "This is my primary school, where I have spent most of my time on studying for good results to get into secondary school with higher grade.",
      "To be honest, I have no idea why I have spent that much time only by memorizing all the keywords in every notes and books.",
    ],
    start: "2006",
    end: "2012",
    href: "https://www.tmms.edu.hk/",
  },
};

export const experienceBio: TExperienceBio = {
  past: [
    {
      company: "Cathay Pacific Hackathon | Hong Kong",
      position: "Hackathon Finialist 300",
      description: [
        "This is my primary school, where I have spent most of my time on studying for good results to get into secondary school with higher grade.",
        "To be honest, I have no idea why I have spent that much time only by memorizing all the keywords in every notes and books.",
      ],
      start: "18 Nov 2023",
      end: "19 Nov 2023",
      startMonth: 11,
      endMonth: 11,
      startYear: 2023,
      endYear: 2023,
      href: "https://hackathon.cathaypacific.com/",
      techStack: [
        "JavaScript",
        "ReactJS",
        "AWS",
        "MySQL",
        "Python",
        "Flask",
        "Docker",
      ],
    },
    {
      company: "JuicySuite | Hong Kong",
      position: "Developer Intern",
      description: [
        "This is my primary school, where I have spent most of my time on studying for good results to get into secondary school with higher grade.",
        "To be honest, I have no idea why I have spent that much time only by memorizing all the keywords in every notes and books.",
      ],
      start: "Jul 2023",
      end: "Oct 2023",
      startMonth: 7,
      endMonth: 10,
      startYear: 2023,
      endYear: 2023,
      href: "https://www.juicysuite.com/",
      techStack: [
        "JavaScript",
        "MySQL",
        "NodeJS",
        "PostgreeSQL",
        "Docker",
        "Redis",
      ],
    },
    {
      company: "iMBrace Limited | Hong Kong",
      position: "Full-Stack Software Engineer",
      description: [
        "This is my primary school, where I have spent most of my time on studying for good results to get into secondary school with higher grade.",
        "To be honest, I have no idea why I have spent that much time only by memorizing all the keywords in every notes and books.",
      ],
      start: "Jul 2022",
      end: "Sept 2023",
      startMonth: 7,
      endMonth: 9,
      startYear: 2022,
      endYear: 2023,
      href: "https://www.imbrace.co/",
      techStack: [
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "Redux",
        "MongoDB",
        "Mui",
        "MySQL",
        "NextJS",
        "NodeJS",
        "PostgreeSQL",
        "Docker",
        "Apache Kafka",
        "Redis",
        "AWS",
      ],
    },
    {
      company: "Koding Kingdom | Hong Kong",
      position: "Coding Instructor",
      description: [
        "This is my primary school, where I have spent most of my time on studying for good results to get into secondary school with higher grade.",
        "To be honest, I have no idea why I have spent that much time only by memorizing all the keywords in every notes and books.",
      ],
      start: "May 2022",
      end: "Aug 2022",
      startMonth: 5,
      endMonth: 8,
      startYear: 2022,
      endYear: 2022,
      href: "https://kodingkingdom.com/",
      techStack: ["JavaScript", "Python", "Java"],
    },
    {
      company: "The University of Hong Kong | Hong Kong",
      position: "Engineering Trainee",
      description: [
        "This is my primary school, where I have spent most of my time on studying for good results to get into secondary school with higher grade.",
        "To be honest, I have no idea why I have spent that much time only by memorizing all the keywords in every notes and books.",
      ],
      start: "May 2021",
      end: "Aug 2021",
      startMonth: 7,
      endMonth: 10,
      startYear: 2023,
      endYear: 2023,
      href: "https://www.imse.hku.hk/",
      techStack: ["C++", "SolidWorks", "Unity"],
    },
  ],
};

export const skills: Record<
  string,
  string | Record<string, string | JSX.Element>[]
>[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "ReactJS",
        image: <ReactJS />,
      },
      {
        name: "Redux",
        image: <Redux />,
      },
      {
        name: "NextJS",
        image: <NextJS />,
      },
      {
        name: "JavaScript",
        image: <Javascript />,
      },
      {
        name: "TypeScript",
        image: <Typescript />,
      },
      {
        name: "Material UI",
        image: <Mui />,
      },
      {
        name: "Tailwind CSS",
        image: <TailwindCSS />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "NodeJS",
        image: <NodeJS />,
      },
      {
        name: "Golang",
        image: <Golang />,
      },
      {
        name: "WebSocket",
        image: <WebSocket />,
      },
      {
        name: "Java Sprint Boot",
        image: <Java />,
      },
      {
        name: "Python",
        image: <Python />,
      },
      {
        name: "MySQL",
        image: <MySQL />,
      },
      {
        name: "Postgresql",
        image: <PostgreeSQL />,
      },
      {
        name: "MongoDB",
        image: <MongoDB />,
      },
      {
        name: "Apache Kafka",
        image: <Kafka />,
      },
      {
        name: "ExpressJS",
        image: <ExpressJS />,
      },
      {
        name: "Fastify",
        image: <Fastify />,
      },
      {
        name: "Redis",
        image: <Redis />,
      },
      {
        name: "C++",
        image: <Cpp />,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Docker",
        image: <Docker />,
      },
      {
        name: "Kubernetes",
        image: <Kubernetes />,
      },
      {
        name: "AWS",
        image: <AWS />,
      },
      {
        name: "Unity",
        image: <Unity />,
      },
      {
        name: "SolidWorks",
        image: (
          <img
            alt="SolidWorks"
            loading="lazy"
            height={10}
            width={10}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAAM1BMVEVHcEzjPD7mPkDmPkDmPkDmP0HmP0HmP0HmP0HmPkHlPkDlPkDjOz3kPT/lPkDmPkDmPkAdDQWWAAAAEXRSTlMAFl2GxNj0/+ixcDIMI0aWpOuWI7UAAAEJSURBVHgBfZIBigQhDASjGiuOruP/X3snys4J5xRAgkFidysPzoeoCSxfTv7D68AAUpET9dMCEOWNC1TeuKHLCw74yJka4XqfE+SM0/f7xUhezgTodezxParGHHzd1mdiG403Frtjfo7lkyDdvpVf3MFJ/C6tXT2qabz9cKjBrrQoX1KoIgq2eVnawAcFuEXaMc+SwNx8RZaN7GcBq7MS9oSLDOJKuuqupNG/DpTZGasdOGMa8ifJApgs+joOoJtdYS0gzfkuP4HW1V3rp6iTB5uSRQKjNoNcxZVSmvdXyAbc6+VZSoZ0zc0PuS5vkgLdTUXNh7vn3GdwUw6QixzogPUiR8x6q3LmBxNICz3Z7y7aAAAAAElFTkSuQmCC"
          />
        ),
      },
    ],
  },
];

export const MY_LINKEDIN_URL = "https://www.linkedin.com/in/marklee425";
export const MY_GITHUB_URL = "https://github.com/MarkLee425";
export const MY_GITLAB_URL = "https://gitlab.com/leehokwong0425";

export default getEmoji;
