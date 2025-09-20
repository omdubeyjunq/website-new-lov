import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Sparkles } from "lucide-react";

const projects = [
  {
    title: "E-Comm Inventory Management System",
    description: "A complete, scalable Inventory & Order management System with real-time tracking and automated workflows.",
    tags: ["E-Commerce", "Full-Stack", "Real-time", "Analytics"],
    link: "https://omdubeyyy.notion.site/Inventory-Management-System-26a2abc044ce8023b4cdcddcd459c319",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop",
    featured: true,
    category: "Featured Project"
  },
  {
    title: "Lufthansa Mobile App",
    description: "Comprehensive case study solving critical problems faced by international travellers through innovative UX design.",
    tags: ["UX Research", "Mobile Design", "User Journey", "Prototyping"],
    link: "https://omdubeyyy.notion.site/Lufthansa-Mobile-App-aadf398e8eb043dc8359ddf2541cbab2",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    featured: true,
    category: "Featured Project"
  },
  {
    title: "Event Management System",
    description: "Streamlined tool for creating, managing & editing events with automated workflows and analytics.",
    tags: ["Management", "Automation", "Analytics", "User Flow"],
    link: "https://omdubeyyy.notion.site/Event-Management-System-530b966820b94f61ac1a12f3ab6ccc62",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
    featured: false,
    category: "Product Design"
  },
  {
    title: "Demo Auto-assignment Logic",
    description: "Intelligent backend system that assigns demos based on multiple optimization variables.",
    tags: ["Algorithms", "Optimization", "Backend", "Automation"],
    link: "https://omdubeyyy.notion.site/Demo-Auto-assignment-Feature-c5f1ee3f8f9f481da1158d1cab327678",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    featured: false,
    category: "Product Design"
  },
  {
    title: "NPS & Feedback Analytics",
    description: "Comprehensive system to capture, analyze and act on user feedback with advanced reporting.",
    tags: ["Analytics", "User Research", "Reporting", "Insights"],
    link: "https://omdubeyyy.notion.site/NPS-Feedback-Structure-a9dd11681d2648b5829e83dd6e429bc4",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    featured: false,
    category: "Product Design"
  },
  {
    title: "Sales Management Platform",
    description: "End-to-end sales pipeline tool with payment processing and automated user onboarding.",
    tags: ["Sales", "CRM", "Automation", "Analytics"],
    link: "https://omdubeyyy.notion.site/Sales-Management-System-4a5abadef86a404cb0c84e4fb3232de1",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    featured: false,
    category: "Product Design"
  }
];

export const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <div className="flex items-center justify-center gap-2 text-accent font-medium">
              <Sparkles className="w-5 h-5" />
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto rounded-full glow-effect" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my work in product management, design, and business optimization that drives real impact
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="project-card group overflow-hidden shadow-strong hover:shadow-glow transition-all duration-500 hover:scale-105 relative">
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-xs font-medium backdrop-blur-sm">
                    <Star className="w-3 h-3 fill-current" />
                    {project.category}
                  </div>
                  
                  {/* Image */}
                  <div className="aspect-video overflow-hidden bg-muted relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  </div>
                  
                  <CardContent className="p-8 space-y-6">
                    {/* Title */}
                    <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="px-3 py-1 bg-secondary/50 border border-accent/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 backdrop-blur-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project Details
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regular Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regularProjects.map((project, index) => (
              <Card key={index} className="project-card group overflow-hidden shadow-medium hover:shadow-strong hover:scale-105 transition-all duration-500">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg font-semibold leading-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-secondary/50 border border-accent/20">
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
                    className="w-full group-hover:border-accent group-hover:text-accent transition-all duration-300"
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
          <div className="text-center">
            <Button 
              variant="default" 
              size="lg" 
              className="glow-effect bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a 
                href="https://omdubeyyy.notion.site/Om-Dubey-Product-Manager-Portfolio-1-5eee76b192e44b649ba657a819cf7f5f" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Explore Complete Portfolio
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};