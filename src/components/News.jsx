import CardNews from "./CardNews";
import { Link } from "react-router-dom";
import { getAllNews } from "../api/newsApi";
import { useState, useEffect } from "react";

export default function News() {
  const [beritaList, setBeritaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imageThumbnail = "http://103.65.236.111:8000/storage/";

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const data = await getAllNews();
        setBeritaList(data);
      } catch (err) {
        setError("Gagal memuat berita, coba lagi nanti.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500">Memuat berita...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  const truncateWords = (text, maxWords) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + " ...";
  }

  return (
    <>
      <section className="min-h-screen flex justify-center items-center mb-8 max-lg:px-5">
        <div className="max-w-screen-xl w-full flex flex-col gap-8">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">Berita Desa</h2>
            <p className="text-gray-600">Kegiatan Desa Cipareuan</p>
          </div>

          {/* Gambar Grid */}
          <div className="flex flex-wrap justify-center gap-16 max-lg:gap-8">
            {beritaList.slice(0, 6).map((berita) => (
              <CardNews
                key={berita.id}
                slug={berita.slug}   
                title={truncateWords (berita.title, 10)}
                desc={truncateWords (berita.excerpt, 15)}
                image={imageThumbnail + berita.thumbnail}
                backgrond={"bg-[#FFFFFF]"}
              />
            ))}
          </div>

          <div className="text-right">
            <Link to="/berita" className="text-gray-600 hover:underline">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
