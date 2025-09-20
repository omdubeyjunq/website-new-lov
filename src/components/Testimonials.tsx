import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Somani",
    title: "CFO, Tekie",
    quote: "Om is an outstanding professional with exceptional business and analytical skills. He has a talent for understanding complex issues and identifying creative solutions that drive business growth.",
    category: "Strategic Problem Solver",
    linkedin: "https://www.linkedin.com/in/carohitsomani/"
  },
  {
    name: "Naman Mukund",
    title: "Co-founder, Tekie",
    quote: "He brings with him a unique set of interpersonal skills that have been really helpful. His ability to understand and appreciate different perspectives has allowed us to achieve our goals as a team.",
    category: "Team Catalyst",
    linkedin: "https://www.linkedin.com/in/naman-mukund-2a389553/"
  },
  {
    name: "Anand Verma",
    title: "Co-founder, Tekie",
    quote: "Om is an exceptional team player and leader, with a talent for collaborating across multiple functions and delivering high-quality work. His ability to identify innovative solutions to complex problems, positive attitude, and strong work ethic make him an invaluable asset to any organization.",
    category: "Exceptional Team Player",
    linkedin: "https://www.linkedin.com/in/carohitsomani/"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Testimonials</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What colleagues and leaders say about working with me
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative p-8 shadow-soft hover:shadow-medium transition-spring h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-accent/20" />
                </div>

                <CardContent className="p-0 space-y-6 h-full flex flex-col">
                  {/* Category Badge */}
                  <Badge variant="secondary" className="w-fit text-xs font-medium">
                    {testimonial.category}
                  </Badge>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                    
                    <Button variant="ghost" size="sm" asChild className="p-0 h-auto justify-start">
                      <a 
                        href={testimonial.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80"
                      >
                        View LinkedIn
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};