import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlogCard from "../components/profile/BlogCard";
import profileData from "../assets/data/profileData";

export default function Profile() {
  return (
    <>
      <Navbar />
      {/* About */}
      <section className="py-12 px-4 bg-[#FFFFF0] text-gray-800">
        <div className="max-w-screen-xl mx-auto flex flex-row gap-6 max-lg:flex-col">
          <div className="w-4/5 flex flex-col border rounded-lg shadow-lg border-[#437057] py-4 px-8 bg-white max-lg:bg-[#FFFFF0]  max-lg:w-full">
            <h2 className="text-3xl font-bold ">Profile Desa Cipareuan</h2>
            {profileData.map((data) => (
              <div key={data.id} className="my-3 flex flex-col gap-4">
                <h3 className="text-2xl font-bold">{data.title}</h3>
                <img
                  src={data.src}
                  alt={data.alt}
                  className="rounded shadow-lg"
                />
                <p className="text-gray-700 text-justify">{data.desc}</p>

                {/* Render TABEL jika ada */}
                {data.table?.usia && (
                  <div className="overflow-x-auto">
                    <h4 className="text-lg font-semibold mb-1">
                      Komposisi Penduduk Berdasarkan Usia
                    </h4>
                    <table className="table-auto w-full text-left border mb-4">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 border">Usia</th>
                          <th className="px-3 py-2 border">Laki-laki</th>
                          <th className="px-3 py-2 border">Perempuan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.table.usia.map((row, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 border">{row.label}</td>
                            <td className="px-3 py-2 border">{row.laki}</td>
                            <td className="px-3 py-2 border">
                              {row.perempuan}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Pendidikan */}
                {data.table?.pendidikan && (
                  <div className="overflow-x-auto">
                    <h4 className="text-lg font-semibold mb-1">
                      Pendidikan Penduduk
                    </h4>
                    <table className="table-auto w-full text-left border mb-4">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 border">Tingkat</th>
                          <th className="px-3 py-2 border">Jumlah</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.table.pendidikan.map((row, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 border">{row.label}</td>
                            <td className="px-3 py-2 border">{row.jumlah}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Sarana Pendidikan */}
                {data.table?.sarana && (
                  <div className="overflow-x-auto">
                    <h4 className="text-lg font-semibold mb-1">
                      Sarana Penduduk
                    </h4>
                    <table className="table-auto w-full text-left border mb-4">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 border">Tingkat</th>
                          <th className="px-3 py-2 border">Jumlah</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.table.sarana.map((row, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 border">{row.label}</td>
                            <td className="px-3 py-2 border">{row.jumlah}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* mata pencaharian */}
                {data.table?.mata_pencaharian && (
                  <div className="overflow-x-auto">
                    <h4 className="text-lg font-semibold mb-1">
                      Mata Pencaharian
                    </h4>
                    <table className="table-auto w-full text-left border mb-4">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 border">Pekerjaan</th>
                          <th className="px-3 py-2 border">Jumlah</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.table.mata_pencaharian.map((row, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 border">{row.label}</td>
                            <td className="px-3 py-2 border">{row.jumlah}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {data.table?.pajak && (
                  <div className="overflow-x-auto">
                    <h4 className="text-lg font-semibold mb-1">
                      Pajak dan Retribusi Desa
                    </h4>
                    <table className="table-auto w-full text-left border mb-4">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 border">Tahun</th>
                          <th className="px-3 py-2 border">Pajak Desa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.table.pajak.map((row, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 border">{row.label}</td>
                            <td className="px-3 py-2 border">{row.jumlah}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

            ))}
          </div>
          <aside className="w-1/5 h-fit max-lg:hidden sticky top-5 max-lg:w-full">
            <BlogCard />
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
}
