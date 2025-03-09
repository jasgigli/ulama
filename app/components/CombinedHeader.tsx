"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const CombinedHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Navigation links
  const navLinks = [
    { href: "/Home", text: "صفحۂ آغاز" },
    { href: "/services", text: "خدمات" },
    { href: "/about", text: "ہمارا تعارف" },
    { href: "/leaders", text: "رہنما" },
    { href: "/faq", text: "عمومی سوالات" },
    { href: "/contact", text: "ہم سے رابطہ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Go to homepage">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-blue-600 shadow">
              <Image
                src="/pic.png"
                alt="Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>
          <div className="text-left">
            <Link href="/">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                مجلس اتحاد العلماء
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                معرفت کا راستہ
              </p>
            </Link>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {link.text}
              <span className="absolute left-0 bottom-[-2px] h-0.5 w-full bg-blue-600 transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
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
      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
              aria-label="Close menu"
            >
              <FaTimes className="w-8 h-8" />
            </button>
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="relative group text-2xl font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {link.text}
                  <span className="absolute left-0 bottom-[-2px] h-0.5 w-full bg-blue-600 transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default CombinedHeader;
