import { Building2, MapPin, Calendar } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      image: project1,
      title: "Sunrise Commercial Complex",
      location: "Ahmedabad, Gujarat",
      type: "Commercial",
      year: "2023",
      area: "50,000 sq.ft",
    },
    {
      image: project2,
      title: "Green Valley Residency",
      location: "Gandhinagar, Gujarat",
      type: "Residential",
      year: "2024",
      area: "1,20,000 sq.ft",
    },
    {
      image: project3,
      title: "Metro Logistics Warehouse",
      location: "Sanand, Gujarat",
      type: "Industrial",
      year: "2023",
      area: "2,00,000 sq.ft",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
            OUR PORTFOLIO
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successfully completed projects across 
            residential, commercial, and industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card border border-border overflow-hidden group rounded-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded">
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Completed: {project.year}</span>
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
