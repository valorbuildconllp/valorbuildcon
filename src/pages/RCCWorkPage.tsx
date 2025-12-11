import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Building2, 
  Layers, 
  Shield, 
  Users, 
  HardHat, 
  Ruler,
  Phone,
  ArrowRight,
  MapPin,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import rccImage from "@/assets/rcc-work.jpg";
import heroImage from "@/assets/hero-construction.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import teamImage from "@/assets/team-work.jpg";

const RCCWorkPage = () => {
  const services = [
    {
      icon: Building2,
      title: "Foundation Work",
      description: "Strong and durable foundations for multi-story buildings, ensuring structural integrity.",
    },
    {
      icon: Layers,
      title: "Slab Casting",
      description: "Precision slab work with proper reinforcement and smooth finishing for all floor types.",
    },
    {
      icon: Shield,
      title: "Column & Beam Work",
      description: "Structural framing with optimal strength and precise alignment for building stability.",
    },
    {
      icon: Ruler,
      title: "Staircase Construction",
      description: "Custom RCC staircases designed for functionality, safety, and aesthetic appeal.",
    },
    {
      icon: HardHat,
      title: "Retaining Walls",
      description: "Engineered retaining walls for slope stability and earth retention solutions.",
    },
    {
      icon: Users,
      title: "Structural Repairs",
      description: "Expert repair and rehabilitation of existing RCC structures with modern techniques.",
    },
  ];

  const howWeWork = [
    { step: "01", title: "Consultation", description: "Understanding your project requirements and site conditions" },
    { step: "02", title: "Planning", description: "Detailed structural planning and mix design preparation" },
    { step: "03", title: "Execution", description: "Professional execution with quality materials and skilled labor" },
    { step: "04", title: "Quality Check", description: "Rigorous testing and quality assurance at every stage" },
  ];

  const safetyMeasures = [
    "Personal Protective Equipment (PPE) for all workers",
    "Regular safety training and toolbox talks",
    "Proper scaffolding and fall protection systems",
    "Fire safety equipment on all sites",
    "First aid facilities and emergency protocols",
    "Regular site inspections and audits",
  ];

  const assets = [
    { name: "Tower Cranes", count: "5+" },
    { name: "Concrete Pumps", count: "8+" },
    { name: "Transit Mixers", count: "15+" },
    { name: "Batching Plants", count: "2" },
    { name: "Skilled Workers", count: "200+" },
    { name: "Engineers", count: "25+" },
  ];

  const projects = [
    { image: project1, title: "Commercial Complex", location: "Ahmedabad", area: "50,000 sq.ft" },
    { image: project2, title: "Residential Tower", location: "Gandhinagar", area: "1,20,000 sq.ft" },
    { image: project3, title: "Industrial Warehouse", location: "Sanand", area: "2,00,000 sq.ft" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={rccImage} alt="RCC Work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              RCC STRUCTURAL WORK
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-background mb-4">
              Building Strong Foundations for Tomorrow
            </h1>
            <p className="text-xl text-background/80 mb-6">
              Expert Reinforced Cement Concrete structural work for residential, 
              commercial, and industrial projects with uncompromising quality.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              OUR SERVICES
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              RCC Work Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive RCC structural services with precision engineering and quality execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border p-6 hover:border-primary transition-colors rounded-lg">
                <service.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              OUR WORK
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Projects Completed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card border border-border overflow-hidden group rounded-lg">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                    <span className="mx-2">•</span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              OUR PROCESS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border p-6 h-full rounded-lg">
                  <div className="text-4xl font-bold text-secondary/30 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < howWeWork.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 h-8 w-8 text-muted" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Measures Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary-foreground/20 px-4 py-1 text-sm font-medium mb-4 rounded">
                SAFETY FIRST
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Safety Measures We Take
              </h2>
              <p className="opacity-80 mb-8">
                At Valor Buildcon, safety is our top priority. We implement comprehensive 
                safety protocols to ensure the well-being of our workers and stakeholders.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {safetyMeasures.map((measure, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="opacity-90">{measure}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={teamImage} alt="Safety measures" className="w-full h-[400px] object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Assets Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              OUR CAPABILITIES
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Assets We Have
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {assets.map((asset, index) => (
              <div key={index} className="bg-card border border-border p-6 text-center rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">{asset.count}</div>
                <div className="text-sm text-muted-foreground">{asset.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-muted h-[400px] w-full flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <Users className="h-20 w-20 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Director Photo</p>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
                LEADERSHIP
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Director
              </h2>
              <h3 className="text-xl text-secondary mb-4">Mr. Vikram Patel</h3>
              <p className="text-muted-foreground mb-4">Managing Director, Valor Buildcon LLP</p>
              <p className="text-muted-foreground leading-relaxed">
                With over 20 years of experience in the construction industry, Mr. Vikram Patel 
                leads Valor Buildcom with a vision of excellence and innovation. Under his 
                leadership, the company has successfully delivered hundreds of projects across 
                Gujarat and established itself as a trusted name in RCC construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary rounded-lg mx-4 mb-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-secondary-foreground mb-2">
                Ready to Start Your Project?
              </h2>
              <p className="text-secondary-foreground/80">
                Contact us today for a free consultation and quote.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                <a href="tel:+919876543210">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/#contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RCCWorkPage;
