// "use client";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { motion, AnimatePresence } from "framer-motion";
// import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

// const SOCIALS = [
//   {
//     name: "Instagram",
//     url: "https://www.instagram.com/softskillsclub.nitjsr/",
//     icon: <Instagram size={32} className="text-[#E4405F]" />,
//     color: "bg-[#FBC5C5]",
//   },
//   {
//     name: "Facebook",
//     url: "https://www.facebook.com/ssc.nitjamshedpur/",
//     icon: <Facebook size={32} className="text-[#1877F3]" />,
//     color: "bg-[#FFD8C2]",
//   },
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/company/soft-skills-club2-nit-jamshedpur/",
//     icon: <Linkedin size={32} className="text-[#0A66C2]" />,
//     color: "bg-[#C2FFD8]",
//   },
//   {
//     name: "Email",
//     url: "mailto:softskillclub@nitjsr.ac.in",
//     icon: <Mail size={32} className="text-[#0B6B52]" />,
//     color: "bg-[#D2FBC5]",
//   },
// ];

// export default function Contact() {
//   const form = useRef();
//   const [status, setStatus] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [modalSocial, setModalSocial] = useState(null);

//   // EmailJS config
//   const SERVICE_ID = "service_g5qbx5g";
//   const TEMPLATE_ID = "template_1lmi42u";
//   const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "v2ihS4-NY0C9HxW21";

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus("loading");

//     // Debug: Log the form data
//     const formData = new FormData(form.current);
//     console.log("Form data:", {
//       name: formData.get('user_name'),
//       email: formData.get('user_email'),
//       message: formData.get('message')
//     });

//     emailjs
//       .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
//       .then(
//         (result) => {
//           console.log("EmailJS success:", result);
//           setStatus("success");
//           form.current.reset();
//         },
//         (error) => {
//           console.error("EmailJS error:", error);
//           setStatus("error");
//         }
//       );
//   };

//   // Modal for recent posts (placeholder)
//   const openModal = (social) => {
//     setModalSocial(social);
//     setShowModal(true);
//   };

