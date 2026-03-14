import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";


const ProjectSection: React.FC = () => {
  const { theme } = useTheme();
  const [showMore, setShowMore] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(197, 48, 48)" : "rgb(245, 101, 101)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects
      </span>
      <div className="flex flex-wrap">
        {projects.slice(0, showMore ? projects.length : 4).map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-16">
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-2 px-6 py-3 rounded-md bg-marrsgreen dark:bg-carrigreen text-bglight dark:text-bgdark font-medium transition-transform hover:scale-105"
        >
          {showMore ? "Show Less" : "More Projects"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Canvas - Whiteboard Collaboration App",
    type: "Frontend",
    image: (
      <Image
        src="/projects/canvas1.png"
        sizes="100vw"
        fill
        alt="Canvas"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Multi-user collaborative whiteboard focused on real-time interaction.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Websocket"],
    liveUrl: "https://canvas-app-blond.vercel.app/",
    codeUrl: "https://github.com/ayerhssb/canvas-main",
    bgColor: "bg-[#B4BEE0]",
    githubApi: ""
  },
  {
    title: "CodeHelper - Chrome Extension",
    type: "Frontend",
    image: (
      <Image
        src="/projects/codehelper.png"
        sizes="100vw"
        fill
        alt="CodeHelper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Context-aware Chrome extension for Leetcode providing step-wise hints using Gemini LLM.",
    tags: ["JavaScript", "Node.js", "Express", "Gemini LLM"],
    liveUrl: "",
    codeUrl: "https://github.com/ayerhssb/code-helper-extension",
    bgColor: "bg-[#A6CECE]",
    githubApi: ""
  },
  {
    title: "Cold Email And Resume Automation Platform",
    type: "Backend",
    image: (
      <Image
        src="/projects/resumebuilder.png"
        sizes="100vw"
        fill
        alt="Cold Email"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
      // <div className="w-full h-full bg-[#9FD0E3] flex items-center justify-center p-4">
      //   <span className="text-xl font-bold text-gray-800 text-center">Cold Email Automation</span>
      // </div>
    ),
    desc: "Automated email outreach platform using Llama 3.1 on Groq Cloud with LangChain pipelines.",
    tags: ["Llama 3.1", "Groq Cloud", "LangChain", "Gmail API"],
    liveUrl: "",
    codeUrl: "https://github.com/ayerhssb/cold-email-generator",
    bgColor: "bg-[#9FD0E3]",
    githubApi: ""
  },
  {
    title: "Terminal Portfolio",
    type: "Frontend",
    image: (
      <Image
        src="/projects/terminal-portfolio.png"
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
      // <div className="w-full h-full bg-[#C5E4E7] flex items-center justify-center p-4">
      //   <span className="text-xl font-bold text-gray-800 text-center">Terminal Portfolio</span>
      // </div>
    ),
    desc: "My portfolio website in terminal version developed with React and TypeScript.",
    tags: ["TypeScript", "CSS", "React"],
    liveUrl: "https://terminal-portfolio-blue-eight.vercel.app/",
    codeUrl: "https://github.com/ayerhssb/terminal-portfolio",
    bgColor: "bg-[#C5E4E7]",
    githubApi: ""
  },
  {
    title: "Library Management App",
    type: "Fullstack",
    image: (
      <Image
        src="/projects/library-management.png"
        sizes="100vw"
        fill
        alt="Library Management"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Library Management System with Admin Dashboard.",
    tags: ["TypeScript", "CSS"],
    liveUrl: "https://library-management-six-liard.vercel.app",
    codeUrl: "https://github.com/ayerhssb/library-management",
    bgColor: "bg-[#EBF4F4]",
    githubApi: ""
  },
  {
    title: "ChitChatGo",
    type: "Fullstack",
    image: (
      <Image
        src="/projects/chitchatgo2.png"
        sizes="100vw"
        fill
        alt="ChitChatGo"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Realtime chat app.",
    tags: ["JavaScript", "HTML", "CSS", "Node.js"],
    liveUrl: "https://chitchatgo.onrender.com/",
    codeUrl: "https://github.com/ayerhssb/ChitChatGo",
    bgColor: "bg-[#FBFBFB]",
    githubApi: ""
  },
  // {
  //   title: "Authentication MERN",
  //   type: "Fullstack",
  //   image: (
  //     <Image
  //       src="/projects/authmern.png"
  //       sizes="100vw"
  //       fill
  //       alt="Auth MERN"
  //       className="transition-transform duration-500 hover:scale-110 object-contain"
  //     />
  //   ),
  //   desc: "Auth secure login/signup feature using MERN.",
  //   tags: ["JavaScript", "HTML", "CSS", "React", "Node.js", "Express", "MongoDB"],
  //   liveUrl: "https://auth-mern-kd1x.onrender.com",
  //   codeUrl: "https://github.com/ayerhssb/Auth-MERN",
  //   bgColor: "bg-[#B4BEE0]",
  //   githubApi: ""
  // }
];

export default ProjectSection;
