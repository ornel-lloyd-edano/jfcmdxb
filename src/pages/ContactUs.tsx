import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TreeLogo } from "@/components/TreeLogo";
import { MobileNav } from "@/components/MobileNav";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, MapPin, Heart, Users, MessageCircle } from "lucide-react";

import alexPhoto from "@/assets/elders/alex.png";
import noelPhoto from "@/assets/elders/noel.jpg";
import ferdsPhoto from "@/assets/elders/ferds.jpg";
import reyPhoto from "@/assets/elders/rey.jpg";
import mikePhoto from "@/assets/elders/mike.jpg";
import andreiPhoto from "@/assets/elders/andrei.jpg";
import heroContact from "@/assets/hero-contact.png";

const ContactUs = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "The Mission", path: "/mission" },
    { label: "Contact Us", path: "/contact" },
  ];

  const elders = [
    {
      title: "Pastor Alex",
      name: "Alex Talaña",
      phone: "0569552399",
      areas: "Muraqqabat",
      isPastor: true,
      photo: alexPhoto,
    },
    {
      title: "Elder Noel",
      name: "Noel Junto",
      phone: "0522609637",
      areas: "Muteena / Al Khail / Rashidiya / RAK",
      photo: noelPhoto,
    },
    {
      title: "Elder Ferds",
      name: "Ferdinand Abadilla",
      phone: "0509453597",
      areas: "Al Barsha / DIP",
      photo: ferdsPhoto,
    },
    {
      title: "Elder Rey",
      name: "Rey Fernandez",
      phone: "0562230292",
      areas: "Al Nahda / Muhaisnah",
      photo: reyPhoto,
    },
    {
      title: "Elder Mike",
      name: "Michael Mallari",
      phone: "0501458243",
      areas: "Karama / Bur Dubai / Satwa",
      photo: mikePhoto,
    },
    {
      title: "Assistant Elder Andrei",
      name: "Andrei Cabang",
      phone: "0561121105",
      areas: "RAK / Um Al Quwain",
      photo: andreiPhoto,
    },
  ];

  return (
    <div className="min-h-screen design-mission bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <TreeLogo className="w-10 h-12 transition-transform group-hover:scale-105" />
              <div>
                <span className="font-mission text-lg font-bold text-foreground tracking-tight">
                  JESUS FIRST
                </span>
                <span className="block text-[10px] text-muted-foreground font-mission-body tracking-widest uppercase">
                  Christian Ministries
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="font-mission-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/mission#join-form">
                <Button variant="mission" size="sm">
                  Join the Mission
                </Button>
              </Link>
            </div>

            {/* Mobile Navigation */}
            <MobileNav navItems={navItems} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pb-28 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroContact})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-up">
          <h1 className="font-mission text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 drop-shadow-md tracking-tight">
            We are <span className="text-primary">Family</span> Here
          </h1>
          
          <div className="max-w-2xl mx-auto bg-background/40 backdrop-blur-sm rounded-xl p-6">
            <p className="font-mission-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              We believe in doing life together. Whether you have questions, need prayer, 
              or just want someone to talk to — we're here for you. Reach out to any of our elders; 
              they'd love to hear from you.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-accent font-mission-body">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">One family, many locations across the UAE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Warm Message */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <MessageCircle className="w-6 h-6 text-primary-foreground flex-shrink-0" />
            <p className="font-mission-body text-primary-foreground/90 italic">
              "Don't hesitate to call or message us. We're not strangers — we're brothers and sisters in Christ."
            </p>
          </div>
        </div>
      </section>

      {/* Elders Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-mission text-2xl md:text-3xl font-bold text-foreground mb-3">
              The Pillars of Our Church Family
            </h2>
            <p className="font-mission-body text-muted-foreground">
              Find someone near your area — or anyone you feel comfortable talking to
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {elders.map((elder, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 overflow-hidden relative ${
                  elder.isPastor ? 'border-primary/20' : ''
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 group-hover:opacity-45 transition-opacity"
                  style={{ backgroundImage: `url(${elder.photo})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/40" />
                
                <CardContent className="p-6 relative z-10">
                  {/* Avatar Photo */}
                  <Avatar className={`w-20 h-20 mb-4 ring-4 shadow-lg ${
                    elder.isPastor 
                      ? 'ring-primary/40' 
                      : 'ring-secondary/40'
                  }`}>
                    <AvatarImage src={elder.photo} alt={elder.name} className="object-cover" />
                    <AvatarFallback className={`text-2xl font-bold ${
                      elder.isPastor 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {elder.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>

                  {/* Title & Name */}
                  <div className="mb-4">
                    <h3 className="font-mission text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {elder.title}
                    </h3>
                    <p className="font-mission-body text-muted-foreground">
                      {elder.name}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <a 
                      href={`tel:${elder.phone}`}
                      className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group/link"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center group-hover/link:bg-primary/20 transition-colors">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-mission-body font-medium">{elder.phone}</span>
                    </a>

                    <div className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <span className="font-mission-body text-sm pt-2">{elder.areas}</span>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/971${elder.phone.slice(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block"
                  >
                    <Button 
                      variant="mission" 
                      className="w-full"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-mission text-2xl md:text-3xl font-bold mb-4">
            No Question Is Too Small
          </h2>
          <p className="font-mission-body text-primary-foreground/90 max-w-2xl mx-auto text-lg leading-relaxed mb-6">
            Whether you're new to faith, going through a tough time, or just want to know 
            more about our church — reach out. We're here to walk with you, not judge you.
          </p>
          <p className="font-mission-body text-primary-foreground/70 italic">
            "Therefore encourage one another and build each other up." — 1 Thessalonians 5:11
          </p>
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

export default ContactUs;
