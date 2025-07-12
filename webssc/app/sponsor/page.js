"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Sponsor() {
  const sponsorshipTiers = [
    {
      title: "Title Sponsor",
      amount: "₹1,00,000+",
      benefits: [
        "Exclusive naming rights for the event",
        "Prime logo placement on all materials",
        "Keynote speaking opportunity",
        "Full-page ad in event booklet",
        "Social media shoutouts",
      ],
      color: "from-[#FF7F50] to-[#FF4500]",
    },
    {
      title: "Event Sponsor",
      amount: "₹50,000 - ₹99,999",
      benefits: [
        "Large logo placement on event materials",
        "Exhibition space at venue",
        "Mention in press releases",
        "Social media features",
        "Product showcase opportunity",
      ],
      color: "from-[#0B6B52] to-[#083D30]",
    },
    {
      title: "Club Sponsor",
      amount: "Up to ₹49,999",
      benefits: [
        "Logo on our website & social media",
        "Recognition in newsletters",
        "Verbal mentions at events",
        "Networking opportunities",
        "Certificate of appreciation",
      ],
      color: "from-[#6B7280] to-[#4B5563]",
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-6 overflow-hidden"
      id="sponsor"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#0B6B52]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#FF7F50]/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-wider text-[#0B6B52] uppercase px-4 py-2 bg-[#0B6B52]/10 rounded-full inline-block mb-4">
            Partnership Opportunities
          </span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B6B52] to-emerald-400">
              Be Our Sponsor
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join hands with NIT Jamshedpur&apos;s premier student club shaping future
            leaders through communication and soft skills development.
          </motion.p>
        </motion.div>

        {/* Sponsorship Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {sponsorshipTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 border-${tier.color
                .split(" ")[0]
                .replace("from-", "")
                .replace("[", "")
                .replace("]", "")}`}
            >
              <div className={`p-6 bg-gradient-to-r ${tier.color} text-white`}>
                <h3 className="text-2xl font-bold">{tier.title}</h3>
                <p className="text-xl font-semibold opacity-90">
                  {tier.amount}
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-[#0B6B52] mt-0.5 mr-2"
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
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-lg bg-gradient-to-r ${tier.color} text-white font-semibold shadow-md hover:shadow-lg transition-all`}
                  >
                    Become {tier.title}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Sponsor Us */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#0B6B52]/10 to-[#0B6B52]/5">
              <h3 className="text-3xl font-bold text-[#0B6B52] mb-6">
                Why Sponsor Us?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#0B6B52] rounded-lg p-2 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Premium Audience
                    </h4>
                    <p className="text-gray-600">
                      Direct access to 1000+ of NIT Jamshedpur&apos;s brightest
                      students and future industry leaders.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#0B6B52] rounded-lg p-2 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Brand Visibility
                    </h4>
                    <p className="text-gray-600">
                      Extensive exposure through our social media (10K+
                      followers), newsletters, and campus promotions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#0B6B52] rounded-lg p-2 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      CSR Alignment
                    </h4>
                    <p className="text-gray-600">
                      Support education and skill development initiatives that
                      align with corporate social responsibility goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#FF7F50]/5 to-[#FF7F50]/10">
              <h3 className="text-3xl font-bold text-[#FF6347] mb-6">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#0B6B52] mb-1">15+</p>
                  <p className="text-sm text-gray-600">Years of Excellence</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#0B6B52] mb-1">50+</p>
                  <p className="text-sm text-gray-600">Events Yearly</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#0B6B52] mb-1">
                    1000+
                  </p>
                  <p className="text-sm text-gray-600">Students Engaged</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#0B6B52] mb-1">20+</p>
                  <p className="text-sm text-gray-600">Corporate Partners</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  Testimonial
                </h4>
                <blockquote className="text-gray-600 italic mb-4">
                  &quot;Sponsoring Soft Skills Club events gave us exceptional brand
                  visibility and access to top talent. The students were engaged
                  and enthusiastic, making it a perfect platform for our
                  recruitment efforts.&quot;
                </blockquote>
                <p className="text-gray-800 font-medium">
                  - HR Director, Previous Sponsor
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bank Details */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-[#0B6B52] mb-8 text-center">
            Bank Transfer Details
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Account Name
                </h4>
                <p className="text-lg text-gray-800">
                  Soft Skills Club NIT Jamshedpur
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Bank Name
                </h4>
                <p className="text-lg text-gray-800">State Bank of India</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Account Number
                </h4>
                <p className="text-lg text-gray-800">123456789012</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Branch
                </h4>
                <p className="text-lg text-gray-800">
                  NIT Jamshedpur Campus Branch
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  IFSC Code
                </h4>
                <p className="text-lg text-gray-800">SBIN0001234</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  GST Number
                </h4>
                <p className="text-lg text-gray-800">22ABCDE1234F2Z5</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-6">
              For any queries regarding sponsorship or payment process, please
              contact us:
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-[#0B6B52] to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Contact Our Team
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
