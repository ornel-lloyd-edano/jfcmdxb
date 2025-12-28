import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { MapPin, ArrowRight, Users, Heart, Send, Video, Globe, Target, Compass } from "lucide-react";
import heroMission from "@/assets/hero-mission.jpg";

interface Design5Props {
  onSelect: () => void;
}

export const Design5Mission = ({ onSelect }: Design5Props) => {
  const navItems = ["Home", "About Us", "Events", "Contact Us"];

  return (
    <div className="min-h-screen design-mission bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TreeLogo className="w-10 h-12" />
            <div>
              <span className="font-mission text-lg font-bold text-foreground tracking-tight">JESUS FIRST</span>
              <span className="block text-[10px] text-muted-foreground font-mission-body tracking-widest uppercase">Christian Ministries</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-mission-body text-sm text-foreground hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <Button variant="mission">
            Join the Mission
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroMission} 
            alt="Community outreach and mission work" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl space-y-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full">
              <Globe className="w-4 h-4 text-accent" />
              <span className="font-mission-body text-sm text-foreground font-medium">Non-Denominational · Bible-Based · Church-Planting</span>
            </div>
            
            <h1 className="font-mission text-5xl md:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight">
              Welcome to the<br />
              <span className="text-primary">JFCM Dubai Family</span>
            </h1>
            
            <p className="font-mission-body text-xl text-foreground/80 max-w-2xl leading-relaxed">
              A non-profit, bible-based, church-planting organization. We honor no one else but the Lord Jesus Christ.
            </p>

            {/* Mission Statement Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: Target, text: "TO WIN" },
                { icon: Users, text: "TO TRAIN" },
                { icon: Compass, text: "TO SEND" }
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="font-mission text-sm font-bold text-primary">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="mission" className="text-base px-8 py-6">
                Join the Mission
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="missionOutline" className="text-base px-8 py-6">
                <Video className="w-5 h-5" />
                Join via Zoom
              </Button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
          <div className="w-8 h-1 bg-primary/30 rounded-full"></div>
          <div className="w-8 h-1 bg-primary/30 rounded-full"></div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-mission text-sm font-bold tracking-wider text-accent">OUR CALLING</p>
                <p className="font-mission-body text-lg text-primary-foreground/90">"Seek first his kingdom and his righteousness"</p>
              </div>
            </div>
            <p className="font-mission-body text-sm text-primary-foreground/60">— Matthew 6:33</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
                <span className="font-mission-body text-xs text-accent font-semibold uppercase tracking-wider">Since 1987</span>
              </div>
              <h2 className="font-mission text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                Fulfilling the Great Commission
              </h2>
              <p className="font-mission-body text-lg text-muted-foreground leading-relaxed">
                Founded in June 1987 in Riyadh, Saudi Arabia. Now operating within Dubai's religious tolerance, serving expatriate communities across the UAE.
              </p>
              <blockquote className="border-l-4 border-accent pl-6 py-2">
                <p className="font-mission-body text-foreground italic">
                  "Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
                </p>
                <cite className="font-mission-body text-sm text-accent mt-2 block">— Matthew 28:19</cite>
              </blockquote>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 gap-4">
              {[
                { 
                  icon: Heart, 
                  title: "Win", 
                  desc: "Reaching expatriate communities with the Gospel, making disciples of all nations as Christ commanded.",
                  color: "bg-red-500/10 text-red-600"
                },
                { 
                  icon: Users, 
                  title: "Train", 
                  desc: "Teaching believers to obey everything Christ commanded through discipleship and Scripture study.",
                  color: "bg-blue-500/10 text-blue-600"
                },
                { 
                  icon: Send, 
                  title: "Send", 
                  desc: "Commissioning believers as witnesses across the UAE and to the ends of the earth.",
                  color: "bg-accent/10 text-accent"
                }
              ].map((item, i) => (
                <div 
                  key={item.title}
                  className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group animate-fade-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-mission text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="font-mission-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 self-center" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations CTA */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="bg-card border border-border rounded-2xl p-12 md:p-16">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <TreeLogo className="w-6 h-7 text-primary-foreground" />
                  </div>
                  <span className="font-mission text-sm font-bold text-primary uppercase tracking-wider">Join the Movement</span>
                </div>
                <h2 className="font-mission text-4xl font-extrabold text-foreground tracking-tight">
                  Join Us This Sunday
                </h2>
                <p className="font-mission-body text-lg text-muted-foreground">
                  Physical attendance and online participation via Zoom available for those who cannot attend in person.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="mission">
                    Plan Your Visit
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="missionOutline">
                    <Video className="w-5 h-5" />
                    Join Online
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {["Dubai", "Ras Al Khaimah", "Abu Dhabi", "Al Ain"].map((location, i) => (
                  <div 
                    key={location} 
                    className="bg-background border border-border p-6 rounded-xl text-center hover:border-primary/50 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-mission font-bold text-foreground">{location}</p>
                    <p className="font-mission-body text-xs text-muted-foreground uppercase tracking-wider">UAE</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <TreeLogo className="w-12 h-14 text-primary-foreground" />
              <div>
                <p className="font-mission text-xl font-bold">Jesus First Christian Ministries</p>
                <p className="font-mission-body text-sm text-primary-foreground/60">TO WIN · TO TRAIN · TO SEND</p>
                <p className="font-mission-body text-xs text-primary-foreground/40 mt-1">Established 1987 · Riyadh, Saudi Arabia</p>
              </div>
            </div>
            <div className="flex items-center gap-8 font-mission-body text-sm">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-primary-foreground/60 hover:text-accent transition-colors font-medium">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Selection Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={onSelect} variant="mission" className="shadow-2xl text-base px-8 py-6">
          Choose This Design
        </Button>
      </div>
    </div>
  );
};
