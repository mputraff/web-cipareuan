import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JumlahPenduduk from "../components/infografis/JumlahPenduduk";
import JumlahAgama from "../components/infografis/JumlahAgama";
import imageInfografis from "../assets/img/infografis.jpg";
import PopulationChart from "../assets/chart/UmurChart";
import EducationChart from "../assets/chart/PendidikanChart";

export default function Infografis() {
  return (
    <>
      <Navbar />
      <section className="bg-[#FFFFF0] flex justify-center max-lg:bg-[#ffffff]">
        <div className="max-w-screen-xl w-full my-8 p-9 flex flex-col gap-4 bg-white border rounded-xl shadow- max-lg:my-0 max-lg:border-none max-lg:rounded-none max-lg:gap-2 ">
          <h2 className="text-3xl font-bold max-lg:text-2xl">Demografi Penduduk</h2>
          <div className="flex justify-between items-center gap-8 pt-4 max-lg:flex-col-reverse">
            <div>
              <p className="text-gray-600 font-semibold text-justify text-base max-lg:text-sm">
                Berdasarkan profil desa tahun 2024, Desa Cipareuan, Kecamatan
                Cibiuk, Kabupaten Garut, memiliki total penduduk sebanyak 7.122
                jiwa yang tergabung dalam 1.970 Kepala Keluarga (KK). Dengan
                luas wilayah 434,990 Ha, desa ini memiliki kepadatan penduduk
                1.383 jiwa/Km² dan seluruh warganya adalah Warga Negara
                Indonesia (WNI). Komposisi penduduknya terdiri dari 3.856 jiwa
                laki-laki dan 3.266 jiwa perempuan , dengan struktur usia yang
                didominasi oleh kelompok produktif (20-59 tahun) sebanyak 3.838
                jiwa. Dari sisi pendidikan, mayoritas penduduk adalah tamatan
                SD/Sederajat sebanyak 2.363 orang , diikuti oleh lulusan SLTP
                sebanyak 427 orang , SLTA sebanyak 60 orang , dan lulusan
                perguruan tinggi (S1 dan S2) sebanyak 16 orang. Mata pencaharian
                utama penduduk adalah wiraswasta yang mencapai 1.821 orang ,
                disusul oleh buruh tani sebanyak 596 orang dan petani sebanyak
                231 orang.
              </p>
            </div>
            <img
              src={imageInfografis}
              alt="Infografis Penduduk"
              className="w-5/12 shadow-md rounded-xl border border-gray-300 max-lg:w-full"
            />
          </div>

          <JumlahPenduduk />

          <div className="flex justify-between items-center gap-12 pt-8">
            <div className="flex flex-col justify-center gap-2 w-full">
              <h2 className="text-3xl font-bold max-lg:text-2xl">Berdasarkan Kelompok Umur</h2>
              <div>
                <PopulationChart />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-12 pt-8">
            <div className="flex flex-col justify-center gap-2 w-full">
              <h2 className="text-3xl font-bold max-lg:text-2xl">Berdasarkan Pendidikan</h2>
              <div>
                <EducationChart />
              </div>
            </div>
          </div>

          <JumlahAgama />
        </div>
      </section>
      <Footer />
    </>
  );
}
