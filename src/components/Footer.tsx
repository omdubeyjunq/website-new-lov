import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center space-y-8">
            {/* Quote Section */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Product, Growth, Business.
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Building exceptional user experiences and driving business growth through strategic product management and innovative solutions.
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-primary-foreground/90">
                Ready to work together?
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                asChild
              >
                <a href="mailto:omdubeyyy@gmail.com">
                  Let's Connect
                </a>
              </Button>
            </div>
          </div>

          <Separator className="my-12 bg-primary-foreground/20" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Om Dubey. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>and passion for great products.</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};