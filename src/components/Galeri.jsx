import galeri1 from "../assets/img/galeri1.jpg";
import galeri2 from "../assets/img/galeri2.jpg";
import galeri3 from "../assets/img/galeri3.jpg";

export default function Galeri() {
  const galeriData = [
    { id: 1, src: galeri1 },
    { id: 2, src: galeri2 },
    { id: 3, src: galeri3 },
    { id: 4, src: galeri3 },
    { id: 5, src: galeri3 },
    { id: 6, src: galeri3 },
  ];

  return (
    <section className="min-h-screen flex justify-center items-center px-4">
      <div className="max-w-screen-xl w-full border flex flex-col gap-8">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold">Galeri Desa</h2>
          <p className="text-gray-600">Kegiatan Desa Cipareuan</p>
        </div>

        {/* Gambar Grid Masonry */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt="Galeri 1"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt="Galeri 2"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt="Galeri 3"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt="Galeri 4"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt="Galeri 5"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt="Galeri 6"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt="Galeri 7"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt="Galeri 8"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt="Galeri 9"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt="Galeri 10"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt="Galeri 11"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt="Galeri 12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
