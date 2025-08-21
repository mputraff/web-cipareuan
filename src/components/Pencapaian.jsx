import { useEffect, useState } from "react";
import Tembakau from "../assets/img/tembakau.jpg";
import Voli from "../assets/img/voli.JPG";
import Jagung from "../assets/img/jagung.jpg";

const images = [Voli, Tembakau, Jagung];

export default function Pencapaian() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide tiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="h-fit flex justify-center items-center mb-8 max-lg:px-5">
        <div className="max-w-screen-xl w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-left max-lg:text-left max-lg:text-2xl">
              Pencapaian Desa
            </h2>
          </div>

          <div className="max-w-screen-xl bg-white w-full mx-auto flex flex-col items-center gap-8 px-5 py-6 border border-gray-200 rounded-xl shadow-lg max-lg:my-0 max-lg:rounded-none max-sm:shadow-none">
            {/* Carousel */}
            <div className="relative w-full md:h-full overflow-hidden rounded-md shadow-xl border">
              {/* Wrapper */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`slide-${idx}`}
                    className="w-full h-64 md:h-96 object-cover flex-shrink-0"
                  />
                ))}
              </div>

              {/* Tombol Prev */}
              <button
                onClick={() =>
                  setCurrentIndex(
                    (currentIndex - 1 + images.length) % images.length
                  )
                }
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
              >
                ❮
              </button>

              {/* Tombol Next */}
              <button
                onClick={() =>
                  setCurrentIndex((currentIndex + 1) % images.length)
                }
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
              >
                ❯
              </button>

              {/* Indicator dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === idx ? "bg-white" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 text-justify leading-relaxed text-gray-800">
              <p className=" text-gray-700 text-sm sm:text-base md:text-xl text-center font-semibold">
                Pencapaian Desa Cipareuan
              </p>

              <p className="text-sm sm:text-base md:text-lg">
                Sejauh ini, Desa Cipareuan telah menjalankan program pembangunan
                dengan tetap mengikuti aturan yang berlaku dari pemerintah.
                Setiap rencana pembangunan selalu dikonsultasikan dengan
                pendamping desa agar sesuai dengan ketentuan, termasuk
                mempertimbangkan hal-hal yang diperbolehkan dan yang tidak
                diizinkan berdasarkan regulasi.
              </p>

              <p className="text-sm sm:text-base md:text-lg">
                Dalam bidang pembangunan fisik, meskipun pencapaian yang diraih
                belum berskala besar, perbaikan infrastruktur telah berjalan
                secara bertahap. Beberapa jalan desa telah diperbaiki sedikit
                demi sedikit, dan saat ini masih ada satu ruas jalan yang
                kondisinya kurang baik di daerah Dusun Dua menuju rumah RT.
                Jalan tersebut sudah direncanakan untuk diaspal pada tahun ini,
                sehingga diharapkan dapat meningkatkan aksesibilitas warga.
              </p>

              <p className="text-sm sm:text-base md:text-lg">
                Selain pembangunan fisik, pencapaian lain yang dirasa penting
                adalah meningkatnya kepercayaan masyarakat kepada pemerintah
                desa. Pemerintah desa berupaya memberikan pelayanan terbaik,
                khususnya dalam penyaluran bantuan sosial. Masyarakat diberikan
                penjelasan yang jelas mengenai alur dan prosedur bantuan,
                sehingga mereka memahami prosesnya secara transparan.
              </p>

              <p className="text-sm sm:text-base md:text-lg">
                Kepercayaan ini tidak hanya datang dari warga setempat, tetapi
                juga dari pemerintah kecamatan dan desa-desa tetangga yang
                menilai kinerja Pemerintah Desa Cipareuan secara positif. Hal
                ini dianggap sebagai salah satu pencapaian yang patut disyukuri,
                meskipun pembangunan fisik masih dalam tahap bertahap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
