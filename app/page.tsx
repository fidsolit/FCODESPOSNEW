"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: "/images/pic1.jpg", alt: "Slide 1" },
    { src: "/images/pic2.jpg", alt: "Slide 2" },
    { src: "/images/pic3.jpg", alt: "Slide 4" },
    { src: "/images/pic4.jpg", alt: "Slide 5" },
    { src: "/images/pic5.jpg", alt: "Slide 6" },
    { src: "/images/pic6.jpg", alt: "Slide 7" },
    { src: "/images/pic7.jpg", alt: "Slide 8" },
    { src: "/images/pic8.jpg", alt: "Slide 9" },
    {
      src: "/images/pic90.jpg",
      alt: "Slide 3",
      caption: "Innovate and Grow",
    },
  ];

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex h-screen justify-center bg-slate-700 items-center">
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        {/* Company Name in the Middle */}
        {/* <div className="absolute inset-0 z-20 flex justify-center items-center text-center">
          <h1 className="text-white text-6xl font-bold opacity-90">FCODES</h1>
        </div> */}

        {/* Carousel Images */}
        <div className="relative h-[700px] w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === currentSlide ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="rounded-lg object-cover shadow-lg"
              />
              {/* Caption */}
              {/* <div className="absolute bottom-10 left-0 w-full text-center z-10">
                <p className="text-white text-2xl font-bold bg-black bg-opacity-50 py-2 rounded-lg">
                  {slide.caption}
                </p>
              </div> */}
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-gray-400 hover:bg-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
