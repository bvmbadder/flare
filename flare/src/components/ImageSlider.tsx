// src/components/ImageSlider.js
import { useState } from "react";
import { images } from "../pages/images";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   const handlePrev = () => {
  //     setCurrentSlide((prev) =>
  //       prev === 0 ? Math.ceil(images.length / getVisibleCount()) - 1 : prev - 1
  //     );
  //   };

  //   const handleNext = () => {
  //     setCurrentSlide((prev) =>
  //       prev === Math.ceil(images.length / getVisibleCount()) - 1 ? 0 : prev + 1
  //     );
  //   };

  const getVisibleCount = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 6;
    if (width >= 768) return 4;
    return 4;
  };

  const visibleImages = images.slice(
    currentSlide * getVisibleCount(),
    (currentSlide + 1) * getVisibleCount()
  );

  return (
    <div className="relative w-full">
      {/* Images Container */}
      <div className="flex justify-center gap-3 md:gap-10 items-center overflow-hidden">
        {visibleImages.map((img, index) => (
          <div key={index} className="p-1 ">
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{ width: "100%", display: "inline-flex" }}
              className="w-full  object-cover max-w-[150px] max-h-[100px]"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {Array.from({
          length: Math.ceil(images.length / getVisibleCount()),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3  w-3 mx-1 rounded-full ${
              index === currentSlide ? "bg-pry" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Navigation Controls */}
      {/* <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        ›
      </button> */}
    </div>
  );
};

export default ImageSlider;
