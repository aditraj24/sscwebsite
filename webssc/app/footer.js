"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Mail,
  Send,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0B6B52] to-[#083D30] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* SSC Info - Enhanced with floating effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="space-y-4"
          >
            <div className="relative w-40 h-40 mb-4 hover:animate-float">
              <Image
                src="/ssclogo.png"
                alt="SSC Logo"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
            <p className="text-sm text-gray-200 leading-relaxed">
              NIT Jamshedpur <br />
              Empowering students since 2007
            </p>
            <div className="mt-4 flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </motion.div>
              <a
                href="mailto:ssc@nitjsr.ac.in"
                className="hover:underline text-gray-300 hover:text-white transition-colors text-sm"
              >
                ssc@nitjsr.ac.in
              </a>
            </div>
          </motion.div>

          {/* Quick Links - Enhanced with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/activities", label: "Activities" },
                { href: "/alumni", label: "Alumni" },
                { href: "/contact", label: "Contact Us" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={link.href}
                    className="group relative text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media Links - Enhanced with floating bubbles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex items-center gap-5">
              {[
                {
                  icon: Instagram,
                  href: "https://instagram.com",
                  color: "hover:text-pink-400",
                },
                {
                  icon: Facebook,
                  href: "https://facebook.com",
                  color: "hover:text-blue-400",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  color: "hover:text-sky-300",
                },
                {
                  icon: Youtube,
                  href: "https://youtube.com",
                  color: "hover:text-red-400",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.icon.name}
                  className="relative group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon
                    className={`w-6 h-6 text-gray-300 transition-all ${social.color}`}
                  />
                  <span className="absolute -z-10 inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Email Subscription - Enhanced with floating button */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-gray-300">
                Subscribe to our newsletter
              </h4>
              <motion.form className="relative" whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-3 px-5 pr-12 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#0B6B52] p-2 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </motion.form>
            </div>
          </motion.div>

          {/* Additional Links/Contact - Enhanced with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">Get Involved</h3>
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <p className="text-sm text-gray-300 mb-4">
                Interested in joining our club or partnering with us?
              </p>
              <Link href="/contact">
                <motion.button
                  className="w-full bg-white text-[#0B6B52] py-2 px-4 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Our Community
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Text - Enhanced with subtle animation */}
        <motion.div
          className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="mb-2">
            © {new Date().getFullYear()} Soft Skills Club, NIT Jamshedpur. All
            rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-xs">
            <Link
              href="./privacy.pdf"
              className="hover:text-white hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="./terms.pdf"
              className="hover:text-white hover:underline transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="./sitemap.pdf"
              className="hover:text-white hover:underline transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