//   return (
//     <div className="min-h-screen bg-white py-12 px-4 sm:px-8">
//       {/* Green Section with Form */}
//       <div className="max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 bg-gradient-to-br from-[#0B6B52] to-[#083D30]">
//         {/* Left: Contact Form */}
//         <div className="p-8 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
//           <form ref={form} onSubmit={sendEmail} className="space-y-5">
//             <div>
//               <label className="block text-[#FFD8C2] font-semibold mb-1">Name *</label>
//               <input
//                 type="text"
//                 name="user_name"
//                 required
//                 className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0B6B52] border border-[#FFD8C2] focus:outline-none focus:ring-2 focus:ring-[#FFD8C2] font-medium"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div>
//               <label className="block text-[#FFD8C2] font-semibold mb-1">Email (optional)</label>
//               <input
//                 type="email"
//                 name="user_email"
//                 className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0B6B52] border border-[#FFD8C2] focus:outline-none focus:ring-2 focus:ring-[#FFD8C2] font-medium"
//                 placeholder="you@email.com"
//               />
//             </div>
//             <div>
//               <label className="block text-[#FFD8C2] font-semibold mb-1">Message *</label>
//               <textarea
//                 name="message"
//                 required
//                 rows={5}
//                 className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0B6B52] border border-[#FFD8C2] focus:outline-none focus:ring-2 focus:ring-[#FFD8C2] font-medium"
//                 placeholder="Type your message here..."
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 rounded-lg bg-[#FFD8C2] text-[#0B6B52] font-bold text-lg shadow-md hover:bg-[#FBC5C5] transition-colors duration-200"
//               disabled={status === "loading"}
//             >
//               {status === "loading" ? "Sending..." : "Send Message"}
//             </button>
//             <AnimatePresence>
//               {status === "success" && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                   className="text-green-200 bg-green-700/80 rounded-lg px-4 py-2 mt-2 text-center"
//                 >
//                   Message sent successfully!
//                 </motion.div>
//               )}
//               {status === "error" && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                   className="text-red-200 bg-red-700/80 rounded-lg px-4 py-2 mt-2 text-center"
//                 >
//                   Something went wrong. Please try again.
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </form>
//         </div>
//         {/* Right: Social Cards */}
//         <div className="p-8 flex flex-col justify-center bg-white/90">
//           <h3 className="text-2xl font-bold text-[#0B6B52] mb-6">Connect with Us</h3>
//           <div className="grid gap-4">
//             {SOCIALS.map((social) => (
//               <motion.button
//                 key={social.name}
//                 whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(11,107,82,0.08)" }}
//                 className={`flex items-center gap-4 px-6 py-4 rounded-xl shadow-md transition-all duration-300 ${social.color} hover:opacity-90 w-full`}
//                 onClick={() => openModal(social)}
//                 type="button"
//               >
//                 {social.icon}
//                 <span className="text-lg font-semibold text-[#0B6B52]">{social.name}</span>
//               </motion.button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Modal for Social Preview (placeholder) */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
//             onClick={() => setShowModal(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-4 right-4 text-[#0B6B52] hover:text-[#FBC5C5] text-2xl font-bold"
//                 aria-label="Close"
//               >
//                 ×
//               </button>
//               <div className="flex flex-col items-center gap-4">
//                 {modalSocial?.icon}
//                 <h4 className="text-xl font-bold text-[#0B6B52] mb-2">{modalSocial?.name}</h4>
//                 <p className="text-[#083D30] text-center mb-4">
//                   {/* Placeholder for recent posts preview */}

//                   <a
//                     href={modalSocial?.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#0B6B52] underline hover:text-[#FBC5C5]"
//                   >
//                     Visit our {modalSocial?.name} page
//                   </a>
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
//  }
"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const SOCIALS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/softskillsclub.nitjsr/",
    icon: <Instagram className="w-6 h-6 text-[#E4405F]" />,
    color: "hover:text-pink-500",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/ssc.nitjamshedpur/",
    icon: <Facebook className="w-6 h-6 text-[#1877F2]" />,
    color: "hover:text-blue-600",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/soft-skills-club2-nit-jamshedpur/",
    icon: <Linkedin className="w-6 h-6 text-[#0A66C2]" />,
    color: "hover:text-blue-500",
  },
  {
    name: "Email",
    url: "mailto:softskillclub@nitjsr.ac.in",
    icon: <Mail className="w-6 h-6 text-[#0B6B52]" />,
    color: "hover:text-emerald-500",
  },
];

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalSocial, setModalSocial] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_g5qbx5g",
        "template_1lmi42u",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "v2ihS4-NY0C9HxW21"
      )
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
        }
      );
  };

  const openModal = (social) => {
    setModalSocial(social);
    setShowModal(true);
  };

  return (
    <section
      className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-6 overflow-hidden"
      id="contact"
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

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Left: Contact Form */}
          <div className="p-8 md:p-10">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0B6B52] focus:ring-2 focus:ring-[#0B6B52]/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0B6B52] focus:ring-2 focus:ring-[#0B6B52]/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0B6B52] focus:ring-2 focus:ring-[#0B6B52]/20 transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#0B6B52] to-emerald-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200">
                      Message sent successfully! We&apos;ll get back to you soon.
                    </div>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
                      Something went wrong. Please try again or contact us
                      directly.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Right: Social Connections */}
          <div className="bg-gray-50 p-8 md:p-10 flex flex-col">
            <h3 className="text-2xl font-bold text-[#0B6B52] mb-6">
              Connect With Us
            </h3>
            <div className="space-y-4">
              {SOCIALS.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all ${social.color}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0B6B52]/10">
                    {social.icon}
                  </div>
                  <span className="font-medium text-gray-800">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-white border border-[#0B6B52] text-[#0B6B52] font-medium rounded-xl shadow-sm hover:bg-[#0B6B52]/10 transition-all"
                >
                  Become a Member
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
