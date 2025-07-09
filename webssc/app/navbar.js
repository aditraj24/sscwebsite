"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Activities", path: "/activities" },
    { name: "Memories", path: "/memories" },
    { name: "Alumni", path: "/alumni" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-[#006A53]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Left */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/ssclogo.png" // ✅ make sure the file is in /public
                alt="SSC Logo"
                fill
                className="object-contain"
              />
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-[#0B6B52]" : "text-white"
              }`}
            >
              Soft Skills Club
            </span>
          </Link>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative group text-sm font-medium transition duration-200 ${
                  pathname === link.path
                    ? scrolled
                      ? "text-[#0B6B52]"
                      : "text-white"
                    : scrolled
                    ? "text-gray-700"
                    : "text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                    scrolled ? "bg-[#0B6B52]" : "bg-white"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right CTA: Sponsor Us */}
          <div className="hidden md:flex">
            <Link
              href="/sponsor"
              className="ml-4 px-4 py-2 rounded-full text-sm font-semibold shadow-md bg-[#FF7F50] text-white hover:bg-[#ff5e2e] transition"
            >
              Sponsor Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${
                scrolled ? "text-[#0B6B52]" : "text-white"
              } focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white ${
          mobileMenuOpen ? "max-h-[500px] shadow-md" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
                pathname === link.path
                  ? "bg-[#0B6B52] text-white"
                  : "text-gray-700 hover:bg-[#0B6B52] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile Sponsor Us Button */}
          <Link
            href="/sponsor"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 rounded-md text-center text-sm font-semibold bg-[#FF7F50] text-white hover:bg-[#ff5e2e] transition"
          >
            Sponsor Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
