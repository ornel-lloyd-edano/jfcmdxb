import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { MapPin, ArrowRight, Users, Heart, Send, Video, Sun, Smile } from "lucide-react";
import heroJoyful from "@/assets/hero-joyful.jpg";

interface Design8Props {
  onSelect: () => void;
}

export const Design8Joyful = ({ onSelect }: Design8Props) => {
  const navItems = ["Home", "About Us", "Events", "Contact Us"];

  return (
    <div className="min-h-screen design-joyful bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TreeLogo className="w-10 h-12" />
            <div>
              <span className="font-joyful text-xl font-bold text-foreground">JFCM Dubai</span>
              <span className="block text-[10px] text-primary font-joyful tracking-wider">Welcome Home!</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-joyful text-sm text-foreground hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <Button variant="joyful">
            Join the Family!
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroJoyful} 
            alt="Joyful worship celebration with congregation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2 rounded-full shadow-lg">
              <Sun className="w-5 h-5" />
              <span className="font-joyful text-sm font-bold">Non-Denominational · Bible-Based · Church-Planting</span>
            </div>
            
            <h1 className="font-joyful text-5xl md:text-7xl font-extrabold text-foreground leading-[1.05]">
              Welcome to the
              <span className="block text-primary">JFCM Dubai Family!</span>
            </h1>
            
            <p className="font-joyful text-xl text-foreground/80 max-w-2xl leading-relaxed">
              A joyful community celebrating God's love! We honor no one else but the Lord Jesus Christ. Come as you are!
            </p>

            {/* Mission Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: Heart, text: "TO WIN", color: "bg-rose-500" },
                { icon: Users, text: "TO TRAIN", color: "bg-blue-500" },
                { icon: Send, text: "TO SEND", color: "bg-emerald-500" }
              ].map((item) => (
                <div key={item.text} className={`flex items-center gap-2 ${item.color} text-white px-4 py-2 rounded-full shadow-lg`}>
                  <item.icon className="w-4 h-4" />
                  <span className="font-joyful text-sm font-bold">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="joyful" className="text-base px-8 py-6">
                <Smile className="w-5 h-5" />
                Visit Us This Sunday!
              </Button>
              <Button variant="joyfulOutline" className="text-base px-8 py-6">
                <Video className="w-5 h-5" />
                Join via Zoom
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="py-10 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="font-joyful text-xl md:text-2xl font-bold max-w-3xl mx-auto">
            "Seek first his kingdom and his righteousness, and all these things will be given to you as well!"
          </p>
          <p className="font-joyful text-sm mt-3 opacity-80">— Matthew 6:33</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-joyful text-sm tracking-widest uppercase text-primary font-bold">Since 1987</span>
            <h2 className="font-joyful text-4xl md:text-5xl font-extrabold text-foreground mt-4 mb-6">
              A Family of Faith & Joy!
            </h2>
            <p className="font-joyful text-lg text-muted-foreground leading-relaxed">
              Founded in June 1987 in Riyadh, Saudi Arabia. Now serving within Dubai's religious tolerance, bringing joy and hope to expatriate communities across the UAE!
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-joyful text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Our Joyful Mission
            </h2>
            <p className="font-joyful text-muted-foreground max-w-2xl mx-auto">
              Fulfilling the Great Commission with hearts full of joy!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Heart, 
                title: "Win Hearts!", 
                emoji: "❤️",
                color: "bg-rose-100 border-rose-300",
                iconColor: "text-rose-500",
                desc: "Reaching expatriate communities with the Gospel, making disciples of all nations as Christ commanded!" 
              },
              { 
                icon: Users, 
                title: "Train Together!", 
                emoji: "📖",
                color: "bg-blue-100 border-blue-300",
                iconColor: "text-blue-500",
                desc: "Teaching believers through joyful discipleship, Bible study, and loving community!" 
              },
              { 
                icon: Send, 
                title: "Send With Joy!", 
                emoji: "✨",
                color: "bg-emerald-100 border-emerald-300",
                iconColor: "text-emerald-500",
                desc: "Commissioning believers as joyful witnesses across the UAE and to the ends of the earth!" 
              }
            ].map((item, i) => (
              <div 
                key={item.title}
                className={`p-8 rounded-3xl ${item.color} border-2 text-center group hover:scale-[1.03] hover:shadow-xl transition-all duration-300 animate-fade-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="font-joyful text-2xl font-extrabold text-foreground mb-3">{item.title}</h3>
                <p className="font-joyful text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Great Commission */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="font-joyful text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit!"
          </p>
          <p className="font-joyful text-sm mt-4 opacity-80">— Matthew 28:19-20</p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <TreeLogo className="w-14 h-16 mx-auto mb-6 text-primary" />
            <h2 className="font-joyful text-4xl font-extrabold text-foreground mb-4">
              Find Us Near You!
            </h2>
            <p className="font-joyful text-lg text-muted-foreground">
              Physical attendance and online participation via Zoom available!
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {["Dubai", "Ras Al Khaimah", "Abu Dhabi", "Al Ain"].map((location, i) => (
              <div 
                key={location} 
                className="bg-card border-2 border-primary/20 p-6 rounded-2xl text-center hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <p className="font-joyful text-xl font-bold text-foreground">{location}</p>
                <p className="font-joyful text-sm text-muted-foreground">UAE</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="joyful">
              Plan Your Visit!
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="joyfulOutline">
              <Video className="w-5 h-5" />
              Join Online
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <TreeLogo className="w-14 h-16 text-primary-foreground mb-6" />
            <p className="font-joyful text-2xl font-bold mb-2">Jesus First Christian Ministries</p>
            <p className="font-joyful text-sm opacity-80 mb-2">TO WIN · TO TRAIN · TO SEND</p>
            <p className="font-joyful text-xs opacity-60 mb-8">Established 1987 · Riyadh, Saudi Arabia</p>
            <div className="flex items-center gap-8 font-joyful text-sm">
              {navItems.map((item) => (
                <a key={item} href="#" className="opacity-80 hover:opacity-100 transition-opacity">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Selection Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={onSelect} variant="joyful" className="shadow-2xl text-base px-8 py-6">
          Choose This Design!
        </Button>
      </div>
    </div>
  );
};