"use client";
import { motion } from "framer-motion";
import { Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import alumniData from "./jsonfiles/alumni.json";

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
      {/*hero section */}
      <section className="min-h-screen flex items-center justify-center bg-[#0B6B52] text-white px-6 py-20 relative overflow-hidden">
        {/* Animated background glow */}
        <motion.div
          className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-pink-300 rounded-full blur-[120px] opacity-30 z-0"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Empowering Students with <br />
              <span className="text-[#FFD8C2]">Communication</span> &{" "}
              <span className="text-[#FBC5C5]">Leadership Skills</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-6">
              Learn. Express. Lead.
            </h2>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0B6B52] px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                Sponsor Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-[#0B6B52] transition"
              >
                Know More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - 3D Tile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-br from-[#FFD8C2] to-[#FBC5C5] p-6 rounded-3xl shadow-2xl max-w-sm mx-auto transform perspective-1000 rotate-x-6 rotate-y-3 hover:rotate-y-0 hover:rotate-x-0 transition-all duration-500"
          >
            <img
              src="/hero-image.png"
              alt="Hero Visual"
              className="rounded-xl shadow-md"
            />
            <div className="mt-4 text-[#0B6B52] font-semibold text-lg text-center">
              Explore the Leader in You
            </div>
          </motion.div>
        </div>
      </section>

      {/*about*/}
      <section className="bg-white py-20 px-6" id="about">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0B6B52] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Founded in 2012 by Dr. Rajiv Bhusan, the Soft Skills Club at NIT
            Jamshedpur was created to help students master the art of public
            speaking, interpersonal communication, and confidence. Today, our
            club empowers hundreds of students to crack interviews, present
            effectively, and become future leaders.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-[#0B6B52] text-white font-semibold rounded-full shadow-lg"
          >
            Explore More
          </motion.button>
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-6 py-3 bg-[#0B6B52] text-white font-semibold rounded-full shadow-md"
          >
            Explore All
          </motion.button>
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-6 py-3 bg-[#0B6B52] text-white font-semibold rounded-full shadow-md"
          >
            Know Our Past
          </motion.button>
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
        </div>
      </section>
      {/*contact us*/}
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

          <motion.a
            href="mailto:ssc@nitjsr.ac.in"
            className="inline-flex items-center gap-2 text-[#0B6B52] font-semibold underline underline-offset-4 hover:text-[#FBC5C5] transition"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-5 h-5" />
            ssc@nitjsr.ac.in
          </motion.a>

          <div className="mt-10 flex justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://instagram.com"
              target="_blank"
              className="text-[#0B6B52] hover:text-[#FBC5C5]"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://facebook.com"
              target="_blank"
              className="text-[#0B6B52] hover:text-[#FBC5C5]"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com"
              target="_blank"
              className="text-[#0B6B52] hover:text-[#FBC5C5]"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://youtube.com"
              target="_blank"
              className="text-[#0B6B52] hover:text-[#FBC5C5]"
            >
              <Youtube className="w-6 h-6" />
            </motion.a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-6 py-3 bg-[#0B6B52] text-white font-semibold rounded-full shadow-md"
          >
            Join Our Community
          </motion.button>
        </div>
      </section>
    </>
  );
}
