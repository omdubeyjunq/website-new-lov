import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Palette, Cog, Sparkles, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "Product Management",
    icon: Target,
    skills: ["AGILE", "Product Roadmap", "ProductOps", "Wireframing", "User Research", "Stakeholder Management", "Prioritisation", "A/B Testing"],
    highlight: "Core expertise in building products that users love"
  },
  {
    title: "Business & Strategy",
    icon: TrendingUp,
    skills: ["Business Strategy", "Market Research", "Sales", "Marketing", "Branding", "User Adoption", "Analytics"],
    highlight: "Driving growth through strategic thinking"
  },
  {
    title: "Design & Tools",
    icon: Palette,
    skills: ["UI/UX", "Figma", "Photoshop", "Wireframing", "Web Design"],
    highlight: "Creating beautiful and functional experiences"
  },
  {
    title: "Operations & Tools",
    icon: Cog,
    skills: ["Notion", "Jira", "Trello", "CRM", "Freshwork", "Mixpanel", "Pendo", "Automation", "Copywriting", "Optimization"],
    highlight: "Streamlining processes for maximum efficiency"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 animated-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <div className="flex items-center justify-center gap-2 text-accent font-medium">
              <Sparkles className="w-5 h-5" />
              EXPERTISE & CAPABILITIES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text">
              Skills & <span className="text-accent">Expertise</span>
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto rounded-full glow-effect" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit for product management, growth, and business optimization that delivers exceptional results
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="skill-card p-8 shadow-strong hover:shadow-glow hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {category.highlight}
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="px-4 py-2 text-sm font-medium bg-secondary/50 border border-accent/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 cursor-default backdrop-blur-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium backdrop-blur-sm">
              <Lightbulb className="w-4 h-4" />
              Ready to bring these skills to your next project
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};