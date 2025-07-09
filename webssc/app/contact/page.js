"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/softskillsclub.nitjsr/",
    icon: <Instagram size={32} className="text-[#E4405F]" />,
    color: "bg-[#FBC5C5]",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/ssc.nitjamshedpur/",
    icon: <Facebook size={32} className="text-[#1877F3]" />,
    color: "bg-[#FFD8C2]",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/soft-skills-club2-nit-jamshedpur/",
    icon: <Linkedin size={32} className="text-[#0A66C2]" />,
    color: "bg-[#C2FFD8]",
  },
  {
    name: "Email",
    url: "mailto:softskillclub@nitjsr.ac.in",
    icon: <Mail size={32} className="text-[#0B6B52]" />,
    color: "bg-[#D2FBC5]",
  },
];

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalSocial, setModalSocial] = useState(null);

  // EmailJS config
  const SERVICE_ID = "service_g5qbx5g";
  const TEMPLATE_ID = "template_1lmi42u";
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "v2ihS4-NY0C9HxW21";

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");
    
    // Debug: Log the form data
    const formData = new FormData(form.current);
    console.log("Form data:", {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message')
    });
    
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("EmailJS success:", result);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
        }
      );
  };

  // Modal for recent posts (placeholder)
  const openModal = (social) => {
    setModalSocial(social);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-8">
      {/* Green Section with Form */}
      <div className="max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 bg-gradient-to-br from-[#0B6B52] to-[#083D30]">
        {/* Left: Contact Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-[#FFD8C2] font-semibold mb-1">Name *</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0B6B52] border border-[#FFD8C2] focus:outline-none focus:ring-2 focus:ring-[#FFD8C2] font-medium"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-[#FFD8C2] font-semibold mb-1">Email (optional)</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0B6B52] border border-[#FFD8C2] focus:outline-none focus:ring-2 focus:ring-[#FFD8C2] font-medium"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-[#FFD8C2] font-semibold mb-1">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0B6B52] border border-[#FFD8C2] focus:outline-none focus:ring-2 focus:ring-[#FFD8C2] font-medium"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#FFD8C2] text-[#0B6B52] font-bold text-lg shadow-md hover:bg-[#FBC5C5] transition-colors duration-200"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-green-200 bg-green-700/80 rounded-lg px-4 py-2 mt-2 text-center"
                >
                  Message sent successfully!
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-red-200 bg-red-700/80 rounded-lg px-4 py-2 mt-2 text-center"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
        {/* Right: Social Cards */}
        <div className="p-8 flex flex-col justify-center bg-white/90">
          <h3 className="text-2xl font-bold text-[#0B6B52] mb-6">Connect with Us</h3>
          <div className="grid gap-4">
            {SOCIALS.map((social) => (
              <motion.button
                key={social.name}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(11,107,82,0.08)" }}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl shadow-md transition-all duration-300 ${social.color} hover:opacity-90 w-full`}
                onClick={() => openModal(social)}
                type="button"
              >
                {social.icon}
                <span className="text-lg font-semibold text-[#0B6B52]">{social.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Social Preview (placeholder) */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-[#0B6B52] hover:text-[#FBC5C5] text-2xl font-bold"
                aria-label="Close"
              >
                ×
              </button>
              <div className="flex flex-col items-center gap-4">
                {modalSocial?.icon}
                <h4 className="text-xl font-bold text-[#0B6B52] mb-2">{modalSocial?.name}</h4>
                <p className="text-[#083D30] text-center mb-4">
                  {/* Placeholder for recent posts preview */}
                
                  <a
                    href={modalSocial?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0B6B52] underline hover:text-[#FBC5C5]"
                  >
                    Visit our {modalSocial?.name} page
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
