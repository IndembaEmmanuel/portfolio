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
    greeting: "Hello!",
    name: "I am",
    role: "Full Stack Developer",
    description: "Passionate about web technologies and the Internet of Things, I transform ideas into complete digital solutions, from modern web applications to industrial embedded systems.",
    cta: {
      projects: "View my projects",
      contact: "Contact me"
    }
  },
  skills: {
    title: "My skills",
    frontend: "Front-end",
    backend: "Back-end",
    other: "Others"
  },
  projects: {
    title: "My projects",
    viewProject: "View project",
    viewCode: "View code"
  },
  about: {
    title: "About me",
    subtitle: "Passionate & creative developer",
    description: "I am a full stack developer with expertise in web development and embedded systems. Passionate about new technologies, I enjoy creating innovative solutions that meet user needs.",
    experience: {
      title: "Experience",
      years: "{years} years"
    }
  },
  language: {
    select: "Language"
  }
};

export default translations;
