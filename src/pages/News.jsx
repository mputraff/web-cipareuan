import { useState } from "react";
import CardNews from "../components/CardNews";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import beritaList from "../assets/data/beritaData";

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = beritaList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(beritaList.length / itemsPerPage);

  return (
    <>
      <Navbar />
      <section className="bg-[#FFFFF0] flex justify-center max-xl:bg-[#fffff0]">
        <div className="max-w-screen-xl w-full my-8 p-9 flex flex-col gap-4 bg-white border border-gray-300 rounded-xl shadow-md max-xl:bg-[#fffff0] max-lg:my-0 max-xl:border-none max-xl:shadow-none">
          <div className="flex flex-col gap-2 ml-1">
            <h2 className="text-4xl font-bold">Berita Desa</h2>
            <p className="text-gray-600">
              Menyajikan berita terbaru di Desa Cipareuan
            </p>
          </div>

          {/* List Berita */}
          <div className="flex flex-wrap justify-center gap-6">
            {currentItems.map((berita) => (
              <CardNews
                key={berita.id}
                id={berita.id}
                title={berita.title}
                desc={berita.desc}
                image={berita.image}
                backgrond={"bg-[#FFFFF0]"}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-2">
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
