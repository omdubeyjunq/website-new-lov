import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Product Management",
    skills: ["AGILE", "Product Roadmap", "ProductOps", "Wireframing", "User Research", "Stakeholder Management", "Prioritisation", "A/B Testing"]
  },
  {
    title: "Business & Strategy",
    skills: ["Business Strategy", "Market Research", "Sales", "Marketing", "Branding", "User Adoption", "Analytics"]
  },
  {
    title: "Design & Tools",
    skills: ["UI/UX", "Figma", "Photoshop", "Wireframing", "Web Design"]
  },
  {
    title: "Operations & Tools",
    skills: ["Notion", "Jira", "Trello", "CRM", "Freshwork", "Mixpanel", "Pendo", "Automation", "Copywriting", "Optimization"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for product management, growth, and business optimization
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-8 shadow-soft hover:shadow-medium transition-spring">
                <h3 className="text-xl font-semibold mb-6 text-accent">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};