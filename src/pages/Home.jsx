import Navbar from "../components/Navbar";
import Galeri from "../components/Galeri";
import Footer from "../components/Footer";
import Maps from "../components/Maps";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="h-svh bg-[url('../src/assets/img/home2.png')] bg-center bg-cover"></section>
      <Galeri />
      <Maps />
      <Footer />
    </>
  );
}
