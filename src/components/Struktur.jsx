// src/components/Struktur.jsx
import { Link } from "react-router-dom";
import strukturOrganisasi from "../assets/data/strukturOrganisasi";

export default function Struktur() {
  return (
    <section className="h-fit flex justify-center px-4 ">
      <div className="max-w-screen-xl w-full flex flex-col gap-5">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold">SOTK</h2>
          <p className="text-gray-600 font-semibold">
            Struktur Organisasi Tata Kerja Cipareuan
          </p>
        </div>

        {/* Gambar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {strukturOrganisasi.slice(0, 4).map((orang) => (
              <div
                key={orang.id}
                className="flex flex-row md:flex-col bg-[#437057] border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                {/* Foto */}
                <img
                  className="w-24 h-24 md:w-full md:h-72 object-cover"
                  src={orang.src}
                  alt={orang.nama}
                />

                {/* Info */}
                <div className="flex flex-col justify-center p-4 text-left md:text-center">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {orang.nama}
                  </h5>
                  <p className="font-normal text-white">{orang.jabatan}</p>
                </div>
              </div>
            ))}
          </div>

        <div className="text-right">
          <Link to="/struktur-pemerintahan" href="">
            <p className="font-semibold hover:underline">Lihat Struktur Lebih Lengkap</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
