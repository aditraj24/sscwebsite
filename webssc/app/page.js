"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import alumniData from "./jsonfiles/homepageAlumni.json";
import activitiesData from "./jsonfiles/homepageActivities.json";
import Link from "next/link";
import LaunchPage from "./launch";

const images = [
  "/homepageImages/memory1.jpeg",
  "/homepageImages/memory2.jpg",
  "/homepageImages/memory3.jpeg",
  "/homepageImages/memory4.jpeg",
  "/homepageImages/memory5.jpeg",
  "/homepageImages/memory6.jpeg",
];

export default function Home() {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLaunchPage, setShowLaunchPage] = useState(true);

  const handleLaunch = () => {
    setShowLaunchPage(false);
  };

  if (showLaunchPage) {
    return <LaunchPage onLaunch={handleLaunch} />;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B6B52] to-[#083D30] text-white px-6 py-20 relative overflow-hidden isolate">
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
                  "/homepageImages/heroImg2.png",
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
      <section
        className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-6 overflow-hidden"
        id="about"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#0B6B52]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#0B6B52]/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="text-xs font-semibold tracking-wider text-[#0B6B52] uppercase px-4 py-2 bg-[#0B6B52]/10 rounded-full">
              Our Story
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B6B52] to-emerald-400">
              Over The Years
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A decade-long journey transforming students into confident
            communicators and leaders.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tile 1 - Established */}
            <motion.div
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B6B52]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#0B6B52]/10 rounded-2xl text-[#0B6B52] group-hover:bg-[#0B6B52]/20 transition-colors">
                  <svg
                    className="w-8 h-8"
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Established 2007
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2007 by Dr. Rajiv Bhusan, the Soft Skills Club at
                  NIT Jamshedpur was created to help students master essential
                  communication skills through innovative training programs.
                </p>
              </div>
            </motion.div>

            {/* Tile 2 - Our Motto */}
            <motion.div
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B6B52]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#0B6B52]/10 rounded-2xl text-[#0B6B52] group-hover:bg-[#0B6B52]/20 transition-colors">
                  <svg
                    className="w-8 h-8"
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower students with confidence, public speaking
                  abilities, and interpersonal skills that transform them into
                  effective communicators and visionary leaders.
                </p>
              </div>
            </motion.div>

            {/* Tile 3 - Our Impact */}
            <motion.div
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B6B52]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#0B6B52]/10 rounded-2xl text-[#0B6B52] group-hover:bg-[#0B6B52]/20 transition-colors">
                  <svg
                    className="w-8 h-8"
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Impact
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, our club empowers hundreds of students annually to
                  excel in interviews, deliver powerful presentations, and
                  emerge as confident leaders in their professional journeys.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/about">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(11, 107, 82, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-[#0B6B52] to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Discover Our Story</span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-[#0B6B52] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Events Section */}
      <section
        className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-6 overflow-hidden"
        id="activities"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#0B6B52]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#0B6B52]/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4"
          >
            <span className="text-xs font-semibold tracking-wider text-[#0B6B52] uppercase px-4 py-2 bg-[#0B6B52]/10 rounded-full">
              Our Offerings
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B6B52] to-emerald-400">
              Activities We Organize
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Fueling minds and mics with creativity, confidence, and conversation
            through our premium events.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activitiesData.map((activity, idx) => (
              <motion.div
                key={activity.name}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onClick={() => setSelectedActivity(activity)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B6B52]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#0B6B52]/10 rounded-2xl text-[#0B6B52] text-2xl">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {activity.name}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {activity.shortDescription || activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/activities">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(11, 107, 82, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-[#0B6B52] to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Explore All Events</span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-[#0B6B52] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Premium Modal */}
        {selectedActivity && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-lg flex items-center justify-center p-4 z-50">
            <motion.div
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="grid lg:grid-cols-2">
                  <div className="relative h-full min-h-80 lg:min-h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B6B52]/30 to-transparent z-10"></div>
                    <img
                      src={selectedActivity.image}
                      alt={selectedActivity.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                        {selectedActivity.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10 overflow-y-auto max-h-[60vh] lg:max-h-[80vh]">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#0B6B52]/10 text-[#0B6B52] rounded-xl mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">
                        Event Details
                      </h4>
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {selectedActivity.description}
                    </p>

                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#0B6B52]/10 text-[#0B6B52] rounded-xl mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">
                        Rules & Guidelines
                      </h4>
                    </div>

                    <ul className="space-y-3 mb-25">
                      {selectedActivity.rules.map((rule, i) => (
                        <li key={i} className="flex items-start">
                          <span className="flex-shrink-0 w-5 h-5 mt-1 mr-2 bg-[#0B6B52]/10 text-[#0B6B52] rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-600">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </section>
      {/* Gallery Section */}
      <section
        className="relative bg-gradient-to-b from-white to-gray-50 py-24 px-6 overflow-hidden"
        id="gallery"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#0B6B52]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#0B6B52]/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="text-xs font-semibold tracking-wider text-[#0B6B52] uppercase px-4 py-2 bg-[#0B6B52]/10 rounded-full">
              Our Moments
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B6B52] to-emerald-400">
              Memories We Made
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Capturing the laughter, learning, and unforgettable moments from our
            journey together.
          </motion.p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <motion.div
                key={src}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setSelectedImage(src)}
              >
                {/* Image with hover effect */}
                <div className="relative overflow-hidden h-72">
                  <img
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-white/90 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#0B6B52]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                      <p className="text-white font-medium text-lg">
                        Click to see full image
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/memories">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(11, 107, 82, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-[#0B6B52] to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Visit Gallery</span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-[#0B6B52] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Full Image Popup Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-20"
                aria-label="Close image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image Container */}
              <div className="flex items-center justify-center h-full w-full">
                <img
                  src={selectedImage}
                  alt="Full size preview"
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </section>
      {/* Alumni Section */}
      <section
        className="relative bg-gradient-to-b from-gray-90 to-white py-24 px-6 overflow-hidden"
        id="alumni"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#0B6B52]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#0B6B52]/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="text-xs font-semibold tracking-wider text-[#0B6B52] uppercase px-4 py-2 bg-[#0B6B52]/10 rounded-full">
              Our Legacy
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B6B52] to-emerald-400">
              Our Alumni
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The brilliant minds who shaped our community and continue to inspire
            future generations.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniData.map((person, i) => (
              <motion.div
                key={person.name}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{person.role}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#0B6B52]/10 text-[#0B6B52] rounded-full hover:bg-[#0B6B52]/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="font-medium">Connect</span>
                    </a>
                    {person.company && (
                      <div className="text-sm text-gray-500">
                        <span className="block">Currently at</span>
                        <span className="font-medium">{person.company}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/alumni">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(11, 107, 82, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-[#0B6B52] to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Explore Alumni Network</span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-[#0B6B52] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Contact Us Section */}
      <section
        className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-6 overflow-hidden"
        id="contact"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0B6B52]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#0B6B52]/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="text-xs font-semibold tracking-wider text-[#0B6B52] uppercase px-4 py-2 bg-[#0B6B52]/10 rounded-full">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B6B52] to-emerald-400">
              Contact Us
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Have questions or ideas? Want to collaborate or join our vibrant
            community? We&apos;d love to hear from you.
          </motion.p>

          <div className="flex flex-col items-center">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a
                href="mailto:ssc@nitjsr.ac.in"
                className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#0B6B52]/10 text-[#0B6B52] rounded-full group-hover:bg-[#0B6B52]/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg font-semibold text-gray-800">
                  ssc@nitjsr.ac.in
                </span>
              </a>
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-6">
                Connect With Us
              </h3>
              <div className="flex justify-center gap-6">
                {[
                  {
                    icon: Instagram,
                    color: "hover:text-pink-500",
                    link: "https://instagram.com/yourclubhandle",
                  },
                  {
                    icon: Facebook,
                    color: "hover:text-blue-600",
                    link: "https://facebook.com/yourclubhandle",
                  },
                  {
                    icon: Linkedin,
                    color: "hover:text-blue-500",
                    link: "https://linkedin.com/company/yourclubhandle",
                  },
                  {
                    icon: Youtube,
                    color: "hover:text-red-600",
                    link: "https://youtube.com/yourclubhandle",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[#0B6B52] ${social.color} transition-colors`}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  >
                    <social.icon className="w-8 h-8" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(11, 107, 82, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#0B6B52] to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Join Our Community</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-[#0B6B52] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
