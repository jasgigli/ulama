"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

const CombinedHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleSearch = () => setSearchOpen((prev) => !prev);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Navigation links
  const navLinks = [
    { href: "/Home", text: "صفحۂ آغاز" },
    { href: "/services", text: "خدمات" },
    { href: "/about", text: "ہمارا تعارف" },
    { href: "/leaders", text: "رہنما" },
    { href: "/faq", text: "عمومی سوالات" },
    { href: "/contact", text: "ہم سے رابطہ" },
  ];

  // Check if link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Link href="/" aria-label="Go to homepage">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:scale-105">
              <Image
                src="/pic.png"
                alt="Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>
          <div className="text-right">
            <Link href="/">
              <h1 className="text-xl md:text-2xl font-bold text-gradient">
                مجلس اتحاد العلماء
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                معرفت کا راستہ
              </p>
            </Link>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative group text-lg font-medium ${
                isActive(link.href)
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              } transition-colors duration-200`}
            >
              <motion.span
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {link.text}
              </motion.span>
              <span
                className={`absolute left-0 bottom-[-4px] h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100 ${
                  isActive(link.href) ? "scale-x-100" : ""
                }`}
              />
            </Link>
          ))}

          <button
            onClick={toggleSearch}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
            aria-label="Search"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleSearch}
            className="text-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            aria-label="Search"
          >
            <FaSearch className="w-5 h-5" />
          </button>

          <button
            onClick={toggleMenu}
            className="text-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 border-t border-gray-200"
          >
            <div className="container mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="تلاش کریں..."
                  className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  autoFocus
                />
                <button
                  onClick={toggleSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-br from-blue-50 to-white z-50 flex flex-col items-center justify-center"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Close menu"
            >
              <FaTimes className="w-8 h-8" />
            </button>

            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`relative group text-2xl font-medium ${
                      isActive(link.href)
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    } transition-colors duration-200 hover-lift`}
                  >
                    {link.text}
                    <span
                      className={`absolute left-0 bottom-[-4px] h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100 ${
                        isActive(link.href) ? "scale-x-100" : ""
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default CombinedHeader;
