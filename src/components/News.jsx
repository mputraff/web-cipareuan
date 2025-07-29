import CardNews from "./CardNews";
export default function News() {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center px-4">
        <div className="max-w-screen-xl w-full flex flex-col gap-8">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">Berita Desa</h2>
            <p className="text-gray-600">Kegiatan Desa Cipareuan</p>
          </div>

          {/* Gambar Grid Masonry */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
          </div>
        </div>
      </section>
    </>
  );
}
