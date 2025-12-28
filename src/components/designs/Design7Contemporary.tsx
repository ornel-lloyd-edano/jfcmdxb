import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { MapPin, ArrowRight, Users, Heart, Send, Video, Sparkles } from "lucide-react";
import heroContemporary from "@/assets/hero-contemporary.jpg";

interface Design7Props {
  onSelect: () => void;
}

export const Design7Contemporary = ({ onSelect }: Design7Props) => {
  const navItems = ["Home", "About Us", "Events", "Contact Us"];

  return (
    <div className="min-h-screen design-contemporary bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TreeLogo className="w-10 h-12" />
            <div>
              <span className="font-contemporary text-lg font-bold text-foreground">JFCM</span>
              <span className="block text-[10px] text-muted-foreground font-contemporary tracking-widest">DUBAI</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-contemporary text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <Button variant="contemporary">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroContemporary} 
            alt="Contemporary worship space with modern lighting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/20"></div>
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-contemporary text-sm text-foreground">Non-Denominational · Bible-Based · Church-Planting</span>
            </div>
            
            <h1 className="font-contemporary text-5xl md:text-7xl font-bold text-foreground leading-[1.05]">
              Welcome to the
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">JFCM Dubai Family</span>
            </h1>
            
            <p className="font-contemporary text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A modern community of faith, honoring Jesus Christ through contemporary worship and timeless truth. Founded 1987.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["TO WIN", "TO TRAIN", "TO SEND"].map((text) => (
                <div key={text} className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 px-4 py-2 rounded-full">
                  <span className="font-contemporary text-sm font-semibold text-foreground">{text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="contemporary" className="text-base px-8 py-6">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="contemporaryOutline" className="text-base px-8 py-6">
                <Video className="w-5 h-5" />
                Join via Zoom
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="font-contemporary text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            "Seek first his kingdom and his righteousness, and all these things will be given to you as well."
          </p>
          <p className="font-contemporary text-sm mt-4 opacity-80">Matthew 6:33</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-contemporary text-sm tracking-widest uppercase text-primary">Our Mission</span>
            <h2 className="font-contemporary text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Fulfilling the Great Commission
            </h2>
            <p className="font-contemporary text-muted-foreground max-w-2xl mx-auto">
              Operating within Dubai's religious tolerance, serving expatriate communities with innovation and purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Heart, 
                title: "Win", 
                gradient: "from-rose-500/20 to-pink-500/20",
                desc: "Reaching expatriate communities with the Gospel, making disciples of all nations as Christ commanded." 
              },
              { 
                icon: Users, 
                title: "Train", 
                gradient: "from-blue-500/20 to-indigo-500/20",
                desc: "Teaching believers through discipleship, Scripture study, and authentic community." 
              },
              { 
                icon: Send, 
                title: "Send", 
                gradient: "from-emerald-500/20 to-teal-500/20",
                desc: "Commissioning believers as witnesses across the UAE and to the ends of the earth." 
              }
            ].map((item, i) => (
              <div 
                key={item.title}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${item.gradient} border border-border/50 group hover:scale-[1.02] transition-all duration-300 animate-fade-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-contemporary text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="font-contemporary text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Great Commission Quote */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="font-contemporary text-lg md:text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
            "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you."
          </p>
          <p className="font-contemporary text-sm text-primary mt-6">— Matthew 28:19-20</p>
        </div>
      </section>

      {/* Locations CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-border rounded-3xl p-12 md:p-16">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <TreeLogo className="w-10 h-12 text-primary" />
                  <span className="font-contemporary text-sm font-bold text-primary uppercase tracking-wider">Join Us</span>
                </div>
                <h2 className="font-contemporary text-4xl font-bold text-foreground">
                  Experience Worship
                </h2>
                <p className="font-contemporary text-lg text-muted-foreground">
                  Physical attendance and online participation via Zoom available for those who cannot attend in person.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="contemporary">
                    Find a Location
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="contemporaryOutline">
                    <Video className="w-5 h-5" />
                    Join Online
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {["Dubai", "Ras Al Khaimah", "Abu Dhabi", "Al Ain"].map((location) => (
                  <div 
                    key={location} 
                    className="bg-background/80 backdrop-blur-sm border border-border p-6 rounded-2xl text-center hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-contemporary font-bold text-foreground">{location}</p>
                    <p className="font-contemporary text-xs text-muted-foreground uppercase tracking-wider">UAE</p>
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
                <p className="font-contemporary text-xl font-bold">Jesus First Christian Ministries</p>
                <p className="font-contemporary text-sm text-primary-foreground/60">TO WIN · TO TRAIN · TO SEND</p>
                <p className="font-contemporary text-xs text-primary-foreground/40 mt-1">Established 1987 · Riyadh, Saudi Arabia</p>
              </div>
            </div>
            <div className="flex items-center gap-8 font-contemporary text-sm">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Selection Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={onSelect} variant="contemporary" className="shadow-2xl text-base px-8 py-6">
          Choose This Design
        </Button>
      </div>
    </div>
  );
};