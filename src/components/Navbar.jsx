import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.85)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="font-mono text-lg sm:text-xl font-bold text-white tracking-wide hover:opacity-90 transition-opacity"
          >
            Niyo <span className="text-blue-400">Blaise</span>
          </a>

          {/* mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="w-10 h-10 flex items-center justify-center text-white text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-lg cursor-pointer md:hidden transition-colors"
          >
            {menuOpen ? (
              <span className="leading-none">&times;</span>
            ) : (
              <span className="leading-none">&#9776;</span>
            )}
          </button>

          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
