import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import DropDown from "../components/DropDown";

export default function Surat() {
  const [formData, setFormData] = useState({
    nama: "",
    noHp: "",
    dusun: "",
    rw: "",
    rt: "",
    surat: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format pesan sopan
    const message = `Halo Admin Desa, saya ingin mengajukan permohonan surat dengan data berikut:\n\n
Nama: ${formData.nama}\n
No HP: ${formData.noHp}\n
Dusun: ${formData.dusun}\n
RW: ${formData.rw}\n
RT: ${formData.rt}\n
Jenis Surat: ${formData.surat}\n\n
Mohon bantuannya bapak / ibu, terima kasih.`;

    // Nomor tujuan WhatsApp (ubah sesuai admin desa)
    const phone = "6289509632340";

    // Encode pesan & buka WA
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#FFFFF0] flex justify-center">
        <div className="max-w-screen-md w-full my-8 p-9 flex flex-col gap-6 bg-white border rounded-2xl shadow-lg">
          {/* Header */}
          <div className="flex flex-col mb-4 text-center">
            <h2 className="text-3xl font-bold">Layanan Surat</h2>
            <p className="text-gray-600">
              Isi data warga untuk pengajuan surat
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* DropDown */}
            <div>
              <DropDown value={formData.surat} onChange={handleChange} />
            </div>

            {/* Nama */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Warga
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama warga"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                required
              />
            </div>

            {/* No HP */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                No Handphone
              </label>
              <input
                type="tel"
                name="noHp"
                value={formData.noHp}
                onChange={handleChange}
                placeholder="08xxxxxxxxxx"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                required
              />
            </div>

            {/* Dusun */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dusun
              </label>
              <input
                type="text"
                name="dusun"
                value={formData.dusun}
                onChange={handleChange}
                placeholder="Nama dusun"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            {/* RW & RT */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  RW
                </label>
                <input
                  type="number"
                  name="rw"
                  value={formData.rw}
                  onChange={handleChange}
                  placeholder="01"
                  className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  RT
                </label>
                <input
                  type="number"
                  name="rt"
                  value={formData.rt}
                  onChange={handleChange}
                  placeholder="02"
                  className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 transition"
            >
              Kirim ke Whatsapp
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
