import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";

const ImageSlider = () => {
  const images = [
    {
      id: 0,
      alt: "slide-1",
      src: slide1,
    },
    {
      id: 1,
      alt: "slide-2",
      src: slide2,
    },
    {
      id: 2,
      alt: "slide-3",
      src: slide3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="px-5 lg:px-7 relative h-[320px] overflow-hidden mt-10">
      {/* Left slider */}
      <motion.button
        whileHover={{ scale: 1.3 }}
        onClick={handlePrev}
        className="absolute left-9 md:left-12 z-10 top-36 transform -translate-y-1/2 cursor-pointer"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="11.5"
            stroke="#E2E8F0"
          />
          <path
            d="M12.625 10.375L10.875 12L12.625 13.625"
            stroke="#334155"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Right slider */}
      <motion.button
        whileHover={{ scale: 1.3 }}
        onClick={handleNext}
        className="absolute right-9 md:right-12 z-10 top-36 transform -translate-y-1/2 cursor-pointer"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="11.5"
            stroke="#E2E8F0"
          />
          <path
            d="M11.375 10.375L13.125 12L11.375 13.625"
            stroke="#334155"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      <motion.img
        key={images[currentIndex].id}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.6 }}
        className="w-full h-full rounded-[5px] object-cover"
      />

      <div className="relative">
        <div className="absolute w-full z-10 bottom-0 p-4 space-y-3 bg-gray-900 bg-opacity-25">
          <div className="text-xs text-white space-y-[6px]">
            <h1 className="font-semibold">Latest News & Updates</h1>
            <p className="">
              Turpis interdum nunc varius ornare dignissim pretium. Massa ornare
              quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla
              purus, erat fringilla tincidunt quisque non. Pellentesque in ut
              tellus.
            </p>
          </div>
          {/* Navigation tracker */}
          <div className="flex justify-center space-x-2 cursor-pointer">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-[12px] rounded-[100px] h-[3px] ${
                  currentIndex === index
                    ? "bg-white"
                    : "bg-gray-300 bg-opacity-30"
                } cursor-pointer`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
