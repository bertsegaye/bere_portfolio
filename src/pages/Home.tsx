//import React, { Component } from "react";

import AboutMe from "./AboutMe";
import BlogPage from "./BlogPage";
import Contact from "./Contact";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
          <Projects />
        </div>

        <hr />
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
          <BlogPage />
        </div>
        <hr />

        <AboutMe />
        <hr />
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;
