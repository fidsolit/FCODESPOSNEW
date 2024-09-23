"use client";

import { useState } from "react";
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex h-screen justify-center bg-slate-700 items-center">
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Carousel Images */}
        <div className="relative h-[500px] w-full">
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
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
              {/* Caption */}
              {/* <div className="absolute bottom-10 left-0 w-full text-center">
                <p className="text-white text-2xl font-bold bg-black bg-opacity-50 py-2 rounded-lg">
                  {slide.caption}
                </p>
              </div> */}
            </div>
          ))}
        </div>

        {/* Next/Previous Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
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
