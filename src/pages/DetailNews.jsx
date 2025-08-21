import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import beritaList from "../assets/data/beritaData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function DetailNews() {
  const { id } = useParams();

  // Cari berita berdasarkan id
  const berita = beritaList.find((item) => item.id === id);

  // Kalau id tidak ditemukan
  if (!berita) {
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
                  <FontAwesomeIcon icon={faClock} /> {berita.date}
                </p>
                <p>
                  <FontAwesomeIcon icon={faUser} /> Ditulis oleh Administrator
                </p>
              </div>
              <img
                className="shadow-md rounded-md mb-3"
                src={berita.image}
                alt={berita.alt}
              />
              <p className="text-gray-700 text-justify max-md:text-sm">{berita.desc}</p>

              <div className="my-2 flex gap-2">
                <p>
                  <span className="font-semibold"> Bagikan :</span>{" "}
                </p>
                <ul className="flex items-center gap-2 text-lg">
                  <li>
                    <a href="">
                      <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon icon={faSquareWhatsapp} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon icon={faSquareXTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon icon={faSquareLinkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Berita Lainnya */}
            <div className="w-[23%] flex flex-col gap-2 max-lg:w-full">
              <h2 className="text-xl font-semibold">Berita Lainnya</h2>

              {beritaList
                .filter((item) => item.id !== id) // jangan tampilkan berita yang sedang dibuka
                .slice(0, 6)
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/berita/${item.id}`}
                    className="flex p-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
                  >
                    <img
                      className="object-cover h-20 w-20 rounded-[4px]"
                      src={item.image}
                      alt={item.alt}
                    />
                    <div className="flex flex-col px-2 justify-between text-justify">
                      <h5 className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </h5>
                      <ul>
                        <li className="text-xs text-gray-500 mb-1 flex gap-1 items-center">
                          <FontAwesomeIcon icon={faClock} />
                          {item.date}
                        </li>
                        <li className="text-xs text-gray-500">Administrator</li>
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
