import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { MapPin, ArrowRight, Users, Heart, Send, Video, BookOpen } from "lucide-react";
import heroHeritage from "@/assets/hero-heritage.jpg";

interface Design6Props {
  onSelect: () => void;
}

export const Design6Heritage = ({ onSelect }: Design6Props) => {
  const navItems = ["Home", "About Us", "Events", "Contact Us"];

  return (
    <div className="min-h-screen design-heritage bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <TreeLogo className="w-12 h-14" />
            <div className="hidden sm:block">
              <span className="font-heritage text-xl font-semibold text-foreground">Jesus First</span>
              <span className="block text-xs text-muted-foreground font-heritage-body tracking-wide uppercase">Christian Ministries</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-heritage-body text-sm text-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <Button variant="heritage">
            Join Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroHeritage} 
            alt="Traditional church sanctuary with candlelight" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl space-y-8 animate-fade-up">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-accent"></div>
              <span className="font-heritage-body text-sm tracking-widest uppercase text-accent">Est. 1987 · Riyadh, Saudi Arabia</span>
            </div>
            
            <h1 className="font-heritage text-5xl md:text-7xl font-semibold text-foreground leading-[1.15]">
              Welcome to the<br />
              <span className="text-primary italic">JFCM Dubai Family</span>
            </h1>
            
            <p className="font-heritage-body text-lg text-muted-foreground max-w-lg leading-relaxed">
              A non-profit, bible-based, church-planting organization rooted in tradition and heritage. We honor no one else but the Lord Jesus Christ.
            </p>

            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 max-w-md">
              <p className="font-heritage text-lg text-foreground italic leading-relaxed">
                "But seek first his kingdom and his righteousness, and all these things will be given to you as well."
              </p>
              <p className="font-heritage-body text-sm text-primary mt-3">— Matthew 6:33</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="heritage" className="text-base px-8 py-6">
                <BookOpen className="w-5 h-5" />
                Plan Your Visit
              </Button>
              <Button variant="heritageOutline" className="text-base px-8 py-6">
                <Video className="w-5 h-5" />
                Join via Zoom
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {["TO WIN", "TO TRAIN", "TO SEND"].map((text, i) => (
              <div key={text} className="flex items-center gap-4">
                <span className="font-heritage text-xl text-primary-foreground tracking-wider">{text}</span>
                {i < 2 && <span className="text-accent text-2xl">✦</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-heritage-body text-sm tracking-widest uppercase text-primary">Our Sacred Mission</span>
            <h2 className="font-heritage text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
              Fulfilling the Great Commission
            </h2>
            <p className="font-heritage-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Founded in June 1987 in Riyadh, Saudi Arabia. Operating within Dubai's religious tolerance, serving expatriate communities with timeless faith and devotion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Heart, 
                title: "Win", 
                desc: "Reaching expatriate communities with the transforming power of the Gospel, making disciples of all nations as Christ commanded." 
              },
              { 
                icon: Users, 
                title: "Train", 
                desc: "Teaching believers to obey everything Christ commanded through discipleship, Scripture study, and faithful mentorship." 
              },
              { 
                icon: Send, 
                title: "Send", 
                desc: "Commissioning believers as witnesses across the UAE and to the ends of the earth, continuing the apostolic tradition." 
              }
            ].map((item, i) => (
              <div 
                key={item.title}
                className="bg-card border border-border p-10 text-center group hover:shadow-xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heritage text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="font-heritage-body text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6 text-center">
          <TreeLogo className="w-14 h-16 mx-auto mb-8 text-primary" />
          <p className="font-heritage text-2xl md:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed italic">
            "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you."
          </p>
          <p className="font-heritage-body text-sm text-primary mt-6 tracking-widest">— MATTHEW 28:19-20</p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heritage text-4xl font-semibold text-foreground mb-6">
              Join Us in Worship
            </h2>
            <p className="font-heritage-body text-lg text-muted-foreground mb-4">
              Physical attendance and online participation via Zoom available.
            </p>
            <p className="font-heritage text-foreground italic mb-12">
              "And surely I am with you always, to the very end of the age."
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {["Dubai", "Ras Al Khaimah", "Abu Dhabi", "Al Ain"].map((location) => (
                <div key={location} className="bg-card border border-border p-6 text-center hover:shadow-lg transition-shadow">
                  <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="font-heritage text-lg text-foreground">{location}</p>
                  <p className="font-heritage-body text-xs text-muted-foreground uppercase tracking-widest">UAE</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="heritage">
                Plan Your Visit
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heritageOutline">
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
            <p className="font-heritage text-2xl mb-2">Jesus First Christian Ministries</p>
            <p className="font-heritage-body text-sm text-accent tracking-widest mb-2">TO WIN · TO TRAIN · TO SEND</p>
            <p className="font-heritage-body text-xs text-primary-foreground/60 mb-8">Established 1987 · Riyadh, Saudi Arabia</p>
            <div className="h-px w-32 bg-accent/30 mb-8"></div>
            <div className="flex items-center gap-8 font-heritage-body text-sm">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Selection Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={onSelect} variant="heritage" className="shadow-2xl text-base px-8 py-6">
          Choose This Design
        </Button>
      </div>
    </div>
  );
};