import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react"; // import motion

// Import semua gambar
import galeri1 from "../assets/img/galeri/galeri1.jpeg";
import galeri2 from "../assets/img/galeri/galeri2.jpeg";
import galeri3 from "../assets/img/galeri/galeri3.jpeg";
import galeri4 from "../assets/img/galeri/galeri4.jpeg";
import galeri5 from "../assets/img/galeri/galeri5.jpeg";
import galeri6 from "../assets/img/galeri/galeri6.jpeg";
import galeri7 from "../assets/img/galeri/galeri7.jpeg";
import galeri8 from "../assets/img/galeri/galeri8.jpeg";
import galeri9 from "../assets/img/galeri/galeri9.jpeg";
import galeri10 from "../assets/img/galeri/galeri10.jpeg";
import galeri11 from "../assets/img/galeri/galeri11.JPG";
import galeri12 from "../assets/img/galeri/galeri12.jpeg";

export default function Galeri() {
  // Variants untuk animasi container (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Variants untuk tiap item gambar
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const images = [
    galeri1,
    galeri2,
    galeri3,
    galeri4,
    galeri5,
    galeri6,
    galeri7,
    galeri8,
    galeri9,
    galeri10,
    galeri11,
    galeri12,
  ];

  return (
    <>
      <Navbar />
      <section className="bg-[#F9F6F3] flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-screen-xl w-full my-8 p-9 flex flex-col gap-6 bg-white border border-gray-300 rounded-xl shadow-md max-xl:bg-[#fffff0] max-lg:my-0 max-xl:border-none max-xl:shadow-none"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 ml-1"
          >
            <h2 className="text-4xl font-bold text-gray-900">Galeri Desa</h2>
            <p className="text-gray-600">Galeri Kegiatan Desa Cipareuan</p>
          </motion.div>

          {/* Gambar Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl cursor-pointer"
              >
                <motion.img
                  src={img}
                  alt={`Galeri Desa ${index + 1}`}
                  className="h-72 w-full object-cover rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}