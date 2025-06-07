// src/components/Hero.tsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 pt-20"
    >
      <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
        Hello, I’m <span className="text-blue-600">Your Name</span>
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        A Passionate Front-End Developer
      </p>
      <a
        href="#projects"
        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
