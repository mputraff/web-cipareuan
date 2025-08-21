import Navbar from "../components/Navbar";
import Galeri from "../components/Galeri";
import Footer from "../components/Footer";
import Maps from "../components/Maps";
import News from "../components/News";
import Potensi from "../components/Potensi";
import Struktur from "../components/Struktur";
import kadesImg from "../assets/img/kades.jpg";
import { ReactTyped } from "react-typed";
import Pencapaian from "../components/Pencapaian";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <section className="h-[820px] max-md:h-[600px] bg-[url('../src/assets/img/bghome.png')] bg-center bg-cover flex flex-col justify-center items-center gap-6 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)] max-w-4xl"
        >
          Selamat Datang di Website Resmi Desa Cipareuan
        </motion.h2>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-xs max-md:px-4 sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)] max-w-3xl"
        >
          Situs ini memberikan informasi terkini dan terpercaya tentang Desa
          Cipareuan, Kecamatan Cibiuk, Kabupaten Garut.
        </motion.p>
      </section>

      <section className="flex flex-col gap-4 pt-4 bg-[#F9F6F3] max-lg:pt-0">
        {/* buat animasi fade in */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="max-w-screen-xl bg-[#ffffff] w-full mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-12 my-4 border border-gray-200 rounded-xl shadow-lg max-lg:my-0 max-lg:rounded-none max-sm:shadow-none"
        >
          {/* Foto Kades */}
          <aside className="flex-shrink-0">
            <img
              src={kadesImg}
              alt="Kepala Desa Cipareuan"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg border-4 border-white"
            />
            <p className="text-center mt-4 font-semibold text-gray-700 text-sm sm:text-base md:text-lg">
              Kepala Desa Cipareuan
            </p>
          </aside>

          {/* Sambutan */}
          <div className="flex flex-col gap-4 text-justify leading-relaxed text-gray-800">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              <ReactTyped
                strings={[
                  "Selamat datang di Website Desa Cipareuan",
                  "Membangun Desa Bersama",
                  "Transparansi, Partisipasi, Akuntabilitas",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </h2>

            <p className="italic text-gray-700 text-sm sm:text-base md:text-lg">
              Assalamu’alaikum warahmatullahi wabarakatuh.
            </p>

            <p className="text-sm sm:text-base md:text-lg">
              Dalam rangka mewujudkan tata kelola pemerintahan desa Cipareuan
              yang bersih, jujur, partisipatif, transparan, dan akuntabel,
              melalui website ini saya selaku Kepala Desa Cibiuk Cipareuan
              berusaha menyajikan informasi seluas-luasnya tentang kegiatan
              penyelenggaraan pemerintahan desa, pembangunan desa, pemberdayaan
              masyarakat, pembinaan kemasyarakatan, serta berbagai kegiatan
              penting yang terjadi di Desa Cibiuk Cipareuan, Kecamatan Cibiuk,
              Kabupaten Garut. Informasi ini ditujukan khususnya kepada seluruh
              warga desa, namun juga dapat diakses oleh masyarakat umum.
            </p>

            <p className="text-sm sm:text-base md:text-lg">
              Alhamdulillah, berkat kepercayaan masyarakat, saya dipercaya
              memimpin Desa Cipareuan. Dengan penuh tanggung jawab, saya
              berkomitmen menjalankan amanah ini secara konsisten, bermartabat,
              dan selalu mengedepankan musyawarah mufakat dalam setiap
              pengambilan keputusan. Desa Cipareuan memiliki potensi yang besar,
              terutama di sektor pertanian seperti jagung, tembakau, padi, dan
              berbagai komoditas lainnya. Kami akan terus berupaya memaksimalkan
              potensi tersebut demi kemajuan dan kesejahteraan bersama.
            </p>

            <p className="text-sm sm:text-base md:text-lg">
              Website ini juga menjadi wujud perkembangan teknologi informasi,
              yang diharapkan dapat melahirkan ide-ide kreatif dan inovatif
              dalam menggali potensi desa. Selain itu, website ini adalah sarana
              untuk mendekatkan pelayanan kepada masyarakat, baik bagi warga
              Desa Cipareuan maupun masyarakat luas.
            </p>
          </div>
        </motion.div>
        <Struktur />
        <Pencapaian />
        <Galeri />
        <News />
        <Potensi />
        <Maps />
        <Footer />
      </section>
    </>
  );
}
