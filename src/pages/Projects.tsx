//import { useState, useEffect } from "react";
//import { build } from "vite";

import webdev from "../assets/web_dev.png";
import webdev1 from "../assets/wpd.jpg";
//import { Moon, Sun } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      image: webdev,
      tags: ["React", "Tailwind", "TypeScript"],
    },
    {
      title: "E-Commerce Platform",
      description:
        "Online store with shopping cart and checkout functionality.",
      image: webdev1,
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Travel App",
      description: "A mobile app for booking trips and managing tours.",
      image: webdev,
      tags: ["Flutter", "Firebase"],
    },
    {
      title: "Budget Tracker",
      description:
        "Track your daily expenses and analyze your spending habits.",
      image: webdev1,
      tags: ["React", "Chart.js", "Context API"],
    },
    {
      title: "Chat App",
      description: "Real-time messaging app using WebSockets.",
      image: webdev,
      tags: ["Socket.IO", "React", "Node.js"],
    },
    {
      title: "Restaurant POS",
      description: "Point of Sale system for managing orders and inventory.",
      image: webdev1,
      tags: ["PHP", "MySQL", "Bootstrap"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-150 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="mt-auto text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
