import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Me</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="font-semibold text-foreground">Om Dubey</span>, a 23-year-old Product Manager, Growth Specialist and Business professional. I specialize in creating smart user experiences while optimizing business functions for scalability, performance, and efficiency.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently working in a Founder's Office role at <span className="font-semibold text-foreground">Uolo</span>. I'm passionate about Product Management, scalability & growth roles, and enjoy working on interesting projects with positive people.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I have a particular fondness for minimalistic UI/UX design and believe in the power of clean, intuitive interfaces that drive user engagement and business success.
              </p>
            </div>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center space-y-2 shadow-soft">
                <div className="text-3xl font-bold text-accent">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              
              <Card className="p-6 text-center space-y-2 shadow-soft">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};