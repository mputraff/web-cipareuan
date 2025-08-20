import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import strukturOrganisasi from "../assets/data/strukturOrganisasi";
import { motion } from "framer-motion";

export default function Struktur() {
  // Variants container dengan stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Variants card (masuk dari bawah, smooth)
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 20,
        stiffness: 120,
      },
    },
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#FFFFF0] flex justify-center max-xl:bg-[#fffff0]">
        <div className="max-w-screen-xl w-full my-8 p-9 flex flex-col gap-6 bg-white border rounded-xl shadow-md max-lg:border-none max-lg:my-0">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col mb-4"
          >
            <h2 className="text-4xl font-bold">SOTK</h2>
            <p className="text-gray-600">
              Struktur Organisasi Tata Kerja Desa Cipareuan
            </p>
          </motion.div>

          {/* Grid Struktur Organisasi */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {strukturOrganisasi.map((orang) => (
              <motion.div
                key={orang.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  rotateX: 2,
                  rotateY: -2,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex flex-row md:flex-col bg-[#437057] rounded-xl overflow-hidden cursor-pointer shadow-md"
              >
                {/* Foto */}
                <motion.img
                  className="w-24 h-24 md:w-full md:h-72 object-cover"
                  src={orang.src}
                  alt={orang.nama}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Info */}
                <div className="flex flex-col justify-center p-4 text-left md:text-center">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {orang.nama}
                  </h5>
                  <p className="font-normal text-white">{orang.jabatan}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
