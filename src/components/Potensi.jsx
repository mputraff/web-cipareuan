import * as motion from "motion/react-client";

export default function Potensi() {
  // Helper component biar animasi konsisten
  const MotionImage = ({ src, alt, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      <img
        className="h-auto max-w-full rounded-lg"
        src={src}
        alt={alt}
      />
    </motion.div>
  );

  return (
    <section className="min-h-fit flex justify-center items-center px-4">
      <div className="max-w-screen-xl w-full flex flex-col gap-8">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-4xl font-bold">Potensi Desa</h2>
          <p className="text-gray-600">Kegiatan Desa Cipareuan</p>
        </motion.div>

        {/* Grid Masonry */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="Galeri 1" delay={0.1} />
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="Galeri 2" delay={0.2} />
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="Galeri 3" delay={0.3} />
          </div>
          <div className="grid gap-4">
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="Galeri 4" delay={0.4} />
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="Galeri 5" delay={0.5} />
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="Galeri 6" delay={0.6} />
          </div>
          <div className="grid gap-4">
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="Galeri 7" delay={0.7} />
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="Galeri 8" delay={0.8} />
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="Galeri 9" delay={0.9} />
          </div>
          <div className="grid gap-4">
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="Galeri 10" delay={1.0} />
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="Galeri 11" delay={1.1} />
            <MotionImage src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="Galeri 12" delay={1.2} />
          </div>
        </div>
      </div>
    </section>
  );
}
