import type { Translation } from '../i18n';

const translations: Translation = {
  navbar: {
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact"
  },
  hero: {
    greeting: "Hello!",
    name: "Je suis",
    role: "Développeur Full Stack",
    description: "Passionné par les technologies web et l'Internet des Objets, je transforme les idées en solutions digitales complètes, de l'application web moderne aux systèmes embarqués industriels.",
    cta: {
      projects: "Voir mes projets",
      contact: "Me contacter"
    }
  },
  skills: {
    title: "Mes compétences",
    frontend: "Front-end",
    backend: "Back-end",
    other: "Autres"
  },
  projects: {
    title: "Mes projets",
    viewProject: "Voir le projet",
    viewCode: "Voir le code"
  },
  about: {
    title: "À propos de moi",
    subtitle: "Développeur passionné & créatif",
    description: "Je suis un développeur full stack avec une expertise en développement web et systèmes embarqués. Passionné par les nouvelles technologies, j'aime créer des solutions innovantes qui répondent aux besoins des utilisateurs.",
    experience: {
      title: "Expérience",
      years: "{years} ans"
    }
  },
  language: {
    select: "Langue"
  }
};

export default translations;
