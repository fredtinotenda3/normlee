/**
 * Project portfolio data.
 *
 * IMPORTANT: this list is intentionally EMPTY. No completed Normlee projects
 * have been verified yet, so none are shown. The /projects page displays clearly
 * labelled placeholders until entries are added here.
 *
 * TODO(owner): supply, for each real project, a photograph (with permission to
 * publish), the category, a short factual description, the suburb/town if the
 * client agrees, and the year. Do not add entries for work Normlee did not do.
 */

export type ProjectCategory = "residential" | "commercial" | "industrial" | "walkways" | "supply";

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Verified description only. */
  description: string;
  /** Verified location, e.g. "Borrowdale, Harare". Omit if the client prefers privacy. */
  location?: string;
  year?: number;
  images: ProjectImage[];
}

export const projectCategories: {
  id: ProjectCategory;
  title: string;
  blurb: string;
  photoSubject: string;
}[] = [
  {
    id: "residential",
    title: "Residential",
    blurb: "Driveways and paving for homes.",
    photoSubject: "Completed residential paving project",
  },
  {
    id: "commercial",
    title: "Commercial",
    blurb: "Paving for shops, offices and other commercial properties.",
    photoSubject: "Completed commercial paving project",
  },
  {
    id: "industrial",
    title: "Industrial",
    blurb: "Paving for yards, warehouses and industrial sites.",
    photoSubject: "Completed industrial paving project",
  },
  {
    id: "walkways",
    title: "Decorative walkways",
    blurb: "Pathways and walkways.",
    photoSubject: "Completed walkway project",
  },
  {
    id: "supply",
    title: "Material supply",
    blurb: "Bulk materials supplied to building and civil sites.",
    photoSubject: "Material supplied to a customer site",
  },
];

export const projects: Project[] = [];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
