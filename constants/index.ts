import { FaYoutube, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [

  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com/awkwardpy_",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/awkwardpy",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/awkwardpy",
  },
 
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Web Development",
    description:'Empower Your Sites with Top-tier Coding Expertise. Our team of skilled developers offers comprehensive coding solutions tailored to your needs. From building robust applications to optimizing existing code, we deliver excellence at every stage of development.',
    link: "https://github.com/awkward-py",
  },
  {
    title: "Edits with me",
    description:
      'Bring Your Imagery to Life with Expert Editing. I specializes in enhancing videos and photos to captivate your audience. From color correction and cropping to adding special effects and transitions, we turn your raw footage into polished masterpieces.',
   
    link: "https://github.com/awkward-py",
  },
  {
    title: "Beginner Coding Projects",
    description:
      'Dive into the world of programming with our beginner-friendly projects designed to introduce you to the fundamentals of coding. Whether you are interested in web development, game design, or app creation',
 
    link: "https://github.com/awkward-py",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Let's chat",
    data: [
      {
        name: "WhatsApp",
        icon: FaWhatsapp,
        link: "https://wa.me/7465814952",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com/awkwardpy",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://facebook.com/awkwardpy",
      },
    ],
  },
  {
    title: "Community",
    data: [
      {
        name: "Github",
        icon: RxGithubLogo,
        link: "https://github.com/awkward-py",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com/awkwardpy_",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/awkwardpy",
      },
    ],
  },
  {
    title: "Extras",
    data: [
      {
        name: "IT-off Topics",
        icon: null,
        link: "https://eh7q7h2ipvofxqhdjs39vg.on.drv.tw/IT-off%20topicsss/IITinas/",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://github.com/awkwardpy",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:awkwardpy@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About us",
    link: "#hero",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/awkward-py/awkwardpy-main",
};
