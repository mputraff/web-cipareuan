import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import CardPotensi from "../components/CardPotensi";
import ListPotensiData from "../assets/data/potensiData";

export default function Potensi() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ✅ Tambahkan ini
  useEffect(() => {
    try {
      // karena datanya lokal (import langsung), tidak ada async fetch
      if (ListPotensiData && ListPotensiData.length > 0) {
        setLoading(false);
      } else {
        setError("Data potensi tidak tersedia");
      }
    } catch (err) {
      setError("Gagal memuat data");
    }
  }, []);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPotensi = ListPotensiData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(ListPotensiData.length / itemsPerPage);

  // Variants animasi parent (container)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Variants animasi untuk tiap card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const truncateWords = (text, maxWords) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + " ...";
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#F9F6F3] flex justify-center">
        <div className="max-w-screen-xl w-full my-8 p-9 flex flex-col gap-4 bg-white border border-gray-300 rounded-xl shadow-md max-xl:bg-[#fffff0] max-lg:my-0 max-xl:border-none max-xl:shadow-none">
          {/* Header */}
          <div className="flex flex-col gap-2 ml-1">
            <h2 className="text-4xl font-bold">Potensi Desa</h2>
            <p className="text-gray-600">
              Berikut beberapa potensi yang dapat diakses oleh masyarakat desa
            </p>
          </div>

          {/* Loader & Error Handling */}
          {loading && (
            <p className="text-center text-gray-500">Memuat potensi...</p>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* Card List */}
          {!loading && !error && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center gap-6"
            >
              {currentPotensi.map((potensi) => (
                <motion.div key={potensi.id} variants={cardVariants}>
                  <CardPotensi
                    slug={potensi.slug}
                    title={truncateWords(potensi.title, 10)}
                    desc={truncateWords(potensi.desc, 15)}
                    image={potensi.image}
                    background="bg-[#FFFFF0]"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Pagination */}
          {!loading && !error && totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="bg-[#437057] h-8 w-7 flex justify-center items-center text-white cursor-pointer disabled:opacity-50"
              >
                {"<"}
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`h-8 w-7 flex justify-center items-center cursor-pointer ${
                    currentPage === i + 1
                      ? "bg-[#2f4a38] text-white"
                      : "bg-[#437057] text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="bg-[#437057] h-8 w-7 flex justify-center items-center text-white cursor-pointer disabled:opacity-50"
              >
                {">"}
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
