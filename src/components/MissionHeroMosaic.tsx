import img1 from "@/assets/mission/img1.png";
import img2 from "@/assets/mission/img2.png";
import img3 from "@/assets/mission/img3.png";
import img4 from "@/assets/mission/img4.png";
import img5 from "@/assets/mission/img5.png";
import img6 from "@/assets/mission/img6.png";
import img7 from "@/assets/mission/img7.png";
import img8 from "@/assets/mission/img8.png";
import img9 from "@/assets/mission/img9.png";

export const MissionHeroMosaic = () => {
  const images = [
    { src: img1, alt: "SOW Graduation ceremony" },
    { src: img2, alt: "SOW graduates with certificates" },
    { src: img3, alt: "His Story Our Story group photo" },
    { src: img4, alt: "JFCM kids ministry" },
    { src: img5, alt: "SOW batch graduation" },
    { src: img6, alt: "JFCM men in varsity jackets" },
    { src: img7, alt: "Outdoor fellowship gathering" },
    { src: img8, alt: "Pastor speaking" },
    { src: img9, alt: "Worship team musicians" },
  ];

  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 bg-[#1a472a]">
      {/* Row 1 */}
      <div className="col-span-1 row-span-1 overflow-hidden">
        <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" />
      </div>
      <div className="col-span-2 row-span-1 overflow-hidden">
        <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover" />
      </div>
      <div className="col-span-1 row-span-2 overflow-hidden">
        <img src={images[7].src} alt={images[7].alt} className="w-full h-full object-cover" />
      </div>
      
      {/* Row 2 */}
      <div className="col-span-1 row-span-1 overflow-hidden">
        <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover" />
      </div>
      <div className="col-span-1 row-span-1 overflow-hidden">
        <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover" />
      </div>
      <div className="col-span-1 row-span-1 overflow-hidden">
        <img src={images[4].src} alt={images[4].alt} className="w-full h-full object-cover" />
      </div>
      
      {/* Row 3 */}
      <div className="col-span-1 row-span-1 overflow-hidden">
        <img src={images[5].src} alt={images[5].alt} className="w-full h-full object-cover" />
      </div>
      <div className="col-span-2 row-span-1 overflow-hidden">
        <img src={images[6].src} alt={images[6].alt} className="w-full h-full object-cover" />
      </div>
      <div className="col-span-1 row-span-1 overflow-hidden">
        <img src={images[8].src} alt={images[8].alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
