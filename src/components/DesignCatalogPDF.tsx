import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TreeLogo } from "@/components/TreeLogo";
import { Download, Loader2 } from "lucide-react";
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
  },
  {
    name: "Warm & Earthy",
    description: "Organic feel with cream backgrounds, forest tones, and rustic elements that evoke community warmth.",
    image: heroWarm,
    colors: ["#5a8a5e", "#faf6f0", "#b87333"],
  },
  {
    name: "Bold & Contemporary",
    description: "Dramatic dark theme with vibrant green accents, strong typography, and modern worship energy.",
    image: heroBold,
    colors: ["#4ade80", "#1a2e1a", "#eab308"],
  },
  {
    name: "Sacred & Liturgical",
    description: "Classic cathedral-inspired aesthetic with ivory, deep blue, gold accents, and reverent typography.",
    image: heroSacred,
    colors: ["#1e3a5f", "#faf8f0", "#d4a517"],
  },
  {
    name: "Mission & Movement",
    description: "Purpose-driven design with deep green, slate, orange highlights, and action-oriented typography.",
    image: heroMission,
    colors: ["#2d5a3d", "#f8faf8", "#e07020"],
  },
  {
    name: "Heritage & Classic",
    description: "Timeless design with warm browns, cream tones, and traditional typography evoking church heritage.",
    image: heroHeritage,
    colors: ["#5c4033", "#f5f0e8", "#c9a227"],
  },
  {
    name: "Contemporary & Modern",
    description: "Sleek gradients, modern typography, and a fresh aesthetic for contemporary worship.",
    image: heroContemporary,
    colors: ["#8b5cf6", "#faf8fc", "#ec4899"],
  },
  {
    name: "Joyful & Vibrant",
    description: "Bright, celebratory colors with energetic typography for a joyful worship experience.",
    image: heroJoyful,
    colors: ["#ea580c", "#fffbeb", "#eab308"],
  },
];

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

        {/* Designs Grid */}
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