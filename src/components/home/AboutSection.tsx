import { CheckCircle, Target, Eye, Award } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";

const AboutSection = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "50+", label: "Expert Team Members" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const values = [
    { icon: Target, title: "Our Mission", description: "To deliver superior construction solutions with uncompromising quality, safety, and timely execution." },
    { icon: Eye, title: "Our Vision", description: "To be the most trusted construction partner in India, known for innovation and reliability." },
    { icon: Award, title: "Our Values", description: "Integrity, excellence, safety, and sustainable practices in every project we undertake." },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img 
              src={teamImage} 
              alt="Valor Buildcon team at construction site" 
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 hidden md:block rounded-lg">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-80">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              ABOUT VALOR BUILDCON
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Building India's Infrastructure With Expertise & Trust
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Valor Buildcon LLP is a leading construction company with over 15 years of 
              experience in delivering high-quality RCC structural work and Ready Mix 
              Concrete solutions. We have successfully completed more than 500 projects 
              across residential, commercial, and industrial sectors.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art RMC plant, combined with our skilled workforce and 
              modern equipment, enables us to meet the most demanding project requirements 
              while maintaining the highest standards of quality and safety.
            </p>

            <div className="space-y-3">
              {["ISO 9001:2015 Certified Company", "Quality Tested Materials", "On-Time Project Delivery", "Competitive Pricing"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-border p-6 text-center rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {values.map((item) => (
            <div key={item.title} className="bg-card border border-border p-8 rounded-lg">
              <item.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
