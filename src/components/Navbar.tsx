import { useState } from "react";
import profile from "../assets/profile.jpg";
import "../styles/navbar.css";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
      return newState;
    });
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-500 font-bold"
      : "text-gray-700 hover:text-blue-500 font-normal";

  return (
    <>
      <nav className="profile shadow-md fixed w-full z-50 bg-white">
        <div className="container mx-auto flex justify-between items-center p-2 sm:p-4">
          {/* Logo and Name */}
          <div className="flex items-center gap-4">
            <img
              className="block h-10 rounded-full"
              src={profile}
              alt="Profile"
            />
            <p className="text-sm md:text-base lg:text-lg font-semibold">
              My Portfolio
            </p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {["/", "blogs", "projects", "aboutMe", "contact"].map(
              (path, idx) => (
                <li key={idx}>
                  <NavLink to={path} className={navClass}>
                    {path === "/"
                      ? "Home"
                      : path.charAt(0).toUpperCase() + path.slice(1)}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="text-gray-700 focus:outline-none"
            >
              {menuOpen ? (
                <X className="hover:text-red-400 font-bold" size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-40 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <p className="text-lg font-semibold text-blue-600">Menu</p>
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Close menu"
              className="text-gray-700 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col px-6 py-4 space-y-4">
            {["/", "blogs", "projects", "aboutMe", "contact"].map(
              (path, idx) => (
                <li key={idx}>
                  <NavLink to={path} onClick={closeMenu} className={navClass}>
                    {path === "/"
                      ? "Home"
                      : path.charAt(0).toUpperCase() + path.slice(1)}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Backdrop overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 backdrop-blur-md bg-white/10 pointer-events-none z-30 md:hidden"
            aria-hidden="true"
          />
        )}
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
