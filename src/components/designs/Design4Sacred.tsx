import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { MapPin, ArrowRight, Users, Heart, Send, Video, BookOpen, Cross } from "lucide-react";
import heroSacred from "@/assets/hero-sacred.jpg";

interface Design4Props {
  onSelect: () => void;
}

export const Design4Sacred = ({ onSelect }: Design4Props) => {
  const navItems = ["Home", "About Us", "Events", "Contact Us"];

  return (
    <div className="min-h-screen design-sacred bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent/20">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <TreeLogo className="w-12 h-14" />
            <div className="hidden sm:block">
              <span className="font-sacred-display text-xl font-medium text-foreground tracking-wider">JESUS FIRST</span>
              <span className="block text-xs text-muted-foreground font-sacred-body tracking-widest uppercase">Christian Ministries</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-sacred-body text-sm text-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <Button variant="sacred">
            Join Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroSacred} 
            alt="Sacred cathedral interior with stained glass" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl space-y-8 animate-fade-up">
            {/* Decorative line */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-accent"></div>
              <span className="font-sacred-body text-xs tracking-[0.3em] uppercase text-accent font-medium">Timeless · Reverent · Scripture-Anchored</span>
            </div>
            
            <h1 className="font-sacred-display text-5xl md:text-7xl font-medium text-foreground leading-[1.1] tracking-wide">
              Welcome to the<br />
              <span className="text-primary">JFCM Dubai Family</span>
            </h1>
            
            <p className="font-sacred-body text-lg text-muted-foreground max-w-lg leading-relaxed italic">
              "But seek first his kingdom and his righteousness, and all these things will be given to you as well."
            </p>
            <p className="font-sacred-body text-sm text-primary">— Matthew 6:33</p>
            
            <p className="font-sacred-body text-base text-foreground/80 max-w-lg leading-relaxed">
              A non-profit, bible-based, church-planting organization. We honor no one else but the Lord Jesus Christ. Founded in 1987 in Riyadh, Saudi Arabia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="sacred" className="text-base px-8 py-6">
                <BookOpen className="w-5 h-5" />
                Plan Your Visit
              </Button>
              <Button variant="sacredOutline" className="text-base px-8 py-6">
                <Video className="w-5 h-5" />
                Join via Zoom
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Cross Element */}
        <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="text-right">
            <p className="font-sacred-display text-lg text-foreground tracking-wider">TO WIN · TO TRAIN · TO SEND</p>
            <p className="font-sacred-body text-sm text-muted-foreground">Our Sacred Mission</p>
          </div>
          <div className="w-px h-16 bg-accent/50"></div>
          <Cross className="w-10 h-10 text-accent" strokeWidth={1} />
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-8">
            <div className="hidden md:block h-px w-24 bg-accent/50"></div>
            <div className="text-center">
              <p className="font-sacred-body text-xl md:text-2xl italic leading-relaxed max-w-4xl">
                "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you."
              </p>
              <p className="font-sacred-display text-sm mt-4 tracking-widest text-accent">— MATTHEW 28:19-20</p>
            </div>
            <div className="hidden md:block h-px w-24 bg-accent/50"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-accent"></div>
              <span className="font-sacred-body text-sm tracking-[0.3em] uppercase text-accent">Our Sacred Calling</span>
              <div className="h-px w-16 bg-accent"></div>
            </div>
            <h2 className="font-sacred-display text-4xl md:text-5xl font-medium text-foreground tracking-wide mb-4">
              Fulfilling the Great Commission
            </h2>
            <p className="font-sacred-body text-muted-foreground max-w-2xl mx-auto">
              Founded in June 1987 in Riyadh, Saudi Arabia. Now operating within Dubai's religious tolerance, serving expatriate communities with reverence and devotion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Heart, 
                title: "Win", 
                verse: "Matthew 28:19",
                desc: "Reaching expatriate communities with the transforming power of the Gospel, fulfilling Christ's command to make disciples of all nations." 
              },
              { 
                icon: Users, 
                title: "Train", 
                verse: "Matthew 28:20",
                desc: "Teaching believers to obey everything Christ commanded through discipleship, Scripture study, and faithful mentorship." 
              },
              { 
                icon: Send, 
                title: "Send", 
                verse: "Acts 1:8",
                desc: "Commissioning believers as witnesses to the ends of the earth, starting from their workplaces across the UAE." 
              }
            ].map((item, i) => (
              <div 
                key={item.title}
                className="relative p-10 bg-card border border-accent/20 group hover:border-accent/50 transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/40"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40"></div>
                
                <div className="text-center">
                  <item.icon className="w-10 h-10 text-accent mx-auto mb-6" strokeWidth={1.5} />
                  <h3 className="font-sacred-display text-2xl font-medium text-foreground mb-2 tracking-wider">{item.title}</h3>
                  <p className="font-sacred-body text-sm text-accent mb-4 italic">{item.verse}</p>
                  <p className="font-sacred-body text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TreeLogo className="w-16 h-20 mx-auto mb-8 text-primary" />
            <h2 className="font-sacred-display text-4xl md:text-5xl font-medium text-foreground tracking-wide mb-6">
              Join Us in Worship
            </h2>
            <p className="font-sacred-body text-lg text-muted-foreground mb-4">
              Physical attendance and online participation via Zoom available for those who cannot attend in person.
            </p>
            <p className="font-sacred-body text-foreground/80 italic mb-10">
              "And surely I am with you always, to the very end of the age."
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {["Dubai", "Ras Al Khaimah", "Abu Dhabi", "Al Ain"].map((location) => (
                <div key={location} className="bg-card border border-accent/20 p-6 text-center">
                  <MapPin className="w-6 h-6 text-accent mx-auto mb-3" />
                  <p className="font-sacred-display text-lg text-foreground tracking-wide">{location}</p>
                  <p className="font-sacred-body text-xs text-muted-foreground uppercase tracking-widest">United Arab Emirates</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="sacred">
                Plan Your Visit
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="sacredOutline">
                <Video className="w-5 h-5" />
                Join Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <TreeLogo className="w-14 h-16 text-accent mb-6" />
            <p className="font-sacred-display text-2xl tracking-wider mb-2">JESUS FIRST CHRISTIAN MINISTRIES</p>
            <p className="font-sacred-body text-sm text-accent tracking-widest mb-2">TO WIN · TO TRAIN · TO SEND</p>
            <p className="font-sacred-body text-xs text-primary-foreground/60 mb-8">Established 1987 · Riyadh, Saudi Arabia</p>
            <div className="h-px w-32 bg-accent/30 mb-8"></div>
            <div className="flex items-center gap-8 font-sacred-body text-sm">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Selection Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={onSelect} variant="sacred" className="shadow-2xl text-base px-8 py-6">
          Choose This Design
        </Button>
      </div>
    </div>
  );
};
