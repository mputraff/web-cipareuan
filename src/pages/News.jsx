import CardNews from "../components/CardNews";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function News() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex justify-center items-center px-4">
        <div className="max-w-screen-xl w-full flex flex-col gap-8">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">Berita Desa</h2>
            <p className="text-gray-600">Menyajikan berita terbaru di Desa Cipareuan</p>
          </div>

          {/* Gambar Grid Masonry */}
          <div className="flex flex-wrap justify-center gap-16">
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
