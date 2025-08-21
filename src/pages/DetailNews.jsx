import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareWhatsapp,
  faSquareXTwitter,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { getAllNews } from "../api/newsApi";

// 🔑 Custom Hook dipindahkan keluar
function useIsMobile(maxWidth = 1024) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= maxWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isMobile;
}

export default function DetailNews() {
  const { slug } = useParams();
  const [berita, setBerita] = useState(null);
  const [beritaLain, setBeritaLain] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isMobile = useIsMobile(); // ✅ aman sekarang
  const imageBase = import.meta.env.VITE_API_THUMBNAIL;

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const data = await getAllNews();

        const current = data.find((item) => item.slug === slug);
        setBerita(current);

        const others = data.filter((item) => item.slug !== slug).slice(0, 6);
        setBeritaLain(others);
      } catch (err) {
        setError("Gagal memuat detail berita");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [slug]);

  const truncateWords = (text, maxWords) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + " ...";
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex justify-center items-center">
          <p className="text-gray-500">Memuat berita...</p>
        </section>
        <Footer />
      </>
    );
  }

  if (error || !berita) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex justify-center items-center">
          <h2 className="text-2xl font-bold">Berita tidak ditemukan 😢</h2>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="bg-[#FFFFF0] min-h-screen flex justify-center">
        <div className="max-w-screen-xl w-full my-8 p-9 bg-white border max-lg:border-none max-lg:my-0 rounded-xl shadow-md">
          <div className="flex max-lg:flex-col gap-6">
            {/* Konten Detail Berita */}
            <div className="w-3/4 p-4 max-lg:w-full max-lg:p-0">
              <p>
                <FontAwesomeIcon icon={faHouse} /> / berita desa Cipareuan
              </p>
              <h1 className="text-3xl max-md:text-xl max-md:text-justify font-bold my-2">
                {berita.title}
              </h1>
              <div className="flex my-3 gap-4 max-lg:text-sm">
                <p>
                  <FontAwesomeIcon icon={faClock} />{" "}
                  {new Date(berita.published_at).toLocaleDateString("id-ID")}
                </p>
                <p>
                  <FontAwesomeIcon icon={faUser} /> Ditulis oleh Administrator
                </p>
              </div>
              <img
                className="shadow-md rounded-md mb-3"
                src={`${imageBase}${berita.thumbnail}`}
                alt={berita.title}
              />
              <div
                className="text-gray-700 text-justify max-md:text-sm"
                dangerouslySetInnerHTML={{ __html: berita.content }}
              />

              {/* Share */}
              <div className="my-2 flex gap-2">
                <p>
                  <span className="font-semibold"> Bagikan :</span>{" "}
                </p>
                <ul className="flex items-center gap-2 text-lg">
                  <li><a href=""><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faSquareWhatsapp} /></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faSquareXTwitter} /></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faSquareLinkedin} /></a></li>
                </ul>
              </div>
            </div>

            {/* Sidebar Berita Lainnya */}
            <div className="w-[23%] flex flex-col gap-2 max-lg:w-full">
              <h2 className="text-xl font-semibold">Berita Lainnya</h2>

              {beritaLain.map((item) => (
                <Link
                  key={item.id}
                  to={`/berita/${item.slug}`}
                  className="flex p-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
                >
                  <img
                    className="object-cover h-20 w-20 rounded-[4px]"
                    src={`${imageBase}${item.thumbnail}`}
                    alt={item.title}
                  />
                  <div className="flex flex-col px-2 justify-between text-justify gap-2a">
                    <h5 className="text-xs font-semibold text-gray-900">
                      {isMobile ? item.title : truncateWords(item.title, 5)}
                    </h5>

                    <ul>
                      <li className="text-[10px] mb-1 text-gray-500 flex gap-1 items-center">
                        <FontAwesomeIcon icon={faClock} />
                        {new Date(item.published_at).toLocaleDateString("id-ID")}
                      </li>
                      <li className="text-[10px] text-gray-500">Administrator</li>
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
