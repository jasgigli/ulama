// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <Link href="/">
          <div className="flex items-center mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-blue-600">
              <Image src="/pic.png" alt="Logo" fill className="object-cover" />
            </div>
            <div className="ml-3 text-center">
              <h2 className="text-xl font-bold text-gray-900">
                مجلس اتحاد العلماء
              </h2>
              <p className="text-sm text-gray-600">معرفت کا راستہ</p>
            </div>
          </div>
        </Link>
        <div className="flex space-x-6 mb-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <div className="border-t border-gray-200 pt-4 w-full">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} مجلس اتحاد العلماء. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
