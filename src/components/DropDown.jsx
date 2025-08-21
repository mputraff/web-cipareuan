import React from "react";

const listSurat = [
  { label: "Konsen Kelahiran", value: "Konsen Kelahiran" },
  { label: "Akta Kelahiran", value: "Akta Kelahiran" },
  { label: "Konsen Kematian", value: "Konsen Kematian" },
  { label: "Akta Kematian", value: "Akta Kematian" },
  { label: "Surat Keterangan Usaha (SKU)", value: "Surat Keterangan Usaha (SKU)" },
  { label: "Surat Keterangan Tidak Mampu (SKTM)", value: "Surat Keterangan Tidak Mampu (SKTM)" },
  { label: "Keterangan Domisili", value: "Keterangan Domisili" },
  { label: "Surat Pengantar Perekaman KTP - EL", value: "Surat Pengantar Perekaman KTP - EL" },
  { label: "Pembuatan KK", value: "Pembuatan KK" },
  { label: "Surat Pengantar Pindah Keluar", value: "Surat Pengantar Pindah Keluar" },
  { label: "Surat Pengantar Pindah Datang", value: "Surat Pengantar Pindah Datang" },
  { label: "Surat Kekurangan Ahli Waris", value: "Surat Kekurangan Ahli Waris" },
  { label: "Surat Keterangan Lain - Lain", value: "Surat Keterangan Lain - Lain" },
];

const DropDown = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-md">
      <label
        htmlFor="surat"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Pilih Jenis Surat
      </label>
      <select
        id="surat"
        name="surat"
        value={value}
        onChange={onChange}
        className="w-full p-3 border rounded-xl shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        required
      >
        <option value="" disabled>
          -- Pilih Surat --
        </option>
        {listSurat.map((surat) => (
          <option key={surat.value} value={surat.value}>
            {surat.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
