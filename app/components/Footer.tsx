// components/Footer.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Footer links
  const footerLinks = [
    {
      title: "روابط",
      links: [
        { text: "صفحۂ آغاز", href: "/Home" },
        { text: "خدمات", href: "/services" },
        { text: "ہمارا تعارف", href: "/about" },
        { text: "رہنما", href: "/leaders" },
        { text: "عمومی سوالات", href: "/faq" },
      ],
    },
    {
      title: "رابطہ",
      links: [
        { text: "ہم سے رابطہ", href: "/contact" },
        { text: "رضاکار بنیں", href: "#" },
        { text: "عطیات", href: "#" },
        { text: "کیریئر", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 pt-12 pb-6 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
                <Image
                  src="/pic.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gradient">
                  مجلس اتحاد العلماء
                </h2>
                <p className="text-sm text-gray-600">معرفت کا راستہ</p>
              </div>
            </Link>
            <p className="text-gray-600 mb-4">
              مجلس اتحاد العلماء خالصہ 2 قاضی آباد پشاور میں واقع علماء اور
              اماموں کی ایک نمائندہ تنظیم ہے۔
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors duration-200 hover-lift"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors duration-200 hover-lift"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors duration-200 hover-lift"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors duration-200 hover-lift"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-bold mb-4 text-gray-900">
              ہم سے رابطہ کریں
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-gray-600">خالصہ 2 قاضی آباد، پشاور</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <FaPhone />
                </div>
                <span className="text-gray-600">+92 123 4567890</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <FaEnvelope />
                </div>
                <span className="text-gray-600">info@majlisulama.org</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 pb-4 mb-6"
        >
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-bold mb-2 text-gray-900">
              ہمارے نیوز لیٹر کے لیے سبسکرائب کریں
            </h3>
            <p className="text-gray-600 mb-4">
              تازہ ترین خبروں اور اپڈیٹس کے لیے ہمارے نیوز لیٹر میں شامل ہوں
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="آپ کا ای میل ایڈریس"
                className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                سبسکرائب
              </button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} مجلس اتحاد العلماء۔ جملہ حقوق محفوظ ہیں۔
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
