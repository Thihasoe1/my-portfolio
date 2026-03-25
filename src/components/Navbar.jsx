import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-nav rounded-2xl px-6 py-3 flex justify-between items-center transition-all duration-300 shadow-xl ${scrolled ? 'bg-slate-950/80 backdrop-blur-md' : 'bg-slate-900/50 backdrop-blur-sm border-transparent'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-300 to-accent-400">
              Saw Thi Ha Soe
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.href.substring(1))}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-brand-500/20 rounded-full border border-brand-500/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-full bg-slate-800/50 border border-slate-700/50"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2"
          >
            <div className="glass-panel rounded-2xl py-4 px-4 flex flex-col space-y-2 shadow-2xl border border-slate-700/50 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`py-3 rounded-xl transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "bg-brand-500/20 text-brand-300 border border-brand-500/30"
                      : "text-slate-300 hover:bg-slate-800/50"
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(link.href.substring(1));
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
