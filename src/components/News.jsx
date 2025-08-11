import CardNews from "./CardNews";
import beritaList from "../assets/data/beritaData";
import { Link } from "react-router-dom";
export default function News() {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center mb-8 max-lg:px-5">
        <div className="max-w-screen-xl w-full flex flex-col gap-8">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">Berita Desa</h2>
            <p className="text-gray-600">Kegiatan Desa Cipareuan</p>
          </div>

          {/* Gambar Grid Masonry */}
          <div className="flex flex-wrap justify-center gap-16 max-lg:gap-8">
            {beritaList.slice(0, 6).map((berita) => (
              <CardNews
                key={berita.id}
                id={berita.id}
                title={berita.title}
                desc={berita.desc}
                image={berita.image}
                backgrond={"bg-[#FFFFFF]"}
              />
            ))}
          </div>

          <div className="text-right">
            <Link to="/berita"> Lihat Semua Berita</Link>
          </div>
        </div>
      </section>
    </>
  );
}
