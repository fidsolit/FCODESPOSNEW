import Link from "next/link";
import React from "react";

const About = () => {
  console.log("your in about page");
  return (
    <div>
      {" "}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-purple-700 to-transparent opacity-75"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white space-y-6">
          {/* Fancy Heading */}
          <h1 className="text-6xl font-extrabold tracking-wide animate-fade-in-up">
            Elevate Your Tech Experience
          </h1>

          {/* Subheading */}
          <p className="text-xl font-light max-w-2xl animate-fade-in-down">
            Discover top-tier computer supplies and expert services tailored for
            you. Let's power your potential.
          </p>

          {/* Call to Action Button */}
          <Link
            href="/store"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold hover:scale-110 transition-transform animate-bounce-slow"
          >
            Shop Now
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 flex justify-center w-full">
          <a href="#products" className="text-white animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
