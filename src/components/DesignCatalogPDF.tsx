import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { Download, Loader2, MapPin, ArrowRight, Users, Heart, Send, Video } from "lucide-react";
import { toast } from "sonner";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Import hero images
import heroSerene from "@/assets/hero-serene.jpg";
import heroWarm from "@/assets/hero-warm.jpg";
import heroBold from "@/assets/hero-bold.jpg";
import heroSacred from "@/assets/hero-sacred.jpg";
import heroMission from "@/assets/hero-mission.jpg";
import heroHeritage from "@/assets/hero-heritage.jpg";
import heroContemporary from "@/assets/hero-contemporary.jpg";
import heroJoyful from "@/assets/hero-joyful.jpg";

const designs = [
  {
    name: "Modern & Serene",
    description: "Clean, light aesthetic with soft greens, elegant typography, and a peaceful, welcoming atmosphere.",
    image: heroSerene,
    colors: ["#4a7c59", "#f8faf8", "#c9a227"],
    primaryColor: "#4a7c59",
    bgColor: "#f8faf8",
    accentColor: "#c9a227",
  },
  {
    name: "Warm & Earthy",
    description: "Organic feel with cream backgrounds, forest tones, and rustic elements that evoke community warmth.",
    image: heroWarm,
    colors: ["#5a8a5e", "#faf6f0", "#b87333"],
    primaryColor: "#5a8a5e",
    bgColor: "#faf6f0",
    accentColor: "#b87333",
  },
  {
    name: "Bold & Contemporary",
    description: "Dramatic dark theme with vibrant green accents, strong typography, and modern worship energy.",
    image: heroBold,
    colors: ["#4ade80", "#1a2e1a", "#eab308"],
    primaryColor: "#4ade80",
    bgColor: "#1a2e1a",
    accentColor: "#eab308",
    isDark: true,
  },
  {
    name: "Sacred & Liturgical",
    description: "Classic cathedral-inspired aesthetic with ivory, deep blue, gold accents, and reverent typography.",
    image: heroSacred,
    colors: ["#1e3a5f", "#faf8f0", "#d4a517"],
    primaryColor: "#1e3a5f",
    bgColor: "#faf8f0",
    accentColor: "#d4a517",
  },
  {
    name: "Mission & Movement",
    description: "Purpose-driven design with deep green, slate, orange highlights, and action-oriented typography.",
    image: heroMission,
    colors: ["#2d5a3d", "#f8faf8", "#e07020"],
    primaryColor: "#2d5a3d",
    bgColor: "#f8faf8",
    accentColor: "#e07020",
  },
  {
    name: "Heritage & Classic",
    description: "Timeless design with warm browns, cream tones, and traditional typography evoking church heritage.",
    image: heroHeritage,
    colors: ["#5c4033", "#f5f0e8", "#c9a227"],
    primaryColor: "#5c4033",
    bgColor: "#f5f0e8",
    accentColor: "#c9a227",
  },
  {
    name: "Contemporary & Modern",
    description: "Sleek gradients, modern typography, and a fresh aesthetic for contemporary worship.",
    image: heroContemporary,
    colors: ["#8b5cf6", "#faf8fc", "#ec4899"],
    primaryColor: "#8b5cf6",
    bgColor: "#faf8fc",
    accentColor: "#ec4899",
  },
  {
    name: "Joyful & Vibrant",
    description: "Bright, celebratory colors with energetic typography for a joyful worship experience.",
    image: heroJoyful,
    colors: ["#ea580c", "#fffbeb", "#eab308"],
    primaryColor: "#ea580c",
    bgColor: "#fffbeb",
    accentColor: "#eab308",
  },
];

