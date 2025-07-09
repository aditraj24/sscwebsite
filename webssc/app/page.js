"use client";
import { motion } from "framer-motion";
import { Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import alumniData from "./jsonfiles/alumni.json";
import Link from "next/link";
const activities = [
  "Debate",
  "Extempore",
  "PPT Presentation",
  "Story Writing",
  "Personal Interviews",
  "Report Writing",
  "Group Discussions",
];

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
];
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B6B52] to-[#083D30] text-white px-6 py-20 relative overflow-hidden isolate">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            className="absolute top-1/4 -left-20 w-[300px] h-[300px] bg-[#FFD8C2] rounded-full blur-[100px] opacity-20"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-20 w-[400px] h-[400px] bg-[#FBC5C5] rounded-full blur-[100px] opacity-20"
            animate={{
              x: [0, -50, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />

          {/* Floating Bubbles - Background only */}
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 80],
                x: [0, (Math.random() - 0.5) * 60],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              <span className="text-white/80">Empowering Students Through</span>
              <br />
              <span className="text-[#FFD8C2] text-4xl md:text-6xl font-extrabold">
                Communication
              </span>{" "}
              &{" "}
              <span className="text-[#FBC5C5] text-4xl md:text-6xl font-extrabold">
                Leadership
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-white/90">
              Transform your potential into excellence with our proven programs
            </h2>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/sponsor">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 20px rgba(255, 216, 194, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 500, // Increased stiffness for faster response
                    damping: 15,
                    duration: 0.2, // Added explicit duration
                  }}
                  className="bg-white text-[#0B6B52] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Sponsor Our Mission
                </motion.div>
              </Link>
              <Link href="/about">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 500, // Increased stiffness for faster response
                    damping: 15,
                    duration: 0.2, // Added explicit duration
                  }}
                  className="border-2 border-white/30 px-8 py-4 rounded-full font-semibold shadow-md hover:bg-white/5 hover:border-white/50 transition-all backdrop-blur-sm"
                >
                  Know More
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Modern Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative max-w-[400px] md:max-w-[450px] mx-auto"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                {[
                  "/homepageImages/heroImg1.avif",
                  "/homepageImages/heroImg3.avif",
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: i % 2 === 0 ? 20 : -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + i * 0.1,
                      ease: "backOut",
                    }}
                    className="group relative"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        zIndex: 10,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                      }}
                      className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 relative transition-all duration-500"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        loading="eager"
                        style={{ maxWidth: "200px" }}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.1)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Column 2 with vertical offset */}
              <div className="flex flex-col gap-4 mt-8">
                {[
                  "/homepageImages/heroImg2.jpg",
                  "/homepageImages/heroImg4.avif",
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: i % 2 === 0 ? -20 : 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.7 + i * 0.1,
                      ease: "backOut",
                    }}
                    className="group relative"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        zIndex: 10,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                      }}
                      className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 relative transition-all duration-500"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        loading="eager"
                        style={{ maxWidth: "200px" }}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.1)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* About Section */}
      <section className="bg-white py-20 px-6" id="about">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0B6B52] mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A journey contributing to students' personality development
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Tile 1 - Established */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-[#0B6B52]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 bg-[#0B6B52]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0B6B52]/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#0B6B52]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0B6B52] mb-3">
                  Established 2012
                </h3>
                <p className="text-gray-600 flex-grow">
                  Founded in 2012 by Dr. Rajiv Bhusan, the Soft Skills Club at
                  NIT Jamshedpur was created to help students master essential
                  communication skills.
                </p>
              </div>
            </motion.div>

            {/* Tile 2 - Our Motto */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-[#0B6B52]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 bg-[#0B6B52]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0B6B52]/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#0B6B52]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0B6B52] mb-3">
                  Our Motto
                </h3>
                <p className="text-gray-600 flex-grow">
                  To empower students with confidence, public speaking
                  abilities, and interpersonal skills that transform them into
                  effective communicators and leaders.
                </p>
              </div>
            </motion.div>

            {/* Tile 3 - Our Impact */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-[#0B6B52]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 bg-[#0B6B52]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0B6B52]/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#0B6B52]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0B6B52] mb-3">
                  Our Impact
                </h3>
                <p className="text-gray-600 flex-grow">
                  Today, our club empowers hundreds of students to crack
                  interviews, present effectively, and become the confident
                  leaders of tomorrow.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-block px-8 py-3 bg-[#0B6B52] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Know More
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
      {/*events*/}
      <section className="bg-gray-100 py-20 px-6" id="activities">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0B6B52] mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Activities We Organize
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {activities.map((activity, idx) => (
              <motion.div
                key={activity}
                className="bg-white p-6 rounded-2xl shadow-xl text-[#0B6B52] font-semibold text-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:rotate-1"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {activity}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/activities">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-block px-8 py-3 bg-[#0B6B52] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Explore Events
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/*gallery */}
      <section className="bg-white py-20 px-6" id="gallery">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0B6B52] mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Memories We Made
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <motion.div
                key={src}
                className="overflow-hidden rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <img
                  src={src}
                  alt={`Memory ${i + 1}`}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/memories">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-block px-8 py-3 bg-[#0B6B52] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Visit Gallery
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
      {/*our alumni */}
      <section className="bg-gray-100 py-20 px-6" id="alumni">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0B6B52] mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Alumni
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {alumniData.map((person, i) => (
              <motion.div
                key={person.name}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#0B6B52]">
                    {person.name}
                  </h3>
                  <p className="text-gray-600">{person.role}</p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-3"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/alumni">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-block px-8 py-3 bg-[#0B6B52] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Know Better
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Contact Us Section */}
      <section className="bg-white py-20 px-6" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0B6B52] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Have any questions or ideas? Want to collaborate or join the club?
            We'd love to hear from you.
          </motion.p>

          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="mailto:ssc@nitjsr.ac.in"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#0B6B52]/10 text-[#0B6B52] font-semibold rounded-full hover:bg-[#0B6B52]/20 transition-all"
            >
              <Mail className="w-5 h-5" />
              ssc@nitjsr.ac.in
            </a>
          </motion.div>

          <div className="mt-10 flex justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com/yourclubhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B6B52] hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              href="https://facebook.com/yourclubhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B6B52] hover:text-blue-400 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/company/yourclubhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B6B52] hover:text-sky-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              href="https://youtube.com/yourclubhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B6B52] hover:text-red-400 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </motion.a>
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-block px-8 py-3 bg-[#0B6B52] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Join Our Community
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
