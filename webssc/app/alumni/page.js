"use client";
import alumniData from "../jsonfiles/alumni.json";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: -40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.13, // Start after section animation
      duration: 0.6,
      type: "spring",
      stiffness: 40,
      ease: "easeInOut",
    },
  }),
  hover: {
    scale: 1.045,
    boxShadow: "0 8px 32px rgba(34,197,94,0.15)",
    transition: { duration: 0.13, ease: "easeInOut" },
  },
};

export default function Alumni() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f2fe] to-[#ffffff] w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
        >
          <h2 className="text-5xl font-extrabold text-black mb-3 tracking-tight drop-shadow">
            Our Alumni
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-green-400 via-indigo-400 to-green-600 rounded mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Meet some of our distinguished alumni who have made us proud!
          </p>
        </motion.div>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {alumniData.map((alumnus, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border-t-4 border-green-600 hover:border-green-400 transition-all duration-300 flex flex-col items-center p-7 group"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="w-36 h-36 mb-4">
                <img
                  src={alumnus.image}
                  alt={alumnus.name}
                  className="w-full h-full object-cover rounded-full border-4 border-indigo-100 shadow"
                />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-1">
                {alumnus.name}
              </h3>
              <p className="text-green-500 font-medium mb-2">{alumnus.role}</p>
              <p className="text-gray-500 italic text-center mb-4">
                {alumnus.quote}
              </p>
              <a
                href={alumnus.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-auto px-4 py-2 bg-gradient-to-r from-indigo-500 to-green-400 text-white font-semibold rounded-full shadow hover:from-green-400 hover:to-indigo-500 hover:text-indigo-900 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                </svg>
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
