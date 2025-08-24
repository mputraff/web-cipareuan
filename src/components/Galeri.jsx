import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

export default function Galeri() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

        {/* Loader & Error Handling */}
        {loading && (
          <p className="text-center text-gray-500">Memuat galeri...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Grid Gambar */}
        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src={imageBaseUrl + item.image_path}
                  alt={item.title}
                />
              </motion.div>
            ))}
          </div>
        )}

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
