import { useState } from "react";
import CardNews from "../components/CardNews";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"; // ✅ perbaikan import
import beritaList from "../assets/data/beritaData";
// import { getAllNews } from "../api/newsApi";

export default function News() {
  // const [beritaList, setBeritaList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = beritaList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(beritaList.length / itemsPerPage);

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

  return (
    <>
      <Navbar />
      <section className="bg-[#F9F6F3] flex justify-center">
        <div className="max-w-screen-xl w-full my-8 p-9 flex flex-col gap-4 bg-white border border-gray-300 rounded-xl shadow-md max-xl:bg-[#fffff0] max-lg:my-0 max-xl:border-none max-xl:shadow-none">
          {/* Header */}
          <div className="flex flex-col gap-2 ml-1">
            <h2 className="text-4xl font-bold">Berita Desa</h2>
            <p className="text-gray-600">
              Menyajikan berita terbaru di Desa Cipareuan
            </p>
          </div>

          {/* Card List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-6"
          >
            {currentItems.map((berita) => (
              <motion.div key={berita.id} variants={cardVariants}>
                <CardNews
                  slug={berita.id}
                  title={berita.title}
                  desc={berita.desc}
                  image={berita.image}
                  background="bg-[#FFFFF0]"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
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
        </div>
      </section>
      <Footer />
    </>
  );
}
