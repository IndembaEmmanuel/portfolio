import type { Translation } from '../i18n';

const translations: Translation = {
  navbar: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  },
  hero: {
    name: "I am",
    role: "Full Stack Developer",
    description: "I design and develop modern, high-performance web/mobile applications tailored to your needs.",
    cta: {
      projects: "View my projects",
      contact: "Contact me"
    }
  },
  skills: {
    title: "My skills",
    frontend: "Front-end",
    backend: "Back-end",
    database: "Databases",
    devops: "DevOps / Cloud",
    other: "Others"
  },
  projects: {
    title: "My public projects",
    viewProject: "View project",
    viewCode: "View code",
    noProjects: "No projects available",
    badge: {
      "in-progress": "In progress",
      "stand-by": "On hold",
      "completed": "Completed"
    }
  },
  about: {
    title: "About me",
    subtitle: "Passionate & creative developer",
    bio1: "I’m Emmanuel Indemba, a fullstack developer based in Paris with a Master’s degree in Software Architecture from Epitech. Passionate about web technologies and the Internet of Things, I turn ideas into complete digital solutions — from modern web applications to industrial embedded systems. A big football fan ⚽, I also enjoy working out and love traveling !",
    webDevelopment: "Website Development",
    appDevelopment: "App Development",
    iot: "Connected Objects",
    travel: "Travel",
    sports: "Sports",
    completedProjects: "Completed Projects",
    clientSatisfaction: "Client satisfaction",
    yearsExperience: "Years of experience",
    experience: {
      title: "Experience",
      years: "{years} years"
    }
  },
  language: {
    select: "Language"
  },
  footer: {
    tagline: "Full Stack Developer passionate about creating modern web/mobile applications",
    navigation: "Navigation",
    contact: "Contact",
    rights: "All rights reserved."
  }
};

export default translations;
