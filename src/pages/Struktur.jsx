import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import strukturOrganisasi from "../assets/data/strukturOrganisasi";

export default function Struktur() {
  return (
    <>
      <Navbar />
      <section className="bg-[#FFFFF0] flex justify-center max-xl:bg-[#fffff0]">
        <div className="max-w-screen-xl w-full my-8 p-9 flex flex-col gap-4 bg-white border rounded-xl shadow-md max-xl:bg-[#fffff0] max-lg:my-0 max-xl:border-none max-xl:shadow-none">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">SOTK</h2>
            <p className="text-gray-600">Struktur Organisasi Tata Kerja Desa Cipareuan</p>
          </div>

          {/* Gambar Grid Masonry */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {strukturOrganisasi.map((orang) => (
              <div
                key={orang.id}
                className="max-w-sm bg-[#437057] border border-gray-200 rounded-lg shadow-sm "
              >
                <img
                  className="rounded-t-lg w-full h-72 object-cover"
                  src={orang.src}
                  alt={orang.nama}
                />
                <div className="p-5 text-center">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {orang.nama}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {orang.jabatan}
                  </p>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>
      <Footer />
    </>
  );
}
