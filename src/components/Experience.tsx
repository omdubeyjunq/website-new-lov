import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Tekie.in (Now Uolo)",
    position: "Founder's Office",
    period: "Nov 2022 - Present",
    location: "Remote",
    achievements: [
      "Collaborating with sales & ops function to improve product adoption for existing product features through teacher feedbacks, on-ground insights & data analysis",
      "Managing the GTM for new products including user analysis, assisting in sales deck creation & product activation",
      "Conducted extensive market research and competitive analysis to assist product development",
      "Defined and tracked key unit economics, including customer acquisition, retention and LTV, to measure success"
    ],
    tags: ["Growth", "GTM Strategy", "Analytics", "Market Research"]
  },
  {
    company: "Tekie.in",
    position: "Product Management",
    period: "Oct 2020 - Nov 2022",
    location: "Remote",
    achievements: [
      "Led the development of a new Event Management System for better lead generation resulting in over 5k+ registration in 2 months",
      "Scoped out features, documented PRDs, created lo-fi wireframes and built out product roadmaps",
      "Developed automated demo assignment feature resulting in a 30% increase in monthly revenue",
      "Spearheaded a high-impact project with 15+ artists to create coding & computer science books",
      "Collaborated with the business function to improve the sales funnel by revamping the CRM & setting up automation"
    ],
    tags: ["Product Management", "PRD", "Wireframing", "Revenue Growth", "Automation"]
  },
  {
    company: "Tekie.in",
    position: "B2C Operations",
    period: "March 2020 - Oct 2020",
    location: "Remote",
    achievements: [
      "Managed a team of 6 Customer Support Executives resulting in a 92% retention rate & 84% renewal rate",
      "Initiated & launched a customer support structure including tool integration, bot flow creation & ticketing system",
      "Designed and executed A/B experiments to improve user onboarding and retention"
    ],
    tags: ["Operations", "Team Management", "Customer Support", "A/B Testing"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Experience</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in product management, growth, and business optimization
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-spring">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold text-accent">
                        {exp.company}
                      </CardTitle>
                      <h3 className="text-lg font-semibold">{exp.position}</h3>
                    </div>
                    
                    <div className="flex flex-col sm:items-end gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};