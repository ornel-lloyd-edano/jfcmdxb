import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { Calendar, MapPin, Clock, ArrowRight, Users, Heart, Send, Play } from "lucide-react";
import heroWarm from "@/assets/hero-warm.jpg";

interface Design2Props {
  onSelect: () => void;
}

export const Design2Warm = ({ onSelect }: Design2Props) => {
  const navItems = ["Home", "About Us", "Events", "Contact Us"];

  return (
    <div className="min-h-screen design-warm bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <TreeLogo className="w-12 h-14" />
            <div className="hidden sm:block">
              <span className="font-elegant text-2xl font-medium text-foreground block leading-tight">Jesus First</span>
              <span className="text-xs text-muted-foreground font-body tracking-widest uppercase">Christian Ministries</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-body text-sm text-foreground hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <Button variant="warm">
            Visit Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroWarm} 
            alt="Church community gathering" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl space-y-8 animate-fade-up">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium">
              Pentecostal · Filipino · Spirit-Filled
            </p>
            <h1 className="font-elegant text-5xl md:text-7xl font-medium text-foreground leading-[1.1]">
              Sama-sama sa<br />
              <span className="italic text-primary">Pananampalataya</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-lg leading-relaxed">
              A warm, Spirit-filled home for Filipino overseas workers in Dubai and Ras Al Khaimah. Experience powerful worship, kababayan fellowship, and grow deeper in Christ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="warm" className="text-base px-8 py-6">
                Plan Your Visit
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="warmOutline" className="text-base px-8 py-6">
                <Play className="w-5 h-5" />
                Watch Sunday Service
              </Button>
            </div>
          </div>
        </div>

        {/* Service Info Card */}
        <div className="absolute bottom-12 right-12 hidden lg:block animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-sm border border-border">
            <h3 className="font-elegant text-2xl font-medium text-foreground mb-4">Samahan Ninyo Kami</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body">Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body">Ras Al Khaimah, UAE</span>
              </div>
            </div>
            <Button variant="warm" className="w-full">
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">TO WIN · TO TRAIN · TO SEND</p>
            <h2 className="font-elegant text-4xl md:text-5xl font-medium text-foreground mb-6">Rooted in Purpose</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: Heart, 
                number: "01", 
                title: "Win", 
                desc: "Reaching Filipino OFWs and their families with the transforming power of the Holy Spirit and the love of Jesus Christ." 
              },
              { 
                icon: Users, 
                number: "02", 
                title: "Train", 
                desc: "Nurturing spiritual growth through Spirit-led discipleship, bilingual worship, and genuine kababayan fellowship." 
              },
              { 
                icon: Send, 
                number: "03", 
                title: "Send", 
                desc: "Commissioning OFWs as ambassadors of Christ to their workplaces across the UAE and back home to the Philippines." 
              }
            ].map((item, i) => (
              <div 
                key={item.title}
                className="relative p-8 group animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="absolute top-0 left-8 font-elegant text-8xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {item.number}
                </span>
                <div className="relative pt-12">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-elegant text-3xl font-medium text-foreground mb-4">{item.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-primary rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <TreeLogo className="w-16 h-20 mb-8 text-primary-foreground opacity-80" />
                <h2 className="font-elegant text-4xl md:text-5xl font-medium text-primary-foreground mb-6">
                  Maligayang Pagdating<br />sa Aming Pamilya
                </h2>
                <p className="font-body text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                  Whether you're new to Dubai or Ras Al Khaimah, seeking a Spirit-filled church, or looking for kababayan fellowship, you belong here.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="heroLight">
                    Plan Your Visit
                  </Button>
                  <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={heroWarm} 
                  alt="Church community" 
                  className="w-full h-full object-cover"
                />
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
              <TreeLogo className="w-14 h-16 text-primary-foreground" />
              <div>
                <p className="font-elegant text-2xl">Jesus First Christian Ministries</p>
                <p className="font-body text-sm opacity-60 tracking-widest">TO WIN · TO TRAIN · TO SEND</p>
              </div>
            </div>
            <div className="flex items-center gap-8 font-body text-sm">
              {navItems.map((item) => (
                <a key={item} href="#" className="opacity-70 hover:opacity-100 transition-opacity">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Selection Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={onSelect} variant="warm" className="shadow-2xl text-base px-8 py-6">
          Choose This Design
        </Button>
      </div>
    </div>
  );
};
