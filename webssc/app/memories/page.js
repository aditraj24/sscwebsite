"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Memories() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  // Sample memories data - you can replace with real data
  const memories = [
    {
      id: 1,
      title: "Leadership Workshop 2024",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      venue: "Main Auditorium, NIT Jamshedpur",
      organizer: "Prof. Dr. Rajeev Bhushan",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      description:
        "An inspiring workshop where students learned essential leadership skills through interactive sessions and team-building activities. The event featured renowned speakers from the industry who shared their experiences and insights on effective leadership in the modern workplace.",
      longDescription:
        "The Leadership Workshop 2024 was a comprehensive day-long event designed to equip students with essential leadership skills for their future careers. The workshop began with an opening ceremony featuring the Director of NIT Jamshedpur, followed by interactive sessions on team management, decision-making, and communication strategies.\n\nKey highlights included:\n- Interactive case studies from real business scenarios\n- Role-playing exercises for conflict resolution\n- Networking sessions with industry leaders\n- Certificate distribution ceremony\n\nStudents participated in various activities including team challenges, leadership simulations, and group discussions. The event concluded with a panel discussion featuring successful alumni who shared their leadership journey and provided valuable career advice.",
      category: "Workshop",
      participants: 45,
      tags: ["Leadership", "Team Building", "Skills Development"],
      images: [
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      ],
      highlights: [
        "Interactive leadership simulations",
        "Industry expert presentations",
        "Team building exercises",
        "Certificate distribution",
      ],
      feedback:
        "The workshop was incredibly insightful and practical. I learned valuable skills that I can apply in my career. - Priya Sharma, 3rd Year CSE",
    },
    {
      id: 2,
      title: "Public Speaking Competition",
      date: "February 28, 2024",
      time: "2:00 PM - 6:00 PM",
      venue: "Seminar Hall 1, Academic Block",
      organizer: "Dr. Meera Patel",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      description:
        "Students showcased their oratory skills in a competitive environment, building confidence and communication abilities.",
      longDescription:
        "The Public Speaking Competition 2024 was a thrilling event that brought together the most talented speakers from across all departments. The competition featured multiple rounds including impromptu speaking, prepared speeches, and debate sessions.\n\nEvent Structure:\n- Round 1: Prepared Speech (5 minutes)\n- Round 2: Impromptu Speaking (3 minutes)\n- Round 3: Debate Session (15 minutes)\n- Final Round: Persuasive Speech (7 minutes)\n\nJudges included faculty members and industry professionals who evaluated participants on content, delivery, body language, and audience engagement. The competition not only tested speaking skills but also critical thinking and quick response abilities.",
      category: "Competition",
      participants: 32,
      tags: ["Public Speaking", "Confidence", "Communication"],
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      ],
      highlights: [
        "Multiple competition rounds",
        "Expert judging panel",
        "Cash prizes for winners",
        "Certificate for all participants",
      ],
      feedback:
        "This competition helped me overcome my fear of public speaking and improved my confidence significantly. - Rahul Verma, 2nd Year ECE",
    },
    {
      id: 3,
      title: "Industry Connect Meet",
      date: "January 20, 2024",
      time: "9:00 AM - 5:00 PM",
      venue: "Conference Center, NIT Jamshedpur",
      organizer: "Prof. Amit Singh",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      description:
        "A networking event connecting students with industry professionals to understand real-world soft skills requirements.",
      longDescription:
        "The Industry Connect Meet 2024 was a landmark event that bridged the gap between academia and industry. Representatives from leading companies including TCS, Infosys, Wipro, and Tata Steel participated in this comprehensive networking and learning event.\n\nEvent Highlights:\n- Company presentations and Q&A sessions\n- Mock interview sessions with HR professionals\n- Resume building workshops\n- Networking lunch with industry leaders\n- Panel discussion on 'Future of Work'\n\nStudents had the opportunity to interact directly with hiring managers, understand industry expectations, and build professional relationships. The event also featured skill assessment sessions and career counseling.",
      category: "Networking",
      participants: 60,
      tags: ["Networking", "Industry", "Professional Development"],
      images: [
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      ],
      highlights: [
        "Direct interaction with industry leaders",
        "Mock interview sessions",
        "Resume building workshops",
        "Career counseling sessions",
      ],
      feedback:
        "This event opened my eyes to industry expectations and helped me understand what skills I need to develop. - Anjali Gupta, 4th Year ME",
    },
    {
      id: 4,
      title: "Creative Problem Solving",
      date: "December 10, 2023",
      time: "11:00 AM - 3:00 PM",
      venue: "Innovation Lab, Department of CSE",
      organizer: "Dr. Sanjay Kumar",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      description:
        "Students engaged in innovative problem-solving challenges, developing critical thinking and creativity skills.",
      longDescription:
        "The Creative Problem Solving workshop was an innovative event that challenged students to think outside the box and develop creative solutions to real-world problems. The workshop used design thinking methodology and hands-on activities to enhance problem-solving skills.\n\nWorkshop Activities:\n- Design thinking exercises\n- Brainstorming sessions\n- Prototype development\n- Solution presentation\n- Peer feedback sessions\n\nStudents worked in teams to solve problems related to sustainability, technology, and social impact. The workshop emphasized collaboration, creativity, and practical application of theoretical knowledge.",
      category: "Workshop",
      participants: 38,
      tags: ["Problem Solving", "Creativity", "Critical Thinking"],
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      ],
      highlights: [
        "Design thinking methodology",
        "Hands-on problem solving",
        "Team collaboration",
        "Solution presentation",
      ],
      feedback:
        "This workshop completely changed my approach to problem-solving. I now think more creatively and systematically. - Vikram Singh, 3rd Year CSE",
    },
    {
      id: 5,
      title: "Cultural Exchange Program",
      date: "November 25, 2023",
      time: "6:00 PM - 10:00 PM",
      venue: "Open Air Theater, NIT Jamshedpur",
      organizer: "Prof. Lakshmi Devi",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      description:
        "A celebration of diversity through cultural exchange, promoting understanding and collaboration among students.",
      longDescription:
        "The Cultural Exchange Program was a vibrant celebration of India's diverse cultural heritage. Students from different states and backgrounds came together to showcase their traditions, music, dance, and cuisine.\n\nProgram Highlights:\n- Traditional dance performances\n- Folk music concerts\n- Cultural fashion show\n- Regional cuisine stalls\n- Cultural quiz competition\n- Traditional games and activities\n\nThe event featured performances from various regions including Punjab, Kerala, Rajasthan, and North East India. Students learned about different cultures, traditions, and customs, promoting unity in diversity.",
      category: "Cultural",
      participants: 55,
      tags: ["Cultural Exchange", "Diversity", "Collaboration"],
      images: [
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      ],
      highlights: [
        "Traditional dance performances",
        "Folk music concerts",
        "Cultural fashion show",
        "Regional cuisine stalls",
      ],
      feedback:
        "This event helped me understand and appreciate the rich cultural diversity of our country. - Meera Patel, 2nd Year CE",
    },
    {
      id: 6,
      title: "Mock Interview Sessions",
      date: "October 15, 2023",
      time: "10:00 AM - 2:00 PM",
      venue: "Placement Cell, NIT Jamshedpur",
      organizer: "Dr. Priya Sharma",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      description:
        "Students practiced interview skills with industry professionals, gaining valuable feedback and confidence.",
      longDescription:
        "The Mock Interview Sessions provided students with a realistic interview experience to prepare them for their upcoming placement season. Industry professionals from various sectors conducted mock interviews and provided detailed feedback.\n\nSession Structure:\n- Technical interview rounds\n- HR interview simulations\n- Group discussion sessions\n- Resume review and feedback\n- Interview tips and strategies\n\nStudents received personalized feedback on their communication skills, technical knowledge, body language, and overall interview performance. The sessions helped build confidence and identify areas for improvement.",
      category: "Training",
      participants: 42,
      tags: ["Interview Skills", "Professional Development", "Confidence"],
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      ],
      highlights: [
        "Realistic interview simulations",
        "Expert feedback sessions",
        "Resume review",
        "Interview strategies",
      ],
      feedback:
        "The mock interviews helped me understand my strengths and weaknesses. I feel much more confident now. - Arjun Reddy, 4th Year EEE",
    },
  ];

  const carouselMemories = memories.slice(0, 3);

  useEffect(() => {
    // Auto-advance carousel
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % carouselMemories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselMemories.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-[#0B6B52] mb-6"
              >
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B6B52] to-[#083D30]">
                  Memories
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-[#083D30] max-w-3xl mx-auto leading-relaxed"
              >
                Relive the moments that shaped our journey. From workshops to
                competitions, every memory is a step towards personal and
                professional growth.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Featured Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <h2 className="text-3xl font-bold text-[#0B6B52] text-center mb-12">
            Featured Memories
          </h2>

          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCarouselIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${carouselMemories[currentCarouselIndex].image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-2xl">
                      <span className="inline-block px-3 py-1 bg-[#0B6B52] text-white text-sm font-medium rounded-full mb-4">
                        {carouselMemories[currentCarouselIndex].category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        {carouselMemories[currentCarouselIndex].title}
                      </h3>
                      <p className="text-lg mb-4 opacity-90">
                        {carouselMemories[currentCarouselIndex].description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#FFD8C2]">
                          {carouselMemories[currentCarouselIndex].date}
                        </span>
                        <span className="text-[#FFD8C2]">
                          {carouselMemories[currentCarouselIndex].participants}{" "}
                          participants
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselMemories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCarouselIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCarouselIndex
                      ? "bg-[#FFD8C2] scale-125"
                      : "bg-[#FFD8C2]/50 hover:bg-[#FFD8C2]/75"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentCarouselIndex(
                  (prev) =>
                    (prev - 1 + carouselMemories.length) %
                    carouselMemories.length
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#0B6B52]/20 hover:bg-[#0B6B52]/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentCarouselIndex(
                  (prev) => (prev + 1) % carouselMemories.length
                )
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#0B6B52]/20 hover:bg-[#0B6B52]/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* All Memories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <h2 className="text-3xl font-bold text-[#0B6B52] text-center mb-12">
            Over The Years
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memories.map((memory) => (
              <motion.div
                key={memory.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedMemory(memory)}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-[#0B6B52] text-white text-sm font-medium rounded-full">
                        {memory.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-[#FFD8C2]/90 text-[#0B6B52] text-sm font-medium rounded-full">
                        {memory.participants} participants
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0B6B52] mb-2 group-hover:text-[#FBC5C5] transition-colors duration-300">
                      {memory.title}
                    </h3>
                    <p className="text-[#083D30] mb-4 line-clamp-3">
                      {memory.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#FFD8C2]">
                        {memory.date}
                      </span>
                      <div className="flex space-x-1">
                        {memory.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-[#FFD8C2] text-[#0B6B52] text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Memory Popup */}
        <AnimatePresence>
          {selectedMemory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMemory(null)}
            >
              <motion.div
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header with Hero Image */}
                <div className="relative">
                  <img
                    src={selectedMemory.image}
                    alt={selectedMemory.title}
                    className="w-full h-80 md:h-96 object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <button
                    onClick={() => setSelectedMemory(null)}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 transition-all duration-300 shadow-lg"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-[#0B6B52] text-white text-sm font-medium rounded-full shadow-lg">
                      {selectedMemory.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                      {selectedMemory.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-[#FFD8C2]">
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {selectedMemory.date}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {selectedMemory.time}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        {selectedMemory.venue}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Event Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Event Overview
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {selectedMemory.description}
                      </p>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Detailed Description
                      </h3>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {selectedMemory.longDescription}
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Event Info Card */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Event Information
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#0B6B52] mr-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <span className="text-gray-700">
                              <strong>Organizer:</strong>{" "}
                              {selectedMemory.organizer}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#0B6B52] mr-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                            <span className="text-gray-700">
                              <strong>Participants:</strong>{" "}
                              {selectedMemory.participants}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#0B6B52] mr-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                              />
                            </svg>
                            <span className="text-gray-700">
                              <strong>Category:</strong>{" "}
                              {selectedMemory.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights Card */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {selectedMemory.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-[#0B6B52] mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Tags
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMemory.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#FFD8C2] text-[#0B6B52] text-sm rounded-full hover:bg-[#FFD8C2]/20 transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Event Gallery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {selectedMemory.images.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group cursor-pointer"
                        >
                          <img
                            src={image}
                            alt={`${selectedMemory.title} - Image ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 shadow-md"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Participant Feedback */}
                  {/* <div className="bg-gradient-to-r from-[#FFD8C2] to-[#FBC5C5] rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Participant Feedback
                    </h3>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-stanrt">
                        <div className="w-12 h-12 bg-[#0B6B52] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                          {selectedMemory.feedback.split(" - ")[1]?.charAt(0) ||
                            "S"}
                        </div>
                        <div>
                          <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-2">
                            "{selectedMemory.feedback.split(" - ")[0]}"
                          </blockquote>
                          <cite className="text-[#0B6B52] font-semibold">
                            — {selectedMemory.feedback.split(" - ")[1]}
                          </cite>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0B6B52] to-[#083D30] py-16 mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-4xl font-bold mb-2">
                  {memories.length}+
                </div>
                <div className="text-xl opacity-90">Events Organized</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-4xl font-bold mb-2">
                  {memories.reduce((sum, m) => sum + m.participants, 0)}+
                </div>
                <div className="text-xl opacity-90">Students Engaged</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-xl opacity-90">Success Rate</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
