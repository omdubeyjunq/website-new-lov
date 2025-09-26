import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Sparkles, Send, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Pre-fill Google Form URL with data
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdGL88AeSyQzxYgrabj5TOz_y8pSH8yjRu0jJMX-XihHPP4gA/viewform";
    const params = new URLSearchParams({
      "entry.1234567890": formData.name, // Replace with actual entry IDs from your form
      "entry.0987654321": formData.email,
      "entry.1122334455": formData.subject,
      "entry.5566778899": formData.message
    });
    
    // Open Google Form in new tab with pre-filled data
    window.open(`${googleFormUrl}?${params.toString()}`, '_blank');
    
    toast({
      title: "Redirecting to form...",
      description: "Opening Google Form with your details pre-filled.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

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

            {/* Right Column - Beautiful Custom Form */}
            <div className="lg:sticky lg:top-8">
              <Card className="p-8 shadow-strong hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <CardHeader className="p-0 mb-8">
                    <CardTitle className="text-2xl font-bold text-center text-foreground">
                      Send a Message
                    </CardTitle>
                    <p className="text-center text-muted-foreground mt-2">
                      Fill out the form and I'll get back to you soon
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Your Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="bg-background/50 border-accent/20 focus:border-accent focus:ring-accent/20 transition-all duration-300"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Your Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="bg-background/50 border-accent/20 focus:border-accent focus:ring-accent/20 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-foreground">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Let's discuss a project"
                          className="bg-background/50 border-accent/20 focus:border-accent focus:ring-accent/20 transition-all duration-300"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project or idea..."
                          rows={5}
                          className="bg-background/50 border-accent/20 focus:border-accent focus:ring-accent/20 resize-none transition-all duration-300"
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full glow-effect bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-glow transition-all duration-300 group"
                        size="lg"
                      >
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                      
                      <p className="text-xs text-center text-muted-foreground">
                        This will open a secure Google Form with your details pre-filled
                      </p>
                    </form>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};