import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Mail } from "lucide-react";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-0 group">
      <img
        src="Spectrum (4).png"
        alt="Logo"
        className="w-20 h-20 object-contain"
      />{" "}
      {/* Adjust the size here */}
      <span className="font-heading font-bold text-xl text-blue-500">
        Spectrum Infotech
      </span>
    </Link>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`
          absolute md:relative top-full right-0 md:top-auto
          bg-white md:bg-transparent
          shadow-lg md:shadow-none
          rounded-xl md:rounded-none
          p-4 md:p-0
          mt-2 md:mt-0
          w-48 md:w-auto
          transition-all duration-200 ease-in-out
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
          }
          md:block
          z-50
        `}
      >
        <ul className="flex flex-col md:flex-row gap-2 md:gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  isActive(link.to)
                    ? "text-primary-600 font-semibold bg-primary-50 md:bg-transparent"
                    : "text-gray-600 hover:text-primary-600 hover:bg-primary-50 md:hover:bg-transparent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-primary-200">
              Contact Us
            </h3>
            <p className="text-lg">
              Phone:{" "}
              <a
                href="tel:+919822035322"
                className="text-primary-200 hover:text-white transition-colors"
              >
                9822035322
              </a>
            </p>
            <p className="text-lg">Location: Mukundnagar, Pune</p>
            <p className="text-lg">Timings: Mon to Sat, 10:00 AM - 8:00 PM</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-primary-200">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://www.facebook.com/your-facebook-page"
                className="text-primary-200 hover:text-white transition-all"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/spectrum_comp/"
                className="text-primary-200 hover:text-white transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-primary-200">
              Get in Touch
            </h3>
            <p className="text-lg mb-4">
              Have questions or need assistance? Reach out to us directly!
            </p>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 text-lg mb-4">
                <Mail className="w-6 h-6 text-primary-200" />
                <a
                  href="mailto:sg_mehta@yahoo.co.in"
                  className="text-primary-200 hover:text-white transition-all"
                >
                  sg_mehta@yahoo.co.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "sticky-header py-2 shadow-md" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Logo />
            <Navigation />
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
