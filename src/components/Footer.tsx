import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
//import JCBS from "../assets/J_CBS.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 mt-16 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left - About */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Berihun Tsegaye
          </h2>
          <p className="text-gray-600">Junior Core Banking Officer</p>
          <p className="text-gray-500">Amhara Bank S.C</p>
        </div>

        {/* Middle - Contact */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact</h2>
          <p className="flex items-center justify-center md:justify-start text-gray-600">
            <FaEnvelope className="mr-2" /> berhuntsegaye6@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start text-gray-600">
            <FaPhone className="mr-2" /> +251-945-943-340
          </p>
          <p className="flex items-center justify-center md:justify-start text-gray-600">
            <FaMapMarkerAlt className="mr-2" /> Addis Ababa, Ethiopia
          </p>
        </div>

        {/* Right - Socials */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Follow Me
          </h2>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-600">
            <a
              href="https://www.linkedin.com/in/berihun-tsegaye-826972217"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/bertsegaye"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com/your-fb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t pt-6">
        &copy; {new Date().getFullYear()} Berihun Tsegaye. All rights reserved.
      </div>
    </footer>
  );
}
