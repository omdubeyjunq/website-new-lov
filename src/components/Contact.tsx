import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Sparkles } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <div className="flex items-center justify-center gap-2 text-accent font-medium">
              <Sparkles className="w-5 h-5" />
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text">
              Contact <span className="text-accent">Me</span>
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto rounded-full glow-effect" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project, idea or problem you'd like to discuss? Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 glow-text">
                  Let's work together
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, and ways to help businesses grow through better product experiences.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                <Card className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a 
                        href="mailto:omdubeyyy@gmail.com" 
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        omdubeyyy@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                      <MessageSquare className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                      <p className="text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Column - Google Form */}
            <div className="lg:sticky lg:top-8">
              <Card className="p-6 shadow-strong hover:shadow-glow transition-all duration-500 overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-center text-foreground">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Google Form Iframe */}
                  <div className="relative rounded-lg overflow-hidden border border-accent/20 bg-card/50 backdrop-blur-sm">
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdGL88AeSyQzxYgrabj5TOz_y8pSH8yjRu0jJMX-XihHPP4gA/viewform?embedded=true" 
                      width="100%" 
                      height={700} 
                      frameBorder={0} 
                      marginHeight={0} 
                      marginWidth={0}
                      className="w-full"
                      title="Contact Form"
                      style={{ minHeight: '700px' }}
                    >
                      Loading contact form...
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};