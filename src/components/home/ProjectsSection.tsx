import { Building2, MapPin, Calendar } from "lucide-react";
import { useContent } from "@/hooks/use-content";

const ProjectsSection = () => {
  const defaultCivilProjects = [
    { title: "Legacy Milestone", location: "Punawale", scope: "Excavation", status: "Completed" },
    { title: "Vilas Jawadekar", location: "Kate Wasti", scope: "Excavation", status: "Completed" },
    { title: "18 Magnitude", location: "Punawale", scope: "Excavation", status: "Completed" },
  ];

  const defaultRccProjects = [
    { title: "Podar School", location: "Punawale", scope: "RCC Work", status: "Completed" },
    { title: "DY Patil", location: "Ravet", scope: "RCC Work", status: "Completed" },
  ];

  const defaultGalleryImages = [
    "/images/civil_rcc_work/IMG-20260113-WA0000.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0001.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0002.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0003.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0004.jpg",
  ];

  const { civilProjects, rccProjects, galleryImages } = useContent<{
    civilProjects: typeof defaultCivilProjects;
    rccProjects: typeof defaultRccProjects;
    galleryImages: typeof defaultGalleryImages;
  }>("/content/rcc.json", {
    civilProjects: defaultCivilProjects,
    rccProjects: defaultRccProjects,
    galleryImages: defaultGalleryImages,
  });

  const completedProjects = [...rccProjects, ...civilProjects].map((project, index) => ({
    ...project,
    image: galleryImages[index % galleryImages.length],
  }));

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-background"
      data-animate="fade-up"
      data-animate-duration="0.9"
    >
      <div className="container">
        <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
            OUR PORTFOLIO
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-4" />
          <p className="text-muted-foreground max-w-2xl">
            Explore our successfully completed RCC and civil works delivered across Pune's growth corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {completedProjects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card border border-border overflow-hidden group rounded-lg"
              data-animate="fade-up"
              data-animate-delay={`${0.15 + index * 0.08}`}
            >
              <div className="relative h-52 sm:h-60 lg:h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs sm:text-sm font-medium rounded">
                  {project.scope}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>{project.scope}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{project.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
