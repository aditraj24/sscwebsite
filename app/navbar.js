"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const pathname = usePathname();
  const navRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Activities", path: "/activities" },
    { name: "Memories", path: "/memories" },
    { name: "Alumni", path: "/alumni" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
          : "bg-[#006A53]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Left */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10"
            >
              <Image
                src="/ssclogo.png"
                alt="SSC Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-[#0B6B52]" : "text-white"
              }`}
            >
              Soft Skills Club
            </motion.span>
          </Link>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial="hidden"
                animate="show"
                variants={containerVariants}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative"
              >
                <Link
                  href={link.path}
                  className={`relative z-10 px-2 py-1 text-sm font-medium transition duration-200 ${
                    pathname === link.path
                      ? scrolled
                        ? "text-[#0B6B52] font-semibold"
                        : "text-white font-semibold"
                      : scrolled
                      ? "text-gray-700 hover:text-[#0B6B52]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>

                {hoveredLink === index && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-[#FF7F50]/20 rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}

                {pathname === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF7F50]"
                    layoutId="navUnderline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right CTA: Sponsor Us */}
          <motion.div
            className="hidden md:flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/sponsor"
              className="ml-4 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Sponsor Us</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#FF6347] to-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${
                scrolled ? "text-[#0B6B52]" : "text-white"
              } focus:outline-none p-2 rounded-full`}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <motion.path
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <motion.path
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-xl overflow-hidden"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="px-4 py-3 space-y-2"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                      pathname === link.path
                        ? "bg-[#0B6B52] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              {/* Mobile Sponsor Us Button */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/sponsor"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mt-2 px-4 py-3 rounded-lg text-center text-sm font-semibold bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white hover:shadow-md transition"
                >
                  Sponsor Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
