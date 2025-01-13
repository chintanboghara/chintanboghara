import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Chintan Boghara",
  initials: "CB",
  url: "https://chintanboghara.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "DevOps & Cloud Engineer",
  summary:
    "DevOps & Cloud Engineer with hands-on experience in DevOps practices, cloud technologies, and infrastructure automation. Technical proficiency in AWS, Azure, containerization (Docker, Kubernetes), CI/CD tools (Jenkins, GitLab CI, GitHub Actions), Terraform, Ansible, and Vault. Experienced in automating and managing cloud infrastructure, implementing Infrastructure as Code (IaC), and setting up CI/CD pipelines. Proficient in container orchestration, monitoring (Prometheus, Grafana), and secret management. Passionate about streamlining development processes and driving innovation in DevOps and cloud engineering",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Rust",
    "Ubuntu",
    "RHEL",
    "Windows 10/11",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Bash Scripting",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://chintanboghara.hashnode.dev/", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chintansboghara@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/chintanboghara",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/chintanboghara",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_heybeast_",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:chintansboghara@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Enblitz Technologies Pvt. Ltd.",
      href: "https://enblitz.com",
      badges: [],
      location: "Onsite",
      title: "DevOps & Cloud Engineer (Internship)",
      logoUrl: "/atomic.png",
      start: "Jan 2024",
      end: "Dec 2024",
      description:
        "During my DevOps & Cloud internship at Enblitz Technologies, Worked with Linux distributions (RHEL, Ubuntu) and AWS cloud services, Gained hands-on experience in version control (Git/GitHub) and containerization (Docker), Orchestrated containers using Kubernetes and built CI/CD pipelines with Jenkins, Applied configuration management (Ansible) and Infrastructure as Code (IaC) with Terraform, Used Prometheus, Grafana, and SonarQube for monitoring and code quality, These skills were applied in project-based scenarios, enhancing my practical understanding of DevOps practices.",
    },
  ],
  education: [
    {
      school: "SAL Engineering and Technical Institute",
      href: "https://www.seti.sal.edu.in/",
      degree: "Bachelor of Engineering in Information Technology",
      logoUrl: "/buildspace.jpg",
      start: "2021",
      end: "2024",
    },
    {
      school: "Ranchhodlal Chhotalal Technical Institute",
      href: "#",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },

  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
