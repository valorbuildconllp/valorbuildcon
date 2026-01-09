import Layout from "@/components/layout/Layout";
import { Shield, Target, HardHat } from "lucide-react";

const pillars = [
  {
    name: "Virendra Anil Kate",
    title: "Founding Partner",
    focus: "Vision & Leadership",
    description:
      "Guides Valor Buildcon's long-term strategy, forging partnerships and cultivating a culture of craftsmanship across every site we touch.",
    icon: Shield,
  },
  {
    name: "Abhayraje Gangadhar Vinode",
    title: "Operations Partner",
    focus: "Execution & Delivery",
    description:
      "Oversees civil execution, quality labs, and on-ground teams to ensure structures are delivered safely, precisely, and ahead of schedule.",
    icon: Target,
  },
  {
    name: "Abhilash Tukaram Kalokhe",
    title: "Projects Partner",
    focus: "Client Success",
    description:
      "Leads client engagements and translates complex design intents into actionable construction programs across RCC and RMC projects.",
    icon: HardHat,
  },
];

const About = () => {
  return (
    <Layout>
      <section className="bg-muted/20 py-16 border-b border-border">
        <div className="container text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium rounded">
            OUR STORY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            The Pillars Behind Valor Buildcon
          </h1>
          <p className="text-muted-foreground text-lg">
            Three visionaries drive our commitment to structural integrity, disciplined execution,
            and client-first collaboration. Together, they ensure every Valor Buildcon project stands as a
            benchmark for civil excellence.
          </p>
        </div>
      </section>

      <section className="container py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map(({ name, title, focus, description, icon: Icon }) => (
          <div key={name} className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-4 shadow-sm">
            <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">{focus}</p>
              <h2 className="text-2xl font-semibold text-foreground">{name}</h2>
              <p className="text-primary font-medium">{title}</p>
            </div>
            <p className="text-muted-foreground leading-relaxed flex-1">{description}</p>
          </div>
        ))}
      </section>

      <section className="container pb-16">
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-14 flex flex-col gap-6">
          <h3 className="text-3xl font-semibold">Building Tomorrow's Landmarks</h3>
          <p className="text-primary-foreground/90 text-lg">
            From RCC civil works to precision RMC supply, our leadership collective keeps Valor Buildcon agile,
            responsive, and relentlessly focused on engineering trust for every stakeholder.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
