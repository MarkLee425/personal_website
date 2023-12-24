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
  Frontend,
  Backend,
  Database,
} from "../../components/ui/react-icons";

export type TEducation = {
  title: string;
  description: string[];
  issued_at?: string;
  start?: string;
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
  // TODO: certificate.length >= 5, start a new page for certificates
  certificate: {
    title: "Microsoft Azure AI Fundamentals Certificate",
    description: [
      "Through this certificate, I have learnt and acquired fundamental AI knowledge, including the ability to manage classification, regression and clustering. At the same time, I have built up a clearer overview on AI's aspect, and have a solid foundation in AI concepts and their practical implementation within the Microsoft Azure ecosystem.",
      "By delving into topics like Machine Learning, Computer Vision, Natural Language Processing (NLP), and other ethical considerations, I have gained a comprehensive understanding of AI's potential and its ethical implications.",
    ],
    issued_at: "June 29 2022",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-900/",
  },
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
      "I have completed the Diploma of Secondary Education in Hong Kong. I have got a total score of 26 / 35 in my Best 6 subjects, which is quite a decent result in Hong Kong.",
      "More importantly, throughout the school life, I have built up tremendous interest in Mathematics and logics related topics, hence Engineering was chosen as my University study.",
    ],
    start: "2012",
    end: "2018",
    href: "http://www.tkpss.edu.hk/v2/index.php",
  },
  primary: {
    title: "Tsang Mui Millennium School | Hong Kong",
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
        "The hackathon takes 24 hours. We are honored to pass the first-round selection from over 1000 applicants. In this hackathon, we are required to provide solutions to one of the many problems given by Cathay Pacific. We have chosen to solve the Cathay Pacific Cargo problems on efficiency and performance.",
        "My teammates and I have decided a feasible solution for tackling the above-mentioned problem, and I mainly focus on the demonstration of our idea in the software manner. In this 24 hours, I have worked on AI analysis, backend API & Database connection and handling, and frontend dashboard, which eventually demonstrated in the final presentation. Tech Stacks used include Python, Flask, ReactJS, TailwindCSS, NumPy etc.",
        "Unfortunately we are unable to step out and continue our journey. However, I have improved my leadering skills, communication skills and presentation skills throughout this internship, and also consolidate and utilize my technical strength (software development) in a pratical approach.",
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
        "I have been focusing on Backend Development using ExpressJS, NodeJS and Redis with Docker in this internship period. I have cooperated with my colleagues to integrate a brand new tailor-made workflow engine using NodeJS, Redis and BullMQ (a Redis Queuing Tool).",
        "Also, I have also worked with different databases and work on the ETL process using dbt as transformer. Besides, I have automated the static files deployment using S3 to increase the efficiency of the whole product.",
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
        "Throughout this full time placement experience, I had been participating in both team projects & individual projects. I have integrated with different external CRM APIs including Odoo API, ZoHo API, Shopify API, Salesforce API etc. I have also participated on projects using OpenAI to integrate with some AI functionalities.",
        "I have also work on a full-stack project using NextJS as an individual service by myself, which mainly participates as a business form and trigger the workflow engine with data once forms are submitted. Utilizing TypeScript, Fastify, WebSocket and Apache Kafka helps me contribute to different projects a lot.",
        "Last but not least, I have helped dockerizing the workflow engine in order to enhance the performance of building code and deployment using Docker & Docker Compose. I have also participated in deployment to S3 and EC2 instances, which highly enhance my knowledge of AWS services.",
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
        "In this internship, I had participated in teaching lessons for K12 students about coding using JavaScript, Python and Java. It is really fun to learn with them, and consolidate the programming skills and the overview of software development cycle.",
        "I have also participated in researches & analysis on the Metaverse projects, and Web 3.0 projects. I have also participated on notes for Metaverse classes, Web 3.0 classes with cryptocurrency classes. It is also worth to mention that I have also finished the Microsoft AI fundamental certificate.",
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
        "Throughout this training, I have consolidated the knowledge of industrial technologies, utilizing with C++ & CNC programming technics. Also, I have learnt more about game development industry using Unity. I have also participated in different projects which utilize SolidWorks as a digital CAD tools to contruct 3D models.",
        "I have also contributed to a team project and an individual project, which includes building a real smart robot from-scratch which can automatically relocate the routes that we have preseted to the robot. This is a precious practice to consolidate my knowledge of industrial engineering and programming. ",
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
  string | JSX.Element | Record<string, string | JSX.Element>[]
>[] = [
  {
    title: "Frontend",
    icon: <Frontend />,
    skills: [
      {
        name: "ReactJS",
        image: <ReactJS size={25} />,
      },
      {
        name: "Redux",
        image: <Redux size={25} />,
      },
      {
        name: "NextJS",
        image: <NextJS size={25} />,
      },
      {
        name: "JavaScript",
        image: <Javascript size={25} />,
      },
      {
        name: "TypeScript",
        image: <Typescript size={25} />,
      },
      {
        name: "Material UI",
        image: <Mui size={25} />,
      },
      {
        name: "Tailwind CSS",
        image: <TailwindCSS size={25} />,
      },
    ],
  },
  {
    title: "Backend",
    icon: <Backend />,
    skills: [
      {
        name: "NodeJS",
        image: <NodeJS size={25} />,
      },
      {
        name: "ExpressJS",
        image: <ExpressJS size={25} />,
      },
      {
        name: "Fastify",
        image: <Fastify size={25} />,
      },
      {
        name: "Golang",
        image: <Golang size={25} />,
      },
      {
        name: "SprintBoot",
        image: <Java size={25} />,
      },
      {
        name: "Python",
        image: <Python size={25} />,
      },
      {
        name: "C++",
        image: <Cpp size={25} />,
      },
      {
        name: "WebSocket",
        image: <WebSocket size={25} />,
      },
      {
        name: "Apache Kafka",
        image: <Kafka size={25} />,
      },
    ],
  },
  {
    title: "Data Related",
    icon: <Database />,
    skills: [
      {
        name: "MySQL",
        image: <MySQL size={25} />,
      },
      {
        name: "Postgresql",
        image: <PostgreeSQL size={25} />,
      },
      {
        name: "MongoDB",
        image: <MongoDB size={25} />,
      },
      {
        name: "Redis",
        image: <Redis size={25} />,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Docker",
        image: <Docker size={25} />,
      },
      {
        name: "Kubernetes",
        image: <Kubernetes size={25} />,
      },
      {
        name: "AWS",
        image: <AWS size={25} />,
      },
      {
        name: "Unity",
        image: <Unity size={25} />,
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

export const QUOTES = {
  education:
    '"Education is one thing no one can take away from you.” —- Elin Nordegren',
  experience:
    '"You cannot create experience. You must undergo it." -- Albert Camus',
  about: '"I restore myself when I am alone." -- Marilyn Monroe',
  skills: '"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program." -- Linus Torvalds'
};

export const MY_LINKEDIN_URL = "https://www.linkedin.com/in/marklee425";
export const MY_GITHUB_URL = "https://github.com/MarkLee425";
export const MY_GITLAB_URL = "https://gitlab.com/leehokwong0425";

export default getEmoji;
