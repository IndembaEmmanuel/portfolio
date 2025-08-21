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
    description: "Je conçois et développe des applications web/mobile modernes, performantes et adaptées à vos besoins.",
    cta: {
      projects: "Voir mes projets",
      contact: "Me contacter"
    }
  },
  skills: {
    title: "Mes compétences",
    frontend: "Front-end",
    backend: "Back-end",
    database: "Bases de données",
    devops: "DevOps / Cloud",
    other: "Autres"
  },
  projects: {
    title: "Mes projets publics",
    viewProject: "Voir le projet",
    viewCode: "Voir le code",
    noProjects: "Aucun projet disponible",
    badge: {
      "in-progress": "En cours",
      "stand-by": "En pause",
      "completed": "Terminé"
    }
  },
  about: {
    title: "À propos de moi",
    subtitle: "Développeur passionné & créatif",
    bio1: "Je suis Emmanuel Indemba, développeur fullstack basé à Paris et diplômé d’un Master Architecte Logiciel à Epitech. Passionné par les technologies web et l’Internet des Objets, je transforme les idées en solutions digitales complètes : des applications web modernes aux systèmes embarqués industriels. Grand fan de football ⚽, je pratique aussi la musculation et j’adore voyager !",
    webDevelopment: "Développement Web",
    appDevelopment: "Développement d'Applications",
    iot: "Objets Connectés",
    travel: "Voyages",
    sports: "Sports",
    completedProjects: "Projets complétés",
    clientSatisfaction: "Satisfaction client",
    yearsExperience: "Années d'expérience",
    experience: {
      title: "Expérience",
      years: "{years} ans"
    }
  },
  language: {
    select: "Langue"
  },
  footer: {
    tagline: "Développeur Full Stack passionné par la création d'applications web/mobile modernes",
    navigation: "Navigation",
    contact: "Contact",
    rights: "Tous droits réservés."
  }
};

export default translations;
