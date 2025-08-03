import imageAbout from "../img/about.png";
import imageTopografi from "../img/topograpi.png";
import imageDemografi from "../img/demografi.jpg";
import imageEconomy from "../img/economy.jpg";

const profileData = [
  {
    id: 1,
    src: imageAbout,
    title: "",
    alt: "profile-image",
    desc: "Desa Cipareuan merupakan salah satu desa yang terdapat di Kabupaten Garut, yang terdiri dari 10 RW dan 39 RT. Jarak Desa Cipareuan ke Ibu Kota Kecamatan Cibiuk sekitar 0,5 Km...",
  },
  {
    id: 2,
    src: imageTopografi,
    title: "Topografi",
    alt: "topograpi-image",
    desc: "Desa Cipareuan berada di bawah lereng pegunungan Haruman pada ketinggian 650-1125 m DPL...",
  },
  {
    id: 3,
    src: imageDemografi,
    title: "Demografi",
    alt: "demografi-image",
    desc: "Desa Cipareuan memiliki populasi 7.122 jiwa. Berikut detail komposisinya.",
    table: {
      usia: [
        { label: "0–4 Tahun", laki: 409, perempuan: 287 },
        { label: "5–19 Tahun", laki: 1048, perempuan: 905 },
        { label: "20–59 Tahun", laki: 2017, perempuan: 1821 },
        { label: "60+ Tahun", laki: 382, perempuan: 253 },
      ],
      pendidikan: [
        { label: "Tamat SD/Sederajat", jumlah: 2363 },
        { label: "Tamat SLTP/Sederajat", jumlah: 427 },
        { label: "Tamat SLTA/Sederajat", jumlah: 60 },
        { label: "S1", jumlah: 12 },
        { label: "S2", jumlah: 4 },
      ],
      sarana: [
        { label: "PAUD/TK ", jumlah: 5 },
        { label: "SD ", jumlah: 4 },
        { label: "SMP ", jumlah: 2 },
        { label: "SMA ", jumlah: 1 },
        { label: "Madrasah ", jumlah: 14 },
        { label: "Pondok Pesantren ", jumlah: 3 },
      ],
    },
  },
  {
    id: 4,
    src: imageEconomy,
    title: "Ekonomi",
    alt: "demografi-image",
    desc: "Desa Cipareuan memiliki populasi 7.122 jiwa. Berikut detail komposisinya.",
    table: {
      mata_pencaharian: [
        { label: "Petani", jumlah: 783 },
        { label: "Buruh Tani", jumlah: 444 },
        { label: "Wiraswasta", jumlah: 869 },
        { label: "Karyawan Swasta", jumlah: 126 },
        { label: "PNS", jumlah: 46 },
        { label: "Peternak", jumlah: 78 },
      ],
      pajak: [
        { label: "PAUD/TK", jumlah: 5 },
        { label: "SD ", jumlah: 4 },
        { label: "SMP ", jumlah: 2 },
        { label: "SMA ", jumlah: 1 },
        { label: "Madrasah ", jumlah: 14 },
        { label: "Pondok Pesantren ", jumlah: 3 },
      ],
    },
  },
];

export default profileData;
