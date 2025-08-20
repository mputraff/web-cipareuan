import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlogCard from "../components/profile/BlogCard";
import profileData from "../assets/data/profileData";
import { motion } from "motion/react";

// Variants container untuk efek stagger
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

// Variants untuk setiap section profile
const sectionVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Variants untuk gambar biar lebih smooth
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Profile() {
  return (
    <>
      <Navbar />
      {/* About */}
      <section className="py-12 px-4 bg-[#F9F6F3] max-lg:bg-[#FFFFFF] text-gray-800 max-lg:py-4">
        <motion.div
          className="max-w-screen-xl mx-auto flex flex-row gap-6 max-lg:flex-col"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Konten Utama */}
          <motion.div
            variants={sectionVariants}
            className="w-4/5 flex flex-col border rounded-lg shadow-lg border-[#437057] py-4 px-8 bg-white max-lg:w-full max-lg:border-none max-lg:shadow-none"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Profile Desa Cipareuan
            </h2>
            {profileData.map((data) => (
              <motion.div
                key={data.id}
                variants={sectionVariants}
                className="my-3 flex flex-col gap-4"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  {data.title}
                </h3>

                {/* Gambar dengan animasi */}
                <motion.img
                  variants={imageVariants}
                  src={data.src}
                  alt={data.alt}
                  className="rounded-md shadow-xl w-full h-48 sm:h-64 md:h-80 object-cover"
                />

                <p className="text-sm sm:text-base md:text-lg text-gray-700 text-justify">
                  {data.desc}
                </p>

                {/* Render tabel jika ada */}
                {data.table?.usia && (
                  <motion.div
                    variants={sectionVariants}
                    className="overflow-x-auto"
                  >
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
                      Komposisi Penduduk Berdasarkan Usia
                    </h4>
                    <table className="table-auto w-full text-left border mb-4 text-xs sm:text-sm md:text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 border">Usia</th>
                          <th className="px-3 py-2 border">Laki-laki</th>
                          <th className="px-3 py-2 border">Perempuan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.table.usia.map((row, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 border">{row.label}</td>
                            <td className="px-3 py-2 border">{row.laki}</td>
                            <td className="px-3 py-2 border">{row.perempuan}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                )}

                {data.table?.pendidikan && (
                  <motion.div
                    variants={sectionVariants}
                    className="overflow-x-auto"
                  >
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
                      Pendidikan Penduduk
                    </h4>
                    <table className="table-auto w-full text-left border mb-4 text-xs sm:text-sm md:text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 border">Tingkat</th>
                          <th className="px-3 py-2 border">Jumlah</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.table.pendidikan.map((row, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 border">{row.label}</td>
                            <td className="px-3 py-2 border">{row.jumlah}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                )}

                {data.table?.sarana && (
                  <motion.div
                    variants={sectionVariants}
                    className="overflow-x-auto"
                  >
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
                      Sarana Penduduk
                    </h4>
                    <table className="table-auto w-full text-left border mb-4 text-xs sm:text-sm md:text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 border">Tingkat</th>
                          <th className="px-3 py-2 border">Jumlah</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.table.sarana.map((row, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 border">{row.label}</td>
                            <td className="px-3 py-2 border">{row.jumlah}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                )}

                {data.table?.mata_pencaharian && (
                  <motion.div
                    variants={sectionVariants}
                    className="overflow-x-auto"
                  >
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
                      Mata Pencaharian
                    </h4>
                    <table className="table-auto w-full text-left border mb-4 text-xs sm:text-sm md:text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 border">Pekerjaan</th>
                          <th className="px-3 py-2 border">Jumlah</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.table.mata_pencaharian.map((row, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 border">{row.label}</td>
                            <td className="px-3 py-2 border">{row.jumlah}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                )}

                {data.table?.pajak && (
                  <motion.div
                    variants={sectionVariants}
                    className="overflow-x-auto"
                  >
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
                      Pajak dan Retribusi Desa
                    </h4>
                    <table className="table-auto w-full text-left border mb-4 text-xs sm:text-sm md:text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 border">Tahun</th>
                          <th className="px-3 py-2 border">Pajak Desa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.table.pajak.map((row, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 border">{row.label}</td>
                            <td className="px-3 py-2 border">{row.jumlah}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Sidebar BlogCard */}
          <motion.aside
            variants={sectionVariants}
            className="w-1/5 h-fit max-lg:hidden sticky top-5 max-lg:w-full"
          >
            <BlogCard />
          </motion.aside>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
