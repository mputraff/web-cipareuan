import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import beritaList from "../assets/data/beritaData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

export default function DetailNews() {
  const { id } = useParams();

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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, placeat blanditiis.
              </h1>
              <div className="flex my-3 gap-4 max-lg:text-sm">
                <p>
                  <FontAwesomeIcon icon={faClock} /> 23 Agustus 2025
                </p>
                <p>
                  <FontAwesomeIcon icon={faUser} /> Ditulis oleh Administrator
                </p>
              </div>
              <img className="shadow-md rounded-md mb-3" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
              <p className="text-gray-700 text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                dignissimos quibusdam vel expedita ipsa, sint repudiandae magnam
                possimus nobis, nostrum, commodi quidem sed ab ut. Ipsam esse
                nemo eveniet optio rerum consequatur totam eum dicta sed,
                repellendus reprehenderit. Voluptas aperiam, magnam quia
                perspiciatis modi deleniti, voluptates fugiat optio et
                assumenda, voluptatibus reprehenderit. Provident consequuntur
                repellat quae dignissimos possimus eveniet vero ex, corporis
                inventore tempora explicabo? Porro ratione possimus nam quos
                unde facere esse veritatis nesciunt fugiat blanditiis? Odit
                molestiae facere quaerat ex, illum laudantium? Ea, eaque officia
                placeat vitae alias optio beatae eveniet nemo vel numquam
                labore, dolor fugit nam!
              </p>

              <div className="my-2">
                <p><span className="font-semibold"> Bagikan :</span> </p>
              </div>
            </div>

            {/* Sidebar Berita Lainnya */}
            <div className="w-[23%] flex flex-col gap-2 max-lg:w-full">
              <h2 className="text-xl font-semibold">Berita Lainnya</h2>

              {/* Card Berita Lain */}
              {beritaList.slice(0, 6).map((berita) => (
                <Link className="flex p-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
                  <img
                    className="object-cover h-20 w-20 "
                    src={berita.image}
                    alt=""
                  />
                  <div className="flex flex-col px-2 justify-between text-justify">
                    <h5 className="text-sm font-semibold text-gray-900">
                      {berita.title}
                    </h5>
                    <ul>
                      <li className="text-xs text-gray-500 mb-1 flex gap-1 items-center">
                        <FontAwesomeIcon icon={faClock} />
                        {berita.date}
                      </li>
                      <li className="text-xs text-gray-500">Administrator</li>
                    </ul>
                  </div>
                </Link>
              ))}

              {/* Tambahkan lebih banyak berita lainnya jika mau */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
