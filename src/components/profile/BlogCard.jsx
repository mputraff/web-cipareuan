import React from "react";
import Logo from "./logo.png";

export default function BlogCard() {
  return (
    <div className="max-w-sm bg-white border border-[#437057] rounded-lg shadow-sm flex flex-col items-center">
      <div className="text-xl font-bold tracking-tight text-gray-900 flex flex-col items-center gap-3">
        <h2 className="mt-4">Desa Cipareuan</h2>
        <img
          className="w-40 h-auto rounded-t object-contain"
          src={Logo}
          alt="Noteworthy acquisition"
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            Informasi Lainnya
          </h5>
        </a>
        <ul className="space-y-1">
          <li className="flex">
            <span className="w-28 font-medium">Negara</span>:{" "}
            <span className="ml-2">Indonesia</span>
          </li>
          <li className="flex">
            <span className="w-28 font-medium">Provinsi</span>:{" "}
            <span className="ml-2">Jawa Barat</span>
          </li>
          <li className="flex">
            <span className="w-28 font-medium">Kabupaten</span>:{" "}
            <span className="ml-2">Garut</span>
          </li>
          <li className="flex">
            <span className="w-28 font-medium">Kecamatan</span>:{" "}
            <span className="ml-2">Cibiuk</span>
          </li>
          <li className="flex">
            <span className="w-28 font-medium">Luas Wilayah</span>:{" "}
            <span className="ml-2">434,990 Ha</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
