"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Sparkles, Users, Trophy, Star } from "lucide-react";

export default function LaunchPage({ onLaunch }) {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunch = () => {
    setIsLaunching(true);
    setTimeout(() => {
      onLaunch();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B6B52] via-[#083D30] to-black text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Large background circles */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FFD8C2]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FBC5C5]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Logo/Icon Section */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-[#FFD8C2] to-[#FBC5C5] rounded-full blur-xl opacity-50"
              />
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-full border border-white/20">
                <Users className="w-16 h-16 text-[#FFD8C2]" />
              </div>
            </div>
          </motion.div>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD8C2] to-[#FBC5C5]">
                Welcome to
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white">
              Soft Skills Club
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mt-4">
              NIT Jamshedpur
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            🎉 We&aposre excited to unveil our brand new website! Join us on this journey of 
            communication.
          </motion.p>

          {/* Features Preview */}
          

          {/* Launch Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <AnimatePresence>
              {!isLaunching ? (
                <motion.button
                  onClick={handleLaunch}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(255, 216, 194, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-6 bg-gradient-to-r from-[#FFD8C2] to-[#FBC5C5] text-[#0B6B52] font-bold text-xl rounded-full shadow-2xl overflow-hidden"
                >
                  {/* Button background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FBC5C5] to-[#FFD8C2]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                    Launch Website
                    <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                  </span>
                </motion.button>
              ) : (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: 2 }}
                  className="flex items-center justify-center gap-4 text-2xl font-bold"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="w-8 h-8 text-[#FFD8C2]" />
                  </motion.div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD8C2] to-[#FBC5C5]">
                    Launching...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Coming Soon Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="text-white/60 mt-8 text-sm"
          >
            Prepare for an amazing experience • Est. 2007
          </motion.p>
        </div>
      </div>

      {/* Launch Animation Overlay */}
      <AnimatePresence>
        {isLaunching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-[#FFD8C2] via-white to-[#FBC5C5] flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ duration: 1.5, ease: "backOut" }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: [0, 360, 720] }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <Rocket className="w-24 h-24 text-[#0B6B52] mx-auto mb-4" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0B6B52]">
                Welcome!
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}