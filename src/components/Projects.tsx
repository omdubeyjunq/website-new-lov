import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MousePointer } from "lucide-react";

const projects = [
  {
    title: "E-Comm Inventory Management System",
    description: "A project to build a complete, scalable Inventory & Order management System.",
    tags: ["E-Comm", "Coding", "Lovable"],
    link: "https://omdubeyyy.notion.site/Inventory-Management-System-26a2abc044ce8023b4cdcddcd459c319",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop"
  },
  {
    title: "Lufthansa Mobile App",
    description: "A case study on how Lufthansa can solve problems faced by international travellers.",
    tags: ["Wireframe", "Case Study", "User Journey", "Figma"],
    link: "https://omdubeyyy.notion.site/Lufthansa-Mobile-App-aadf398e8eb043dc8359ddf2541cbab2",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop"
  },
  {
    title: "Event Management System",
    description: "A management tool to create, manage & edit events.",
    tags: ["Management Tool", "Web Design", "Wireframe", "User Flow"],
    link: "https://omdubeyyy.notion.site/Event-Management-System-530b966820b94f61ac1a12f3ab6ccc62",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop"
  },
  {
    title: "Demo Auto-assignment",
    description: "A backend logic to assign demo based on multiple variables.",
    tags: ["Logic", "Optimisation", "User Flow", "Design"],
    link: "https://omdubeyyy.notion.site/Demo-Auto-assignment-Feature-c5f1ee3f8f9f481da1158d1cab327678",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
  },
  {
    title: "NPS & Feedback Structure",
    description: "Process to capture, record & analyse NPS & Feedback from users.",
    tags: ["Web Design", "NPS", "Feedback"],
    link: "https://omdubeyyy.notion.site/NPS-Feedback-Structure-a9dd11681d2648b5829e83dd6e429bc4",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    title: "Sales Management Tool",
    description: "Internal tool to manage sales pipeline, collect payment & onboard users.",
    tags: ["Sales", "Dashboard", "Web Design"],
    link: "https://omdubeyyy.notion.site/Sales-Management-System-4a5abadef86a404cb0c84e4fb3232de1",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">My Projects</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in product management, design, and business optimization
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden shadow-soft hover:shadow-strong transition-spring cursor-pointer">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-spring"
                  />
                </div>
                
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg font-semibold leading-tight group-hover:text-accent transition-smooth">
                      {project.title}
                    </CardTitle>
                    <MousePointer className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-smooth flex-shrink-0 mt-1" />
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:border-accent group-hover:text-accent transition-smooth"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a 
                href="https://omdubeyyy.notion.site/Om-Dubey-Product-Manager-Portfolio-1-5eee76b192e44b649ba657a819cf7f5f" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View All Projects
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};