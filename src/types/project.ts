import type { ImageMetadata } from 'astro';

export type ProjectBadge = 'in-progress' | 'stand-by' | 'completed';

export interface Project {
    title: string;
    description: string;
    image: string | ImageMetadata;
    technologies: {
        name: string;
        icon: string;
    }[];
    links?: {
        live?: string;
        code?: string;
    };
    featured?: boolean;
    badge?: ProjectBadge;
}
