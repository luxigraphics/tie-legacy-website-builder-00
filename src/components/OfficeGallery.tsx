
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfficeGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/lovable-uploads/d8a215e8-e1b5-47e8-bf7c-ffdb6b6154e7.png",
      alt: "Office Consultation Session"
    },
    {
      src: "/lovable-uploads/56d8f691-ab7d-4857-b025-cc25c2fdcf04.png",
      alt: "Legal Documentation Process"
    },
    {
      src: "/lovable-uploads/97fbf36d-ec45-4f26-82cf-1d484500b004.png",
      alt: "Client Meeting Session"
    },
    {
      src: "/lovable-uploads/81f96bd6-c6b8-40ea-b309-71b0dd87a8d3.png",
      alt: "Professional Legal Services"
    },
    {
      src: "/lovable-uploads/3bcf28b9-ae6b-4f70-bd6d-5cfc45f4770b.png",
      alt: "Office Interior & Heritage"
    },
    {
      src: "/lovable-uploads/4330fea9-d3ed-4383-907d-bf8e8b23c23d.png",
      alt: "Property Registration Services"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visible.push({ ...images[index], index });
    }
    return visible;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="z-10 bg-white/80 hover:bg-white shadow-lg"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="flex space-x-2 md:space-x-4 overflow-hidden">
          {getVisibleImages().map((image, idx) => (
            <div
              key={image.index}
              className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                idx === 1 
                  ? 'w-48 h-64 md:w-64 md:h-80 lg:w-80 lg:h-96 scale-110 z-10' 
                  : 'w-32 h-44 md:w-48 md:h-64 lg:w-56 lg:h-72 scale-90 opacity-75'
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {idx === 1 && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="z-10 bg-white/80 hover:bg-white shadow-lg"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-4 md:mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OfficeGallery;
