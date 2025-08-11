import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JumlahPenduduk from "../components/infografis/JumlahPenduduk";
import JumlahAgama from "../components/infografis/JumlahAgama";
import imageInfografis from "../assets/img/infografis.jpg";
import PopulationChart from "../assets/chart/umurChart";
import EducationChart from "../assets/chart/PendidikanChart";

export default function Infografis() {
  return (
    <>
      <Navbar />
      <section className="bg-[#FFFFF0] flex justify-center">
        <div className="max-w-screen-xl w-full my-8 p-9 flex flex-col gap-4 bg-white border rounded-xl shadow-md">
          <div className="flex justify-between items-center gap-12 pt-4">
            <div className="flex flex-col justify-around h-full">
              <h2 className="text-3xl font-bold">Demografi Penduduk</h2>
              <p className="text-gray-600 font-semibold text-justify text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam nam hic optio quae sed repellat consequuntur quibusdam
                veniam. Saepe deserunt fugiat architecto et soluta voluptas sit
                provident possimus quas commodi! Eligendi maxime velit nisi ad
                reiciendis dolor ipsam expedita deserunt explicabo, vel
                repudiandae ut vitae dolorem.
              </p>
            </div>
            <img
              src={imageInfografis}
              alt="Infografis Penduduk"
              className="w-5/12 shadow-md rounded-xl border border-gray-300"
            />
          </div>

          <JumlahPenduduk />

          <div className="flex justify-between items-center gap-12 pt-8">
            <div className="flex flex-col justify-center gap-2 w-full">
              <h2 className="text-3xl font-bold">
                Berdasarkan Kelompok Umur
              </h2>
              <div>
                <PopulationChart />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-12 pt-8">
            <div className="flex flex-col justify-center gap-2 w-full">
              <h2 className="text-3xl font-bold">
                Berdasarkan Pendidikan
              </h2>
              <div>
                <EducationChart  />
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
