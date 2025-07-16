
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfficeGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  // Auto-slide effect with animation control
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimating(false);
      }, 300);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 300);
    }
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
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Fixed height container to prevent movement */}
      <div className="h-[28rem] md:h-[32rem] lg:h-[36rem] flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={isAnimating}
          className="z-10 bg-white/90 hover:bg-white shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex-shrink-0"
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </Button>
        
        <div className="flex space-x-4 md:space-x-6 lg:space-x-8 overflow-hidden flex-1 justify-center items-center">
          {getVisibleImages().map((image, idx) => (
            <div
              key={image.index}
              className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer flex-shrink-0 ${
                idx === 1 
                  ? 'w-80 h-96 md:w-96 md:h-[28rem] lg:w-[28rem] lg:h-[32rem] scale-110 z-10 border-4 border-primary' 
                  : 'w-56 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 scale-90 opacity-80 hover:opacity-100 border-2 border-gray-300'
              } ${isAnimating ? 'animate-pulse' : ''}`}
              onClick={() => idx !== 1 && goToSlide(image.index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {idx === 1 && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              )}
              {idx === 1 && (
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-1">{image.alt}</h3>
                  <p className="text-sm opacity-90">Professional Legal Services</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={isAnimating}
          className="z-10 bg-white/90 hover:bg-white shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex-shrink-0"
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </Button>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 md:mt-8 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-125 shadow-lg' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OfficeGallery;
