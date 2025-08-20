import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

export default function Galeri() {
  const images = [
    "image.jpg",
    "image-1.jpg",
    "image-2.jpg",
    "image-3.jpg",
    "image-4.jpg",
    "image-5.jpg",
    "image-6.jpg",
    "image-7.jpg",
    "image-8.jpg",
    "image-9.jpg",
    "image-10.jpg",
    "image-11.jpg",
  ].slice(0, 6);

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

        {/* Gambar Grid Masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
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
                className="h-auto max-w-full rounded-lg object-cover"
                src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/${img}`}
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
