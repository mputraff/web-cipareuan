import imageAbout from "../img/about.png";
import imageTopografi from "../img/topograpi.png";
import imageDemografi from "../img/demografi.jpg";
import imageEconomy from "../img/economy.jpg";
import imageProfile1 from "../img/imgProfile1.jpeg";

const profileData = [
  {
    id: 1,
    src: imageProfile1,
    title: "",
    alt: "profile-image",
    desc: "Desa Cipareuan terletak di Kecamatan Cibiuk, Kabupaten Garut, dengan luas wilayah 434,99 hektar. Desa ini terdiri dari 10 RW dan 39 RT, serta terbagi menjadi tiga dusun utama. Secara geografis, Cipareuan berada di bawah lereng Pegunungan Haruman dengan ketinggian 650–1.125 meter di atas permukaan laut. Batas wilayahnya meliputi Desa Cibiuk Kaler dan Lingkung Pasir di utara, Desa Cibiuk Kidul di timur, Desa Sindang Sari di selatan, serta Desa Karang Anyar di barat. Akses menuju ibu kota kecamatan hanya berjarak 0,5 km, sementara ke pusat Kabupaten Garut sekitar 21 km",
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
    desc: "Desa Cipareuan berjumlah penduduk 6.666 jiwa yang mayoritas beragama Islam, Desa Cipareuan memiliki komposisi mata pencaharian yang beragam, mulai dari petani, buruh tani, wiraswasta, hingga pegawai negeri. Wilayahnya ditunjang oleh beberapa fasilitas pendidikan seperti SD/MI, SMP/MTs, SMA/MA, dan pondok pesantren, serta sarana kesehatan berupa posyandu. Sumber air bersih berasal dari mata air alami yang dimanfaatkan untuk kebutuhan rumah tangga dan irigasi. Infrastruktur desa mencakup jalan desa sepanjang 4 km, lapangan olahraga, dan tempat ibadah yang tersebar merata di tiap dusun.",
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
        { label: "2022", jumlah: "Rp 35.978.501" },
        { label: "2023", jumlah: "Rp 48.473.148" },
        { label: "2024", jumlah: "Rp 54.726.526" },
      ],
    },
  },
];

export default profileData;
