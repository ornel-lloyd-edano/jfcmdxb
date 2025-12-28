import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { Calendar, MapPin, Clock, ArrowRight, Users, Heart, Send, Menu } from "lucide-react";
import heroBold from "@/assets/hero-bold.jpg";

interface Design3Props {
  onSelect: () => void;
}

export const Design3Bold = ({ onSelect }: Design3Props) => {
  const navItems = ["Home", "About Us", "Events", "Contact Us"];

  return (
    <div className="min-h-screen design-bold bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <TreeLogo className="w-12 h-14 text-primary" />
            <div>
              <span className="font-display text-xl font-bold text-foreground tracking-wide">JESUS FIRST</span>
              <span className="block text-[10px] text-muted-foreground font-body tracking-[0.4em] uppercase">Christian Ministries</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <Button variant="bold">
            Join Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBold} 
            alt="Worship service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center pt-20">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-primary"></div>
              <span className="font-body text-xs tracking-[0.4em] uppercase text-primary font-semibold">Pentecostal · Filipino · UAE</span>
              <div className="h-px w-16 bg-primary"></div>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none tracking-tight">
              JESUS FIRST
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-muted-foreground tracking-wide">
              A SPIRIT-FILLED HOME FOR FILIPINOS IN DUBAI & RAK
            </p>
            
            {/* Mission Statement */}
            <div className="flex items-center justify-center gap-8 pt-8">
              {["TO WIN", "TO TRAIN", "TO SEND"].map((text, i) => (
                <div key={text} className="flex items-center gap-4">
                  <span className="font-display text-lg md:text-xl font-bold text-primary">{text}</span>
                  {i < 2 && <span className="text-muted-foreground">•</span>}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button variant="bold" className="min-w-[200px]">
                Plan Your Visit
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="boldOutline" className="min-w-[200px]">
                Watch Live
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary font-semibold">Our Mission</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
              CALLED TO SERVE OFWs
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {[
              { 
                icon: Heart, 
                title: "WIN", 
                desc: "Reaching Filipino overseas workers with the bold proclamation of the Gospel and the transforming power of the Holy Spirit." 
              },
              { 
                icon: Users, 
                title: "TRAIN", 
                desc: "Building Spirit-filled disciples through powerful worship, biblical teaching, and genuine kababayan accountability." 
              },
              { 
                icon: Send, 
                title: "SEND", 
                desc: "Deploying Filipino believers as kingdom ambassadors in their workplaces across the UAE and back home to the Philippines." 
              }
            ].map((item, i) => (
              <div 
                key={item.title}
                className="relative p-12 border border-border group hover:bg-secondary transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <item.icon className="w-10 h-10 text-primary mb-8" strokeWidth={1.5} />
                <h3 className="font-display text-3xl font-bold text-foreground mb-4 tracking-wide">{item.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-foreground rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <TreeLogo className="w-20 h-24 mx-auto mb-8 text-primary-foreground opacity-90" />
            <h2 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-8 tracking-tight">
              JOIN THE MOVEMENT
            </h2>
            <p className="font-body text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
              Be part of a Spirit-filled Filipino community. Experience powerful Pentecostal worship, biblical teaching, and kababayan fellowship.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 border border-primary-foreground/20">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="font-body text-sm text-primary-foreground/60 uppercase tracking-widest mb-2">Dubai</p>
                <p className="font-display text-2xl font-bold text-primary-foreground">United Arab Emirates</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 border border-primary-foreground/20">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="font-body text-sm text-primary-foreground/60 uppercase tracking-widest mb-2">Ras Al Khaimah</p>
                <p className="font-display text-2xl font-bold text-primary-foreground">United Arab Emirates</p>
              </div>
            </div>
            
            <Button variant="heroLight" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Plan Your Visit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-16 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <TreeLogo className="w-16 h-20 text-primary mb-6" />
            <p className="font-display text-2xl font-bold text-foreground tracking-wide mb-2">JESUS FIRST CHRISTIAN MINISTRIES</p>
            <p className="font-body text-xs text-muted-foreground tracking-[0.3em] mb-8">TO WIN · TO TRAIN · TO SEND</p>
            <div className="flex items-center gap-8 font-body text-xs tracking-widest">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-muted-foreground hover:text-primary transition-colors uppercase">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Selection Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={onSelect} variant="bold" className="shadow-2xl">
          Choose This Design
        </Button>
      </div>
    </div>
  );
};
