import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function Galeri() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const imageBaseUrl = import.meta.env.VITE_API_THUMBNAIL;
  const urlApi = import.meta.env.VITE_API_GALERI;

  useEffect(() => {
    async function fetchGallery() {
      try {
        setLoading(true);
        const response = await fetch(urlApi);
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError("Gagal memuat galeri, coba lagi nanti.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Variants untuk animasi container
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

  // Variants untuk modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

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

          {/* Loader & Error Handling */}
          {loading && (
            <p className="text-center text-gray-500">Memuat galeri...</p>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* Gambar Grid */}
          {!loading && !error && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {images.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl cursor-pointer"
                  onClick={() => handleImageClick(item)}
                >
                  <motion.img
                    src={imageBaseUrl + item.image_path}
                    alt={item.title}
                    className="h-72 w-full object-cover rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Gambar */}
              <div className="relative">
                <img
                  src={imageBaseUrl + selectedImage.image_path}
                  alt={selectedImage.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
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
              </div>

              {/* Konten */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