// Full Landing Page Preview Component
const FullPagePreview = ({ design, index }: { design: typeof designs[0]; index: number }) => {
  const textColor = design.isDark ? "#ffffff" : "#1a1a1a";
  const mutedColor = design.isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)";
  
  return (
    <div className="page-break" style={{ backgroundColor: design.bgColor, padding: "24px" }}>
      {/* Page Header */}
      <div className="text-center mb-6 pb-4" style={{ borderBottom: `2px solid ${design.primaryColor}` }}>
        <span className="text-xs uppercase tracking-widest" style={{ color: design.primaryColor }}>
          Design {index + 1} of 8
        </span>
        <h2 className="text-3xl font-bold mt-2" style={{ color: textColor, fontFamily: "Cormorant Garamond, serif" }}>
          {design.name}
        </h2>
        <p className="text-sm mt-1" style={{ color: mutedColor }}>{design.description}</p>
      </div>

      {/* Navigation Preview */}
      <div className="rounded-lg p-4 mb-6 flex items-center justify-between" style={{ backgroundColor: design.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)" }}>
        <div className="flex items-center gap-2">
          <TreeLogo className="w-8 h-10" variant={design.isDark ? "white" : "default"} />
          <div>
            <span className="font-bold" style={{ color: textColor }}>Jesus First</span>
            <span className="block text-xs" style={{ color: mutedColor }}>Christian Ministries</span>
          </div>
        </div>
        <div className="flex gap-4 text-sm" style={{ color: mutedColor }}>
          <span>Home</span>
          <span>About Us</span>
          <span>Events</span>
          <span>Contact Us</span>
        </div>
        <div className="px-4 py-2 rounded-md text-sm font-semibold" style={{ backgroundColor: design.primaryColor, color: design.isDark ? "#1a1a1a" : "#ffffff" }}>
          Join Us
        </div>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: design.isDark ? "rgba(255,255,255,0.1)" : `${design.primaryColor}15` }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: design.primaryColor }}></span>
            <span className="text-xs" style={{ color: mutedColor }}>Non-Denominational · Bible-Based</span>
          </div>
          <h3 className="text-2xl font-bold leading-tight" style={{ color: textColor, fontFamily: "Cormorant Garamond, serif" }}>
            Welcome to the <span style={{ color: design.primaryColor }}>JFCM Dubai Family</span>
          </h3>
          <p className="text-sm" style={{ color: mutedColor }}>
            A non-profit, bible-based, church-planting organization. Founded in 1987 in Riyadh, Saudi Arabia.
          </p>
          <div className="flex gap-2">
            <div className="px-4 py-2 rounded-md text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: design.primaryColor, color: design.isDark ? "#1a1a1a" : "#ffffff" }}>
              Plan Your Visit <ArrowRight className="w-3 h-3" />
            </div>
            <div className="px-4 py-2 rounded-md text-xs font-semibold flex items-center gap-1" style={{ border: `1px solid ${design.primaryColor}`, color: design.primaryColor }}>
              <Video className="w-3 h-3" /> Join via Zoom
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            {["TO WIN", "TO TRAIN", "TO SEND"].map((text, i) => (
              <div key={text} className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: `${design.primaryColor}20`, color: design.primaryColor }}>
                  {i + 1}
                </div>
                <span className="text-xs font-semibold" style={{ color: textColor }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img 
            src={design.image} 
            alt={design.name}
            className="w-full h-48 object-cover rounded-xl"
            crossOrigin="anonymous"
          />
          <div className="absolute bottom-2 left-2 right-2 p-3 rounded-lg" style={{ backgroundColor: design.isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)" }}>
            <p className="text-xs" style={{ color: mutedColor }}>Sunday Worship Service</p>
            <p className="text-sm font-semibold" style={{ color: textColor }}>In-Person & Online</p>
          </div>
        </div>
      </div>

      {/* Scripture Section */}
      <div className="text-center py-4 mb-6 rounded-lg" style={{ backgroundColor: `${design.primaryColor}10` }}>
        <p className="italic text-sm" style={{ color: textColor }}>
          "But seek first his kingdom and his righteousness, and all these things will be given to you as well."
        </p>
        <p className="text-xs mt-1" style={{ color: mutedColor }}>— Matthew 6:33</p>
      </div>

      {/* Mission Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { icon: Heart, title: "Win", desc: "Reaching expatriate communities with the Gospel." },
          { icon: Users, title: "Train", desc: "Discipling believers through Bible study and mentorship." },
          { icon: Send, title: "Send", desc: "Equipping believers as ambassadors of Christ." }
        ].map((item) => (
          <div key={item.title} className="p-4 rounded-lg" style={{ backgroundColor: design.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)" }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: `${design.primaryColor}20` }}>
              <item.icon className="w-4 h-4" style={{ color: design.primaryColor }} />
            </div>
            <h4 className="font-bold text-sm" style={{ color: textColor }}>{item.title}</h4>
            <p className="text-xs mt-1" style={{ color: mutedColor }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Join Us Section */}
      <div className="rounded-xl p-6 text-center" style={{ backgroundColor: design.primaryColor }}>
        <TreeLogo variant="white" className="w-10 h-12 mx-auto mb-3" />
        <h4 className="text-xl font-bold mb-2" style={{ color: design.isDark ? "#1a1a1a" : "#ffffff", fontFamily: "Cormorant Garamond, serif" }}>
          Join Us This Sunday
        </h4>
        <div className="flex justify-center gap-4 mb-3 flex-wrap">
          {["Dubai", "Ras Al Khaimah", "Abu Dhabi", "Al Ain"].map((loc) => (
            <div key={loc} className="flex items-center gap-1 text-xs" style={{ color: design.isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)" }}>
              <MapPin className="w-3 h-3" />
              {loc}
            </div>
          ))}
        </div>
        <div className="inline-flex px-4 py-2 rounded-md text-xs font-semibold" style={{ backgroundColor: design.isDark ? "#1a1a1a" : "#ffffff", color: design.primaryColor }}>
          Plan Your Visit
        </div>
      </div>

      {/* Footer Preview */}
      <div className="text-center mt-6 pt-4" style={{ borderTop: `1px solid ${design.isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` }}>
        <TreeLogo className="w-8 h-10 mx-auto mb-2" variant={design.isDark ? "white" : "default"} />
        <p className="text-sm font-semibold" style={{ color: textColor }}>Jesus First Christian Ministries</p>
        <p className="text-xs" style={{ color: mutedColor }}>TO WIN. TO TRAIN. TO SEND.</p>
        <p className="text-xs mt-1" style={{ color: mutedColor }}>Established 1987 · Riyadh, Saudi Arabia</p>
      </div>

      {/* Color Palette */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="text-xs" style={{ color: mutedColor }}>Color Palette:</span>
        {design.colors.map((color) => (
          <div
            key={color}
            className="w-5 h-5 rounded-full border"
            style={{ backgroundColor: color, borderColor: design.isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)" }}
            title={color}
          />
        ))}
      </div>
    </div>
  );
};

interface DesignCatalogPDFProps {
  onClose: () => void;
}

export const DesignCatalogPDF = ({ onClose }: DesignCatalogPDFProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    toast.info("Generating PDF... This may take a moment.");

    try {
      const catalogElement = document.getElementById("design-catalog");
      if (!catalogElement) {
        throw new Error("Catalog element not found");
      }

      const canvas = await html2canvas(catalogElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth - 20;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 10;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - 20;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight - 20;
      }

      pdf.save("JFCM-Design-Catalog.pdf");
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border p-4 flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">Design Catalog Preview</h1>
        <div className="flex items-center gap-4">
          <Button onClick={generatePDF} disabled={isGenerating} variant="default">
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download PDF
              </>
            )}
          </Button>
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>
      </div>

      {/* Catalog Content */}
      <div id="design-catalog" className="bg-white p-8 max-w-4xl mx-auto">
        {/* Cover */}
        <div className="text-center mb-12 pb-8 border-b-2 border-gray-200">
          <TreeLogo className="w-20 h-24 mx-auto mb-6 text-[#4a7c59]" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Jesus First Christian Ministries
          </h1>
          <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Website Design Catalog
          </p>
          <p className="text-sm text-[#4a7c59] font-semibold tracking-widest">
            TO WIN · TO TRAIN · TO SEND
          </p>
          <p className="text-xs text-gray-500 mt-4">
            8 Unique Design Themes for Your Church Website
          </p>
        </div>

        {/* Designs Grid - Overview */}
        <div className="space-y-8">
          {designs.map((design, index) => (
            <div key={design.name} className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="aspect-video bg-gray-200">
                  <img
                    src={design.image}
                    alt={design.name}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                {/* Info */}
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Design {index + 1} of 8
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                    {design.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                    {design.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Color Palette:</span>
                    {design.colors.map((color) => (
                      <div
                        key={color}
                        className="w-6 h-6 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Landing Page Previews */}
        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Full Landing Page Previews
            </h2>
            <p className="text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
              Detailed view of each design theme showing all sections
            </p>
          </div>
          
          <div className="space-y-12">
            {designs.map((design, index) => (
              <FullPagePreview key={design.name} design={design} index={index} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t-2 border-gray-200">
          <TreeLogo className="w-12 h-14 mx-auto mb-4 text-[#4a7c59]" />
          <p className="text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
            Jesus First Christian Ministries
          </p>
          <p className="text-xs text-gray-500">
            Established 1987 · Riyadh, Saudi Arabia
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Dubai · Ras Al Khaimah · Abu Dhabi · Al Ain
          </p>
        </div>
      </div>
    </div>
  );
};