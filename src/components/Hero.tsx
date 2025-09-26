import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import omProfile from "@/assets/om-real-profile.jpg";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-slide-up text-center lg:text-left">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-lg md:text-xl text-accent font-medium">
                <Sparkles className="w-5 h-5" />
                Hello! I Am Om Dubey
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="hero-text-gradient glow-text">A Jack of all Trades</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl lg:text-3xl text-accent font-light">
                Product, Growth, Business
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Product Manager, Growth Specialist and Business professional focused on creating smart user experiences and optimizing business functions.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                variant="default" 
                size="lg"
                onClick={scrollToAbout}
                className="group glow-effect hover:shadow-strong transition-glow bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Know More About Me
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl scale-110" />
              
              {/* Profile image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-strong">
                <img 
                  src={omProfile} 
                  alt="Om Dubey - Product Manager"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-accent/30 rounded-2xl p-3 shadow-medium backdrop-blur-sm">
                <div className="text-sm font-medium text-accent">Founder's Office</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};