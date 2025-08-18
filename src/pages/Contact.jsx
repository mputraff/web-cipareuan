import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

export default function Contact() {
  // Container: aktifkan stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  // Teks: fade + naik sedikit
  const textVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // List wrapper (untuk stagger tiap <li>)
  const listVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18 },
    },
  };

  // Tiap item list: fade + slide + spring lembut
  const itemVariants = {
    hidden: { opacity: 0, x: -24, scale: 0.98 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 22 },
    },
  };

  // Form: slide dari kanan
  const formVariants = {
    hidden: { opacity: 0, x: 56 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  // Data list info (3 item kembali muncul)
  const infoItems = [
    {
      title: "Our Address",
      desc1: "Cipareuan kec. Cibiuk, Garut.",
      desc2: "Jawa Barat, Indonesia.",
      iconPaths: [
        <path key="1" d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />,
        <path key="2" d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />,
      ],
    },
    {
      title: "Contact",
      desc1: "Mobile: +6244012947126",
      desc2: "Mail: desacipareuancibiuk@gmail.com",
      iconPaths: [
        <path key="1" d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />,
        <path key="2" d="M15 7a2 2 0 0 1 2 2" />,
        <path key="3" d="M15 3a6 6 0 0 1 6 6" />,
      ],
    },
    {
      title: "Working hours",
      desc1: "Senin - Jumat: 08:00 - 17:00",
      desc2: "Sabtu & Minggu: 08:00 - 12:00",
      iconPaths: [
        <path key="1" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />,
        <path key="2" d="M12 7v5l3 3" />,
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-[#F9F6F3]" id="contact">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20"
        >
          {/* Heading */}
          <motion.div
            variants={textVariants}
            className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12 text-[#437057]"
          >
            <h2 className="font-heading mb-4 font-bold tracking-tight text-2xl sm:text-4xl md:text-5xl">
              Hubungi Kami
            </h2>
            
          </motion.div>

          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Info Section */}
              <motion.div variants={textVariants} className="h-full pr-0 md:pr-6">
                <p className="mt-3 mb-12 text-sm sm:text-base md:text-lg text-[#437057] text-justify max-lg:px-5">
                  Kami senang mendengar dari Anda! Jika Anda memiliki
                  pertanyaan, membutuhkan dukungan, atau ingin mempelajari lebih
                  lanjut tentang layanan kami, tim kami siap membantu.
                </p>

                <motion.ul
                  variants={listVariants}
                  className="mb-6 md:mb-0 max-lg:px-5"
                >
                  {infoItems.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      whileHover={{ y: -2 }}
                      className="flex mb-6"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-[#437057] text-gray-50 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {item.iconPaths}
                        </svg>
                      </div>
                      <div className="ml-4 text-[#437057]">
                        <h3 className="mb-2 text-base sm:text-lg md:text-xl font-medium leading-6">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base">{item.desc1}</p>
                        <p className="text-sm sm:text-base">{item.desc2}</p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Form */}
              <motion.div
                variants={formVariants}
                className="card h-fit max-w-6xl p-5 md:p-12 rounded-lg bg-white shadow border border-gray-300"
                id="form"
                whileHover={{ y: -2 }}
              >
                <h2 className="mb-4 text-lg sm:text-2xl md:text-3xl font-bold text-[#437057]">
                  Ready to Get Started?
                </h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4 grid sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        autoComplete="given-name"
                        className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-4 shadow-sm text-sm sm:text-base text-[#437057] focus:border-[#437057] focus:outline-none"
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        autoComplete="email"
                        className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-4 shadow-sm text-sm sm:text-base text-[#437057] focus:border-[#437057] focus:outline-none"
                      />
                    </div>

                    <textarea
                      id="textarea"
                      name="textarea"
                      rows="5"
                      placeholder="Write your message..."
                      className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-4 shadow-sm text-sm sm:text-base text-[#437057] focus:border-[#437057] focus:outline-none"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-[#437057] text-white px-6 py-3 text-sm sm:text-base md:text-lg rounded-md cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
