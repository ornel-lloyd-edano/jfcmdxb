import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { Design1Serene } from "@/components/designs/Design1Serene";
import { Design2Warm } from "@/components/designs/Design2Warm";
import { Design3Bold } from "@/components/designs/Design3Bold";
import { Design4Sacred } from "@/components/designs/Design4Sacred";
import { Design5Mission } from "@/components/designs/Design5Mission";
import { Design6Heritage } from "@/components/designs/Design6Heritage";
import { Design7Contemporary } from "@/components/designs/Design7Contemporary";
import { Design8Joyful } from "@/components/designs/Design8Joyful";
import { ArrowLeft, Check } from "lucide-react";

type DesignChoice = "selector" | "design1" | "design2" | "design3" | "design4" | "design5" | "design6" | "design7" | "design8" | "selected";

const Index = () => {
  const [view, setView] = useState<DesignChoice>("selector");
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

  const handleSelect = (design: string) => {
    setSelectedDesign(design);
    setView("selected");
  };

  const designs = [
    { key: "design1", name: "Modern & Serene", component: Design1Serene },
    { key: "design2", name: "Warm & Earthy", component: Design2Warm },
    { key: "design3", name: "Bold & Contemporary", component: Design3Bold },
    { key: "design4", name: "Sacred & Liturgical", component: Design4Sacred },
    { key: "design5", name: "Mission & Movement", component: Design5Mission },
    { key: "design6", name: "Heritage & Classic", component: Design6Heritage },
    { key: "design7", name: "Contemporary & Modern", component: Design7Contemporary },
    { key: "design8", name: "Joyful & Vibrant", component: Design8Joyful },
  ];


  // Render individual design views
  const designView = designs.find(d => d.key === view);
  if (designView) {
    const DesignComponent = designView.component;
    return (
      <>
        <button 
          onClick={() => setView("selector")}
          className="fixed top-6 left-6 z-[60] bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-border hover:bg-secondary transition-colors font-body text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Designs
        </button>
        <DesignComponent onSelect={() => handleSelect(designView.name)} />
      </>
    );
  }

  if (view === "selected") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-lg animate-fade-up">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Great Choice!
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-8">
            You've selected the <span className="text-primary font-semibold">{selectedDesign}</span> design for Jesus First Christian Ministries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" onClick={() => setView("selector")}>
              View All Designs
            </Button>
            <Button variant="heroOutline" onClick={() => {
              const design = designs.find(d => d.name === selectedDesign);
              if (design) setView(design.key as DesignChoice);
            }}>
              View Selected Design
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Design Selector View
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-12 px-6 text-center border-b border-border">
        <TreeLogo className="w-16 h-20 mx-auto mb-6" />
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Jesus First Christian Ministries
        </h1>
        <p className="font-body text-lg text-muted-foreground mb-2">
          Choose Your Landing Page Design
        </p>
        <p className="font-body text-sm text-primary font-semibold tracking-widest mb-6">
          TO WIN · TO TRAIN · TO SEND
        </p>
      </header>

      {/* Design Options */}
      <main className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design 1 */}
            <div 
              className="group cursor-pointer animate-fade-up"
              onClick={() => setView("design1")}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-50 via-white to-green-50 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-14 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
                      <TreeLogo className="w-8 h-10" />
                    </div>
                    <div className="h-3 w-32 bg-foreground/10 rounded mx-auto mb-2"></div>
                    <div className="h-2 w-24 bg-foreground/5 rounded mx-auto mb-4"></div>
                    <div className="flex gap-2 justify-center">
                      <div className="h-8 w-20 bg-primary rounded-full"></div>
                      <div className="h-8 w-20 bg-transparent border border-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Modern & Serene</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Clean, light aesthetic with soft greens, elegant typography, and a peaceful, welcoming atmosphere.
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-medium shadow-lg">
                    Preview Design
                  </span>
                </div>
              </div>
            </div>

            {/* Design 2 */}
            <div 
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: "0.1s" }}
              onClick={() => setView("design2")}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 via-orange-50/50 to-green-50/30 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-14 mx-auto mb-4 bg-amber-900/20 rounded-xl flex items-center justify-center">
                      <TreeLogo className="w-8 h-10 text-amber-800" />
                    </div>
                    <div className="h-3 w-32 bg-amber-900/10 rounded mx-auto mb-2"></div>
                    <div className="h-2 w-24 bg-amber-900/5 rounded mx-auto mb-4"></div>
                    <div className="flex gap-2 justify-center">
                      <div className="h-8 w-20 bg-amber-800 rounded-lg"></div>
                      <div className="h-8 w-20 bg-transparent border border-amber-800 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Warm & Earthy</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Organic feel with cream backgrounds, forest tones, and rustic elements that evoke community warmth.
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-medium shadow-lg">
                    Preview Design
                  </span>
                </div>
              </div>
            </div>

            {/* Design 3 */}
            <div 
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: "0.2s" }}
              onClick={() => setView("design3")}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-green-950 to-gray-900 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-14 mx-auto mb-4 bg-green-500/20 rounded-none flex items-center justify-center">
                      <TreeLogo className="w-8 h-10 text-green-400" />
                    </div>
                    <div className="h-3 w-32 bg-white/10 rounded mx-auto mb-2"></div>
                    <div className="h-2 w-24 bg-white/5 rounded mx-auto mb-4"></div>
                    <div className="flex gap-2 justify-center">
                      <div className="h-8 w-20 bg-green-500 rounded-none"></div>
                      <div className="h-8 w-20 bg-transparent border border-green-500 rounded-none"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Bold & Contemporary</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Dramatic dark theme with vibrant green accents, strong typography, and modern worship energy.
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-medium shadow-lg">
                    Preview Design
                  </span>
                </div>
              </div>
            </div>

            {/* Design 4 - Sacred & Liturgical */}
            <div 
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: "0.3s" }}
              onClick={() => setView("design4")}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-50/80 via-blue-950/20 to-amber-100/50 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-14 mx-auto mb-4 bg-blue-900/20 rounded-sm flex items-center justify-center border border-amber-500/30">
                      <TreeLogo className="w-8 h-10 text-blue-900" />
                    </div>
                    <div className="h-3 w-32 bg-blue-900/10 rounded mx-auto mb-2"></div>
                    <div className="h-2 w-24 bg-amber-600/20 rounded mx-auto mb-4"></div>
                    <div className="flex gap-2 justify-center">
                      <div className="h-8 w-20 bg-blue-900 rounded-sm"></div>
                      <div className="h-8 w-20 bg-transparent border border-blue-900 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Sacred & Liturgical</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Classic cathedral-inspired aesthetic with ivory, deep blue, gold accents, and reverent typography.
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-medium shadow-lg">
                    Preview Design
                  </span>
                </div>
              </div>
            </div>

            {/* Design 5 - Mission & Movement */}
            <div 
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: "0.4s" }}
              onClick={() => setView("design5")}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-900/90 via-slate-800 to-orange-900/30 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-14 mx-auto mb-4 bg-green-600/30 rounded-lg flex items-center justify-center">
                      <TreeLogo className="w-8 h-10 text-green-400" />
                    </div>
                    <div className="h-3 w-32 bg-white/15 rounded mx-auto mb-2"></div>
                    <div className="h-2 w-24 bg-orange-400/30 rounded mx-auto mb-4"></div>
                    <div className="flex gap-2 justify-center">
                      <div className="h-8 w-20 bg-green-600 rounded-lg"></div>
                      <div className="h-8 w-20 bg-transparent border-2 border-green-600 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Mission & Movement</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Purpose-driven design with deep green, slate, orange highlights, and action-oriented typography.
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-medium shadow-lg">
                    Preview Design
                  </span>
                </div>
              </div>
            </div>

            {/* Design 6 - Heritage & Classic */}
            <div 
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: "0.5s" }}
              onClick={() => setView("design6")}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 via-stone-100 to-amber-50 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-14 mx-auto mb-4 bg-amber-900/20 rounded-sm flex items-center justify-center">
                      <TreeLogo className="w-8 h-10 text-amber-900" />
                    </div>
                    <div className="h-3 w-32 bg-amber-900/10 rounded mx-auto mb-2"></div>
                    <div className="h-2 w-24 bg-amber-700/10 rounded mx-auto mb-4"></div>
                    <div className="flex gap-2 justify-center">
                      <div className="h-8 w-20 bg-amber-900 rounded-md"></div>
                      <div className="h-8 w-20 bg-transparent border border-amber-900 rounded-md"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Heritage & Classic</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Timeless design with warm browns, cream tones, and traditional typography evoking church heritage.
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-medium shadow-lg">
                    Preview Design
                  </span>
                </div>
              </div>
            </div>

            {/* Design 7 - Contemporary & Modern */}
            <div 
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: "0.6s" }}
              onClick={() => setView("design7")}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-violet-100 via-purple-50 to-pink-100 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-14 mx-auto mb-4 bg-violet-600/20 rounded-2xl flex items-center justify-center">
                      <TreeLogo className="w-8 h-10 text-violet-600" />
                    </div>
                    <div className="h-3 w-32 bg-violet-600/10 rounded mx-auto mb-2"></div>
                    <div className="h-2 w-24 bg-pink-500/10 rounded mx-auto mb-4"></div>
                    <div className="flex gap-2 justify-center">
                      <div className="h-8 w-20 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full"></div>
                      <div className="h-8 w-20 bg-transparent border border-violet-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Contemporary & Modern</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Sleek gradients, modern typography, and a fresh aesthetic for contemporary worship.
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-medium shadow-lg">
                    Preview Design
                  </span>
                </div>
              </div>
            </div>

            {/* Design 8 - Joyful & Vibrant */}
            <div 
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: "0.7s" }}
              onClick={() => setView("design8")}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 via-yellow-50 to-amber-100 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-14 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <TreeLogo className="w-8 h-10 text-orange-600" />
                    </div>
                    <div className="h-3 w-32 bg-orange-500/10 rounded mx-auto mb-2"></div>
                    <div className="h-2 w-24 bg-yellow-500/20 rounded mx-auto mb-4"></div>
                    <div className="flex gap-2 justify-center">
                      <div className="h-8 w-20 bg-yellow-500 rounded-full"></div>
                      <div className="h-8 w-20 bg-transparent border-2 border-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Joyful & Vibrant</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Bright, celebratory colors with energetic typography for a joyful worship experience.
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-medium shadow-lg">
                    Preview Design
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center font-body text-muted-foreground mt-12">
            Click on any design to preview the full landing page
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
