import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { Calendar, MapPin, Clock, ArrowRight, Users, Heart, Send } from "lucide-react";
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
                <span className="font-body text-sm text-muted-foreground">A Pentecostal Church for Filipinos in the UAE</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Your Home <br />
                <span className="text-primary">Away From Home</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed">
                A Spirit-filled Filipino community in Dubai and Ras Al Khaimah. Experience powerful worship, genuine kababayan fellowship, and grow deeper in your faith journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero">
                  Plan Your Visit
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline">
                  Watch Online
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
                    <p className="font-display text-xl font-semibold text-foreground">Dubai & Ras Al Khaimah</p>
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

      {/* Values Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Serving the Filipino OFW community in the UAE with Spirit-filled worship, biblical teaching, and genuine fellowship.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Win", desc: "Reaching Filipino overseas workers and families with the transforming power of the Gospel and the love of Christ." },
              { icon: Users, title: "Train", desc: "Discipling believers through Spirit-led Bible study, Tagalog and English worship, and mentorship programs." },
              { icon: Send, title: "Send", desc: "Equipping OFWs to be ambassadors of Christ in their workplaces and communities across the UAE and beyond." }
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
            <TreeLogo className="w-16 h-20 mx-auto mb-6 text-primary-foreground opacity-80" />
            <h2 className="font-display text-4xl font-bold mb-8">Join Us This Sunday</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <span className="font-body text-lg">Dubai</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <span className="font-body text-lg">Ras Al Khaimah</span>
              </div>
            </div>
            <Button variant="heroLight">
              Plan Your Visit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center">
          <TreeLogo className="w-12 h-14 mx-auto mb-4 text-primary-foreground" />
          <p className="font-display text-xl mb-2">Jesus First Christian Ministries</p>
          <p className="font-body text-sm opacity-70 mb-6">TO WIN. TO TRAIN. TO SEND.</p>
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
