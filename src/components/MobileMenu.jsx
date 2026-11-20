import { useEffect } from "react";


export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, setMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out md:hidden ${
                    menuOpen
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
    >
      <button
        type="button"
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center text-white text-3xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-full cursor-pointer hover:bg-white/10 transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <nav className="flex flex-col items-center space-y-6">
        {navLinks.map((link, idx) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl sm:text-3xl font-semibold text-gray-200 hover:text-blue-400 transition-all duration-300 transform ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${menuOpen ? idx * 75 : 0}ms` }}
          >
            {link.label}
          </a>
        ))}

        <div
          className={`pt-4 transform transition-all duration-300 ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${menuOpen ? navLinks.length * 75 : 0}ms` }}
        >
          <a
            href="/Niyonshuti-Blaise-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="border border-blue-500/50 text-blue-400 py-2.5 px-6 rounded-2xl text-lg font-medium hover:bg-blue-500/10 transition-colors inline-block"
          >
            Download CV
          </a>
        </div>
      </nav>
    </div>
  );
};
