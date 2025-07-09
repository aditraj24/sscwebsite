"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B6B52] text-white pt-12 pb-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* SSC Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-30 h-30 mb-4">
            <Image
              src="/ssclogo.png"
              alt="SSC Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">
            NIT Jamshedpur <br />
            Empowering students since 2012
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-100">
            <Mail className="w-4 h-4" />
            <a href="mailto:ssc@nitjsr.ac.in" className="hover:underline">
              ssc@nitjsr.ac.in
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/activities" className="hover:underline">
                Activities
              </Link>
            </li>
            <li>
              <Link href="/alumni" className="hover:underline">
                Alumni
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 hover:scale-110 hover:text-pink-400 transition" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 hover:scale-110 hover:text-blue-400 transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 hover:scale-110 hover:text-sky-300 transition" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 hover:scale-110 hover:text-red-400 transition" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Soft Skills Club, NIT Jamshedpur. All
        rights reserved.
      </div>
    </footer>
  );
}
