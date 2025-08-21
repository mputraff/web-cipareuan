import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import DropDown from "../components/DropDown";
import { motion } from "framer-motion";

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

    const phone = "6289509632340"; // ganti sesuai admin
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Variants untuk animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#FFFFF0] flex justify-center px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="max-w-screen-md w-full my-8 p-9 flex flex-col gap-6 bg-white border rounded-2xl shadow-lg"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col mb-4 text-center"
          >
            <h2 className="text-3xl font-bold">Layanan Surat</h2>
            <p className="text-gray-600">
              Isi data warga untuk pengajuan surat
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            variants={containerVariants}
          >
            {/* DropDown */}
            <motion.div variants={itemVariants}>
              <DropDown value={formData.surat} onChange={handleChange} />
            </motion.div>

            {/* Nama */}
            <motion.div variants={itemVariants}>
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
            </motion.div>

            {/* No HP */}
            <motion.div variants={itemVariants}>
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
            </motion.div>

            {/* Dusun */}
            <motion.div variants={itemVariants}>
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
            </motion.div>

            {/* RW & RT */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
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
            </motion.div>

            {/* Button */}
            <motion.button
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full text-white bg-[#437057] hover:bg-[#305b43] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 transition"
            >
              Kirim ke Whatsapp
            </motion.button>
          </motion.form>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
