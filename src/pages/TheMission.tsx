import { TreeLogo } from "@/components/TreeLogo";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { ArrowRight, Target, Droplets, Users, GraduationCap, HandHeart, Megaphone, Home, Rocket, CheckCircle2, MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const TheMission = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "The Mission", path: "/mission" },
    { label: "Events", path: "/events" },
    { label: "Contact Us", path: "/contact" }
  ];

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: ""
  });

  const missionPhases = [
    {
      phase: "TO WIN",
      description: "Reaching souls for Christ",
      color: "bg-red-600",
      missions: [
        {
          number: 1,
          title: "Attend weekly worship service and Bible study gatherings",
          icon: Users,
          verse: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing...",
          reference: "Hebrews 10:24–25"
        },
        {
          number: 2,
          title: "Be water baptized",
          icon: Droplets,
          verse: "Whoever believes and is baptized will be saved…",
          reference: "Mark 16:16"
        }
      ]
    },
    {
      phase: "TO TRAIN",
      description: "Equipping disciples for service",
      color: "bg-blue-600",
      missions: [
        {
          number: 3,
          title: "Choose your ministry",
          icon: Target,
          verse: "There are different kinds of service, but the same Lord… Now to each one the manifestation of the Spirit is given for the common good.",
          reference: "1 Corinthians 12:5–7"
        },
        {
          number: 4,
          title: "Complete the School of Workers training",
          icon: GraduationCap,
          verse: "Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and who correctly handles the word of truth.",
          reference: "2 Timothy 2:15"
        }
      ]
    },
    {
      phase: "TO SEND",
      description: "Deploying workers to the harvest",
      color: "bg-primary",
      missions: [
        {
          number: 5,
          title: "Serve in the ministry",
          icon: HandHeart,
          verse: "Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace.",
          reference: "1 Peter 4:10"
        },
        {
          number: 6,
          title: "Evangelize and invite",
          icon: Megaphone,
          verse: "Therefore go and make disciples of all nations…",
          reference: "Matthew 28:19–20"
        }
      ]
    }
  ];

  const bonusMission = {
    title: "Plant house churches",
    icon: Home,
    verse: "They preached the gospel in that city and won a large number of disciples. Then they returned to Lystra, Iconium and Antioch, strengthening the disciples and appointing elders for them in each church.",
    reference: "Acts 14:21–23"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen design-mission bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <TreeLogo className="w-10 h-12" />
            <div>
              <span className="font-mission text-lg font-bold text-foreground tracking-tight">JESUS FIRST</span>
              <span className="block text-[10px] text-muted-foreground font-mission-body tracking-widest uppercase">Christian Ministries</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link 
                key={item.label} 
                to={item.path} 
                className={`font-mission-body text-sm transition-colors font-medium ${
                  item.path === "/mission" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <MobileNav navItems={navItems} />
            <Button variant="mission" className="hidden sm:flex hover:bg-primary/70">
              Join the Mission
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 px-6 py-3 rounded-full">
              <Rocket className="w-5 h-5 text-accent" />
              <span className="font-mission text-sm text-primary-foreground font-bold uppercase tracking-wider">Your Journey Starts Here</span>
            </div>
            
            <h1 className="font-mission text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight tracking-tight">
              Accept <span className="text-accent">The Mission</span>
            </h1>
            
            <p className="font-mission-body text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Six steps to grow in faith, serve with purpose, and fulfill the Great Commission. Are you ready?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6 bg-accent text-accent-foreground border-accent hover:bg-accent/90 font-mission font-bold"
                onClick={() => document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Mission
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Mission Steps */}
      <section id="missions" className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-4 mb-16 animate-fade-up">
              <span className="font-mission text-sm font-bold text-accent uppercase tracking-widest">The Path Forward</span>
              <h2 className="font-mission text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                TO WIN · TO TRAIN · TO SEND
              </h2>
              <p className="font-mission-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete each phase to become a fully equipped disciple and worker for God's kingdom.
              </p>
            </div>

            {/* Mission Phases */}
            <div className="space-y-16">
              {missionPhases.map((phase, phaseIndex) => (
                <div key={phase.phase} className="space-y-6 animate-fade-up" style={{ animationDelay: `${phaseIndex * 0.2}s` }}>
                  {/* Phase Header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${phase.color} rounded-2xl flex items-center justify-center`}>
                      <span className="font-mission text-xl font-extrabold text-white">{phaseIndex + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-mission text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">{phase.phase}</h3>
                      <p className="font-mission-body text-sm text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>

                  {/* Phase Missions */}
                  <div className="space-y-4 pl-0 md:pl-[4.5rem]">
                    {phase.missions.map((mission) => (
                      <div 
                        key={mission.number}
                        className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-500"
                      >
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          {/* Mission Number & Icon */}
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 ${phase.color}/20 border-2 border-current rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`} style={{ borderColor: `var(--${phase.color.replace('bg-', '')})` }}>
                              <mission.icon className="w-7 h-7 text-foreground" />
                            </div>
                            <div className="md:hidden">
                              <span className="font-mission text-xs font-bold text-accent uppercase tracking-wider">Mission {mission.number}</span>
                              <h4 className="font-mission text-lg font-bold text-foreground">{mission.title}</h4>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 space-y-4">
                            <div className="hidden md:block">
                              <span className="font-mission text-xs font-bold text-accent uppercase tracking-wider">Mission {mission.number}</span>
                              <h4 className="font-mission text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {mission.title}
                              </h4>
                            </div>
                            
                            <blockquote className="border-l-4 border-accent/50 pl-4 py-2 bg-secondary/30 rounded-r-lg">
                              <p className="font-mission-body text-muted-foreground italic leading-relaxed">
                                "{mission.verse}"
                              </p>
                              <cite className="font-mission-body text-sm text-accent mt-2 block font-semibold">
                                — {mission.reference}
                              </cite>
                            </blockquote>
                          </div>

                          {/* Check indicator */}
                          <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border-2 border-dashed border-muted-foreground/30 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                            <CheckCircle2 className="w-6 h-6 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bonus Mission */}
            <div className="mt-12 relative animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl blur opacity-30" />
              <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-10 text-primary-foreground">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shrink-0">
                      <bonusMission.icon className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <div className="md:hidden">
                      <span className="font-mission text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-2">
                        <Rocket className="w-4 h-4" /> Bonus Mission
                      </span>
                      <h3 className="font-mission text-xl font-bold">{bonusMission.title}</h3>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="hidden md:block">
                      <span className="font-mission text-sm font-bold text-accent uppercase tracking-wider flex items-center gap-2">
                        <Rocket className="w-4 h-4" /> Bonus Mission
                      </span>
                      <h3 className="font-mission text-3xl font-bold">{bonusMission.title}</h3>
                    </div>
                    
                    <blockquote className="border-l-4 border-accent pl-4 py-2">
                      <p className="font-mission-body text-primary-foreground/90 italic leading-relaxed">
                        "{bonusMission.verse}"
                      </p>
                      <cite className="font-mission-body text-sm text-accent mt-2 block font-semibold">
                        — {bonusMission.reference}
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Contact Form */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-primary p-8 md:p-12 text-center">
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 px-4 py-2 rounded-full mb-6">
                  <Target className="w-4 h-4 text-accent" />
                  <span className="font-mission text-xs font-bold text-primary-foreground uppercase tracking-wider">Take Action Now</span>
                </div>
                <h2 className="font-mission text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tight mb-4">
                  Ready to Accept the Mission?
                </h2>
                <p className="font-mission-body text-lg text-primary-foreground/80 max-w-xl mx-auto">
                  Leave your details below and we will get in touch to help you start your journey.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mission text-sm font-bold text-foreground flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-4 bg-background border border-border rounded-xl font-mission-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-mission text-sm font-bold text-foreground flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+971 XX XXX XXXX"
                      className="w-full px-4 py-4 bg-background border border-border rounded-xl font-mission-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mission text-sm font-bold text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-4 bg-background border border-border rounded-xl font-mission-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <p className="font-mission-body text-sm text-muted-foreground text-center">
                  Please provide at least a WhatsApp number or email address so we can reach you.
                </p>

                <Button 
                  type="submit" 
                  variant="mission" 
                  className="w-full py-6 text-lg font-bold hover:bg-primary/70"
                >
                  I Accept the Mission
                  <Rocket className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <Link to="/" className="flex items-center gap-4">
              <TreeLogo variant="white" className="w-12 h-14" />
              <div>
                <p className="font-mission text-xl font-bold">Jesus First Christian Ministries</p>
                <p className="font-mission-body text-sm text-primary-foreground/60">TO WIN · TO TRAIN · TO SEND</p>
                <p className="font-mission-body text-xs text-primary-foreground/40 mt-1">Established 1987 · Riyadh, Saudi Arabia</p>
              </div>
            </Link>
            <div className="flex items-center gap-8 font-mission-body text-sm">
              {navItems.map((item) => (
                <Link key={item.label} to={item.path} className="text-primary-foreground/60 hover:text-accent transition-colors font-medium">{item.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TheMission;
