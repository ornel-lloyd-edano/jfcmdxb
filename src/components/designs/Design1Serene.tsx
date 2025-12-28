import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { MapPin, ArrowRight, Users, Heart, Send, Video } from "lucide-react";
import heroSerene from "@/assets/hero-serene.jpg";

interface Design1Props {
  onSelect: () => void;
}

export const Design1Serene = ({ onSelect }: Design1Props) => {
  const navItems = ["Home", "About Us", "Events", "Contact Us"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TreeLogo className="w-10 h-12" />
            <div>
              <span className="font-display text-xl font-semibold text-foreground">Jesus First</span>
              <span className="hidden md:block text-xs text-muted-foreground font-body">Christian Ministries</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <Button variant="hero" className="hidden md:flex">
            Join Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="font-body text-sm text-muted-foreground">Non-Denominational · Bible-Based · Church-Planting</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Welcome to the <br />
                <span className="text-primary">JFCM Dubai Family</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed">
                A non-profit, bible-based, church-planting organization. We honor no one else but the Lord Jesus Christ. Founded in 1987 in Riyadh, Saudi Arabia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero">
                  Plan Your Visit
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline">
                  <Video className="w-5 h-5" />
                  Join via Zoom
                </Button>
              </div>
              {/* Mission Statement */}
              <div className="flex items-center gap-6 pt-4">
                {["TO WIN", "TO TRAIN", "TO SEND"].map((text, i) => (
                  <div key={text} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">{i + 1}</span>
                    </div>
                    <span className="font-body text-sm font-semibold text-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl"></div>
              <img 
                src={heroSerene} 
                alt="Church community worship" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Sunday Worship Service</p>
                    <p className="font-display text-xl font-semibold text-foreground">In-Person & Online</p>
                  </div>
                  <Button variant="default" size="sm">
                    Find Location
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-lg md:text-xl italic text-foreground max-w-3xl mx-auto">
            "But seek first his kingdom and his righteousness, and all these things will be given to you as well."
          </p>
          <p className="font-body text-sm text-muted-foreground mt-4">— Matthew 6:33</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Fulfilling the Great Commission within Dubai's religious tolerance, serving expatriate communities with the love of Christ.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Win", desc: "Reaching expatriate communities with the transforming power of the Gospel and the love of Christ, fulfilling the Great Commission." },
              { icon: Users, title: "Train", desc: "Discipling believers through Bible study, worship, and mentorship—making disciples of all nations as commanded in Matthew 28:19-20." },
              { icon: Send, title: "Send", desc: "Equipping believers to be ambassadors of Christ in their workplaces and communities across the UAE and beyond." }
            ].map((item, i) => (
              <div 
                key={item.title}
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground">
            <TreeLogo variant="white" className="w-16 h-20 mx-auto mb-6 opacity-80" />
            <h2 className="font-display text-4xl font-bold mb-4">Join Us This Sunday</h2>
            <p className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Physical attendance and online participation via Zoom available for those who can't attend in person.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 flex-wrap">
              {["Dubai", "Ras Al Khaimah", "Abu Dhabi", "Al Ain"].map((location) => (
                <div key={location} className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span className="font-body text-lg">{location}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="heroLight">
                Plan Your Visit
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Video className="w-5 h-5" />
                Join Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center">
          <TreeLogo variant="white" className="w-12 h-14 mx-auto mb-4" />
          <p className="font-display text-xl mb-2">Jesus First Christian Ministries</p>
          <p className="font-body text-sm opacity-70 mb-2">TO WIN. TO TRAIN. TO SEND.</p>
          <p className="font-body text-xs opacity-50 mb-6">Established 1987 · Riyadh, Saudi Arabia</p>
          <div className="flex items-center justify-center gap-6 text-sm font-body opacity-70">
            {navItems.map((item) => (
              <a key={item} href="#" className="hover:opacity-100 transition-opacity">{item}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Selection Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={onSelect} variant="hero" className="shadow-2xl">
          Choose This Design
        </Button>
      </div>
    </div>
  );
};
