import Navbar from "../components/Navbar";
import Galeri from "../components/Galeri";
import Footer from "../components/Footer";
import Maps from "../components/Maps";
import News from "../components/News";
import Potensi from "../components/Potensi";
import Struktur from "../components/Struktur";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="h-svh bg-[url('../src/assets/img/home.png')] bg-center bg-cover"></section>
      <section className="flex flex-col gap-4 mt-4">
        <Struktur />
        <Galeri />
        <Maps />
        <News />
        <Potensi />
        <Footer />
      </section>
    </>
  );
}
