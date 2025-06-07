//import React, { Component } from "react";
import profile from "../assets/profile.jpg";
import JCBS from "../assets/J_CBS.png";
import CV from "../assets/bere-cv-resume.jpg";
import front from "../assets/Front.jpg";
import back from "../assets/back.jpg";

function AboutMe() {
  return (
    <>
      <div className="w-full h-auto bg-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Profile Image */}
            <img
              src={profile}
              alt="Profile"
              className="w-48 h-48 sm:w-40 sm:h-40 md:w-56 md:h-56 object-cover rounded-full shadow"
            />

            {/* Text Content */}
            <div className="text-center sm:text-left space-y-2">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  Berihun Tsegaye
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  Junior CBS Officer
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Addis Ababa, Ethiopia
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My Name is Berihun Tsegaye. I have a B.Sc. Degree in Computer
                Science.
                <br />
                Graduation Year: July 2023 – Assosa University.
                <br />
                Currently, I am employed at Amhara Bank S.C as a Junior Core
                Banking Officer in the Applications Development and Systems
                Department since Nov 2023.
                <br />
                Currently, I am employed at Amhara Bank S.C as a Junior Core
                Banking Officer in the Applications Development and Systems
                Department since Nov 2023.
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 my-8">
          <img
            src={JCBS}
            alt="Berihun Tsegaye Banner"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="max-w-xl mx-auto text-center space-y-4 p-6">
          <h2 className="text-2xl font-bold">My CV / Resume</h2>
          <p className="text-sm text-gray-500">Updated as of June 2025</p>
          <img src={CV} alt="CV Preview" className="w-full rounded shadow" />

          <div className="flex justify-center gap-4">
            <a
              href="https://rxresu.me/bertsegaye/bere-cv-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Online
            </a>
            <a
              href="https://rxresu.me/bertsegaye/bere-cv-resumehttps://storage.rxresu.me/cm8k51ic50y0yjee2xhhllelb/resumes/bere-cv-resume.pdf"
              download
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Download
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-2xl font-semibold text-center mb-6">
            My National ID
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <img
                className="w-full h-auto object-cover rounded-lg shadow"
                src={front}
                alt="Front side of ID"
              />
              <p className="mt-2 text-sm text-gray-600">Front Side</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-full h-auto object-cover rounded-lg shadow"
                src={back}
                alt="Back side of ID"
              />
              <p className="mt-2 text-sm text-gray-600">Back Side</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
