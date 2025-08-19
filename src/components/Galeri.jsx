export default function Galeri() {
  return (
    <section className="min-h-screen my-8 flex justify-center items-center px-4">
      <div className="max-w-screen-xl w-full flex flex-col gap-8">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold">Galeri Desa</h2>
          <p className="text-gray-600">Kegiatan Desa Cipareuan</p>
        </div>

        {/* Gambar Grid Masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "image.jpg",
            "image-1.jpg",
            "image-2.jpg",
            "image-3.jpg",
            "image-4.jpg",
            "image-5.jpg",
            "image-6.jpg",
            "image-7.jpg",
            "image-8.jpg",
            "image-9.jpg",
            "image-10.jpg",
            "image-11.jpg",
          ].slice(0, 6).map((img, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/${img}`}
                alt={`Galeri Desa ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
