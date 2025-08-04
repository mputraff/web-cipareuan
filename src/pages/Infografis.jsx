import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import imageInfografis from "../assets/img/infografis.jpg";
import infografisData from "../assets/data/infografisData";
import UmurChart from "../assets/chart/UmurChart.jsx";

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

          <div className="flex justify-between items-center gap-12 pt-8">
            <div className="flex flex-col justify-center gap-2 w-full">
              <h2 className="text-3xl font-bold">
                Jumlah Penduduk dan Kepala Keluarga
              </h2>
              <div className="flex flex-wrap justify-between">
                {infografisData.map((data) => (
                  <div
                    key={data.id}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg mt-4 w-full shadow-sm md:flex-row md:max-w-xl"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={data.src}
                      alt="Technology Acquisition"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        {data.title}
                      </h5>
                      <p className="mb-3 font-semibold text-gray-700 text-2xl text-justify">
                        {data.jumlah}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-12 pt-8">
            <div className="flex flex-col justify-center gap-2 w-full">
              <h2 className="text-3xl font-bold">
                Berdasarkan Kelompok Umur
              </h2>
              <div>
                <UmurChart />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
