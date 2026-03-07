import { BriefcaseBusiness, Building2, FlaskConical, HardHat, Mail, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";

const openings = [
  {
    title: "RMC Quality Engineer",
    team: "RMC Plant Operations",
    location: "Jambe Goan, Mulshi (Pune)",
    type: "Full Time",
    icon: FlaskConical,
    description:
      "Lead mix quality checks, cube/slump test reporting, and batch-wise QA documentation aligned to project requirements.",
  },
  {
    title: "Field Technician",
    team: "Site Execution",
    location: "Pune, Maharashtra",
    type: "Full Time",
    icon: HardHat,
    description:
      "Support on-site RCC and RMC activities, coordinate sampling/testing, and ensure safe equipment and material handling.",
  },
  {
    title: "Civil Engineer (Junior)",
    team: "Civil Work",
    location: "Pune, Maharashtra",
    type: "Full Time",
    icon: Building2,
    description:
      "Assist project engineers with quantity checks, daily progress reporting, and quality compliance on active construction sites.",
  },
  {
    title: "Civil Engineer (Senior)",
    team: "Civil Work",
    location: "Pune, Maharashtra",
    type: "Full Time",
    icon: BriefcaseBusiness,
    description:
      "Drive execution planning, contractor coordination, and milestone delivery while maintaining structural and QA standards.",
  },
];

const Careers = () => {
  return (
    <Layout>
      <section
        className="py-6 sm:py-8 border-b border-border"
        style={{ background: "#F0E9E0" }}
        data-animate="fade-up"
        data-animate-duration="1"
        data-animate-delay="0.1"
      >
        <div className="container max-w-3xl mx-auto space-y-6 text-left">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium rounded">
            CAREERS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
            Build Your Career With Valor Buildcon
          </h1>
          <div className="w-16 h-1 bg-primary rounded mb-4" />
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl">
            Join our growing RCC and RMC teams and work on high-impact infrastructure projects across Pune and nearby
            regions.
          </p>
        </div>
      </section>

      <section className="container py-12 sm:py-16" data-animate="fade-up" data-animate-delay="0.15">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          data-animate-targets="[data-opening-card]"
          data-animate-stagger="0.08"
        >
          {openings.map((opening) => (
            <article key={opening.title} className="bg-card border border-border rounded-2xl p-6 sm:p-7 shadow-sm" data-opening-card>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <opening.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{opening.type}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">{opening.title}</h2>
              <p className="text-sm text-primary font-medium mt-1">{opening.team}</p>
              <p className="text-muted-foreground mt-4 leading-relaxed">{opening.description}</p>

              <div className="mt-5 pt-4 border-t border-border text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>{opening.location}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-16 sm:pb-20" data-animate="scale" data-animate-duration="1" data-animate-delay="0.2">
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 sm:p-10 md:p-14 flex flex-col gap-5">
          <h3 className="text-2xl sm:text-3xl font-semibold">Apply For Current Openings</h3>
          <p className="text-primary-foreground/90 text-base sm:text-lg">
            Share your updated resume with the role name in the subject line. Our hiring team will connect if your
            profile matches active requirements.
          </p>
          <a
            href="mailto:valorbuildconllp@gmail.com?subject=Career%20Application%20-%20Valor%20Buildcon"
            className="inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary font-semibold px-6 py-3 w-full sm:w-fit"
          >
            <Mail className="mr-2 h-4 w-4" />
            Send Your Resume
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;