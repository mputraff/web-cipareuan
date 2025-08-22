import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

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
  // Array gambar hasil import
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
    <section className="min-h-fit my-8 flex justify-center items-center px-4">
      <div className="max-w-screen-xl w-full flex flex-col gap-6">
        {/* Judul + Deskripsi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-4xl font-bold">Galeri Desa</h2>
          <p className="text-gray-600">Kegiatan Desa Cipareuan</p>
        </motion.div>

        {/* Grid Gambar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.slice(0, 6).map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                className="h-64 w-full rounded-lg object-cover"
                src={img}
                alt={`Galeri Desa ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-end"
        >
          <Link to={"/galeri-desa"} className="font-semibold hover:underline">
            Lihat Semua Galeri
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
