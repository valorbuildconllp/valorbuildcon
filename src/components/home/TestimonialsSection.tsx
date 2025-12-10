import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Patel",
      company: "Patel Constructions",
      role: "Managing Director",
      content: "Valor Buildcom's RCC work quality is exceptional. Their team completed our 10-story residential project with outstanding precision and on schedule. Highly recommend their services.",
      rating: 5,
    },
    {
      name: "Amit Shah",
      company: "Shah Infrastructure",
      role: "Project Manager",
      content: "The RMC supply from Valor Buildcom is always consistent and timely. Their mix design team helped us achieve the perfect concrete grade for our industrial warehouse project.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      company: "Mehta Developers",
      role: "Director",
      content: "Working with Valor Buildcom has been a pleasure. Their professional approach, quality materials, and expert team make them our preferred construction partner.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients 
            have to say about working with Valor Buildcom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card border border-border p-8 relative"
            >
              <Quote className="h-10 w-10 text-muted/50 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
