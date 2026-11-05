import type { Metadata } from "next";
import Image from "next/image";
import { FolderOpen, MapPin } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import PhotoPlaceholder from "@/components/shared/PhotoPlaceholder";
import CtaBanner from "@/components/shared/CtaBanner";
import { photos } from "@/lib/images";
import { getProjectsByCategory, projectCategories } from "@/lib/projects";
import { whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Normlee Investments project gallery. Verified residential, commercial and industrial projects will be published here, alongside photographs of material deliveries and site operations.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Normlee Investments",
    description: "Project gallery and photographs of material deliveries and site operations.",
    url: "/projects",
    type: "website",
  },
};

// Delivery and site-operation photographs. These are genuine, but they are NOT completed paving
// installations and must never be described as such.
const deliveryPhotos = [
  { photo: photos.pavingDeliveryCrane, caption: "Blocks on a flatbed truck, with a grab crane above the load." },
  { photo: photos.tipperFill, caption: "A tipper truck emptying its load onto a dirt road." },
  { photo: photos.earthHeap, caption: "A heap of loose material along the edge of a dirt road." },
  { photo: photos.heroLoading, caption: "A truck on a dirt road with machinery behind it." },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        icon={FolderOpen}
        title="Projects"
        description="Our project gallery is being prepared. We publish only genuine, verified Normlee projects."
      />

      {/* Category galleries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary mb-4">
              Project categories
            </h2>
            {/* TODO(owner): supply photographs and facts for real projects (see lib/projects.ts). */}
            <p className="text-gray-700 leading-relaxed">
              The tiles below are placeholders. They are not photographs of Normlee projects. Each will be
              replaced with a real project, with its location where the client agrees, once we have verified
              photographs and details.
            </p>
          </div>

          <div className="space-y-16">
            {projectCategories.map((category) => {
              const items = getProjectsByCategory(category.id);
              return (
                <section key={category.id} aria-labelledby={`cat-${category.id}`}>
                  <h3 id={`cat-${category.id}`} className="text-2xl font-heading font-bold text-secondary mb-1">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{category.blurb}</p>

                  {items.length === 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <PhotoPlaceholder subject={category.photoSubject} className="h-56 rounded-2xl" />
                    </div>
                  ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map((project) => (
                        <li key={project.slug} className="overflow-hidden rounded-2xl bg-white shadow-md">
                          {project.images[0] && (
                            <Image
                              src={project.images[0].src}
                              width={project.images[0].width}
                              height={project.images[0].height}
                              alt={project.images[0].alt}
                              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                              className="h-56 w-full object-cover"
                            />
                          )}
                          <div className="p-5">
                            <h4 className="font-heading font-bold text-secondary mb-1">{project.title}</h4>
                            {(project.location || project.year) && (
                              <p className="flex items-center gap-1.5 text-xs text-gray-600 mb-2">
                                <MapPin size={13} aria-hidden="true" />
                                {[project.location, project.year].filter(Boolean).join(" · ")}
                              </p>
                            )}
                            <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* Genuine delivery photographs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-2">
              Deliveries and site operations
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary mb-4">
              From the field
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These are genuine photographs of trucks and material deliveries. They are not completed paving
              projects.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryPhotos.map(({ photo, caption }) => (
              <li key={photo.src}>
                <figure>
                  <Image
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                    alt={photo.alt}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full rounded-2xl object-cover shadow-md"
                  />
                  <figcaption className="mt-2 text-sm text-gray-600">{caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Have a project in mind?"
        text="Tell us about your site and what you need. We will help with materials, delivery and paving enquiries."
        message={whatsappMessages.general}
        whatsappLabel="Request a Quote"
      />
    </>
  );
}
