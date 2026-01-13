import { TreeLogo } from "@/components/TreeLogo";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { MapPin, ArrowRight, Video, Globe, BookOpen, Users, Church, ScrollText, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const AboutUs = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Events", path: "/events" },
    { label: "Contact Us", path: "/contact" }
  ];

  const [expandedSection, setExpandedSection] = useState<string | null>("history");

  const sections = [
    { id: "history", title: "JFCM History", icon: BookOpen },
    { id: "dubai", title: "JFCM Dubai", icon: MapPin },
    { id: "rak", title: "JFCM RAK", icon: MapPin },
    { id: "faith", title: "Our Statement of Faith", icon: ScrollText },
  ];

  const statementOfFaith = [
    {
      number: 1,
      title: "We believe in the Bible",
      content: "We believe that the BIBLE is the infallible word of God and the absolute authority in matters of faith and conduct."
    },
    {
      number: 2,
      title: "We believe in the Holy Trinity",
      content: "We believe that God eternally exists in three distinct persons of the Father, the Son, and the Holy Spirit."
    },
    {
      number: 3,
      title: "We believe in the Lord Jesus Christ",
      content: "We believe that Jesus Christ is the incarnate Word who was conceived by the Holy Spirit, born of Mary who was a virgin and who died sacrificially for our sins. He was buried, resurrected bodily on the third day, and ascended into heaven. He will come again to judge the living and the dead."
    },
    {
      number: 4,
      title: "We believe that all men have sinned against God",
      content: "We believe that all men have sinned against God and that they are saved solely by grace through faith in the Lord Jesus Christ and His redemptive work."
    },
    {
      number: 5,
      title: "We believe in the Holy Spirit",
      content: "We believe that the Holy Spirit is the eternal Spirit of God sent to the church to empower it to live a holy life and to witness to the whole world."
    },
    {
      number: 6,
      title: "We believe that there is only one church",
      content: "We believe that there is only one church, the body of Christ with Jesus as its head and that all believers in every generation belong to it."
    },
    {
      number: 7,
      title: "We believe that the church is tasked by God to preach the gospel to all nations",
      content: "We believe that the church is tasked by God to preach the gospel to all nations. This it can accomplish by planting churches and supporting missions through tithes and offerings."
    },
    {
      number: 8,
      title: "We believe that Christ will come again",
      content: "We believe in the rapture of saints, the second coming of Christ, the resurrection of the body, the judgement of the believers, the judgement of non-believers, and in life everlasting."
    },
    {
      number: 9,
      title: "We believe in the ordinances of Water Baptism and the Breaking of Bread",
      content: "We believe in the ordinances of the Water Baptism and the Breaking of the Bread."
    },
    {
      number: 10,
      title: "We believe in the sanctity of marriage",
      content: "We believe in the sanctity of marriage - that it is biblical, singular and exclusively between man and woman."
    }
  ];

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
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                to={item.path}
                className={`font-mission-body text-sm transition-colors font-medium ${
                  item.path === "/about" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <MobileNav navItems={navItems} />
            <Button variant="mission" className="hidden sm:flex">
              Join the Mission
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full">
              <Globe className="w-4 h-4 text-accent" />
              <span className="font-mission-body text-sm text-foreground font-medium">Our Story & Mission</span>
            </div>
            <h1 className="font-mission text-5xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              About <span className="text-primary">JFCM</span>
            </h1>
            <p className="font-mission-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A church-planting ministry founded on the Great Commission, spreading the Gospel across nations since 1987.
            </p>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="py-8 bg-secondary/30 sticky top-[73px] z-40 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setExpandedSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-mission-body text-sm font-medium transition-all ${
                  expandedSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary/50"
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* JFCM History Section */}
      <section id="history" className="py-20 bg-background scroll-mt-36">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Content */}
              <div className="lg:w-3/5 space-y-8 animate-fade-up">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-mission text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">JFCM History</h2>
                    <p className="font-mission-body text-sm text-accent font-semibold uppercase tracking-wider">Founded June 1987</p>
                  </div>
                </div>

                <div className="space-y-6 font-mission-body text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Jesus First Christian Ministries (JFCM) is a church-planting ministry founded in June 1987 in Riyadh, Saudi Arabia. We were officially listed with the Securities and Exchange Commission of the Philippines on May 31, 1989, as a non-denominational, non-profit, religious Christian organization.
                  </p>
                  <p>
                    It was birthed out of the vision and the desire of the church at the time to obey the "Great Commission" from the Lord (Matthew 28:18-20). This is envisioned by planting churches and training workers for the work of the ministry under the ministry slogan <strong className="text-primary">"TO WIN, TO TRAIN, TO SEND"</strong>.
                  </p>

                  <blockquote className="border-l-4 border-accent pl-6 py-4 my-8 bg-accent/5 rounded-r-xl">
                    <p className="font-mission-body text-foreground italic text-lg">
                      "Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
                    </p>
                    <cite className="font-mission-body text-sm text-accent mt-2 block">— Matthew 28:19</cite>
                  </blockquote>

                  <p>
                    Founded on a church planting vision and platform, the JFCM has never stopped trying to fulfill this mandate.
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-2">
                    <div className="flex items-center gap-3">
                      <Globe className="w-8 h-8 text-primary" />
                      <span className="font-mission text-4xl font-extrabold text-primary">89</span>
                    </div>
                    <p className="font-mission text-sm font-bold text-foreground">Overseas Churches</p>
                    <p className="font-mission-body text-sm text-muted-foreground">Since 1987, planted in 27 cities internationally</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 space-y-2">
                    <div className="flex items-center gap-3">
                      <Church className="w-8 h-8 text-accent" />
                      <span className="font-mission text-4xl font-extrabold text-accent">93</span>
                    </div>
                    <p className="font-mission text-sm font-bold text-foreground">National Churches</p>
                    <p className="font-mission-body text-sm text-muted-foreground">Since 1989, planted across the Philippines</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <p className="font-mission-body text-muted-foreground leading-relaxed">
                    These churches are further divided into groups that their respective overseers supervise. Its mission office is located in Mandaluyong, Philippines. The general overseer, Mario Pingol, and 11 other overseers make up the JFCM mission's council of elders.
                  </p>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="lg:w-2/5 space-y-6">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-2xl overflow-hidden aspect-[4/5] flex items-center justify-center">
                  <div className="text-center p-8 space-y-4">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <BookOpen className="w-10 h-10 text-primary" />
                    </div>
                    <p className="font-mission-body text-sm text-muted-foreground">
                      Historical Photo
                      <br />
                      <span className="text-xs">(Image placeholder)</span>
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-border rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                  <div className="text-center p-6 space-y-3">
                    <Users className="w-8 h-8 text-accent mx-auto" />
                    <p className="font-mission-body text-sm text-muted-foreground">
                      Council of Elders Photo
                      <br />
                      <span className="text-xs">(Image placeholder)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JFCM Dubai Section */}
      <section id="dubai" className="py-20 bg-secondary/30 scroll-mt-36">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
              <div className="lg:w-3/5 space-y-8 animate-fade-up">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-mission text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">JFCM Dubai</h2>
                    <p className="font-mission-body text-sm text-accent font-semibold uppercase tracking-wider">United Arab Emirates</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-accent" />
                    </div>
                    <p className="font-mission text-xl font-bold text-foreground">Coming Soon...</p>
                  </div>
                  <p className="font-mission-body text-muted-foreground leading-relaxed">
                    We are currently preparing detailed information about our Dubai ministry. Check back soon for updates on our services, community events, and ways to get involved.
                  </p>
                  <Button variant="mission">
                    Get Notified
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="lg:w-2/5">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                  <div className="text-center p-8 space-y-4">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="w-10 h-10 text-primary" />
                    </div>
                    <p className="font-mission text-lg font-bold text-foreground">Dubai</p>
                    <p className="font-mission-body text-sm text-muted-foreground">
                      Ministry Photo
                      <br />
                      <span className="text-xs">(Image placeholder)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JFCM RAK Section */}
      <section id="rak" className="py-20 bg-background scroll-mt-36">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-3/5 space-y-8 animate-fade-up">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-mission text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">JFCM RAK</h2>
                    <p className="font-mission-body text-sm text-accent font-semibold uppercase tracking-wider">Ras Al Khaimah, UAE</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-accent" />
                    </div>
                    <p className="font-mission text-xl font-bold text-foreground">Coming Soon...</p>
                  </div>
                  <p className="font-mission-body text-muted-foreground leading-relaxed">
                    We are currently preparing detailed information about our Ras Al Khaimah ministry. Check back soon for updates on our services, community events, and ways to get involved.
                  </p>
                  <Button variant="mission">
                    Get Notified
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="lg:w-2/5">
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-border rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                  <div className="text-center p-8 space-y-4">
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="w-10 h-10 text-accent" />
                    </div>
                    <p className="font-mission text-lg font-bold text-foreground">Ras Al Khaimah</p>
                    <p className="font-mission-body text-sm text-muted-foreground">
                      Ministry Photo
                      <br />
                      <span className="text-xs">(Image placeholder)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith Section */}
      <section id="faith" className="py-20 bg-primary/5 scroll-mt-36">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full mx-auto">
                <ScrollText className="w-4 h-4 text-primary" />
                <span className="font-mission-body text-sm text-primary font-semibold uppercase tracking-wider">What We Believe</span>
              </div>
              <h2 className="font-mission text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                Our Statement of Faith
              </h2>
              <p className="font-mission-body text-lg text-muted-foreground max-w-2xl mx-auto">
                The foundational beliefs that guide our ministry and unite us as one body in Christ.
              </p>
            </div>

            <div className="space-y-4">
              {statementOfFaith.map((item, index) => (
                <div 
                  key={item.number}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="p-6 flex gap-5">
                    <div className="shrink-0">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <span className="font-mission text-sm font-bold text-primary-foreground">{item.number}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-mission text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="font-mission-body text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-mission text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tight">
              Join Us in Our Mission
            </h2>
            <p className="font-mission-body text-lg text-primary-foreground/80">
              Be part of a community committed to spreading the Gospel and planting churches across nations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/70 border-0 font-mission font-bold"
              >
                Plan Your Visit
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/70 hover:text-primary border-0 font-mission font-bold"
              >
                <Video className="w-4 h-4" />
                Join Online
              </Button>
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
                <Link 
                  key={item.label} 
                  to={item.path} 
                  className="text-primary-foreground/60 hover:text-accent transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
