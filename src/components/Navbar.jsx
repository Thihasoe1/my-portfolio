import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">Portfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
