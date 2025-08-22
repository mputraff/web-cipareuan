import * as motion from "motion/react-client";
import ListPotensiData from "../assets/data/potensiData";
import CardPotensi from "./CardPotensi";
import { Link } from "react-router-dom";

export default function Potensi() {
  // Helper component biar animasi konsisten
  // const MotionImage = ({ src, alt, delay }) => (
  //   <motion.div
  //     initial={{ opacity: 0, y: 30 }}
  //     whileInView={{ opacity: 1, y: 0 }}
  //     transition={{ duration: 0.8, ease: "easeOut", delay }}
  //     viewport={{ once: true }}
  //   >
  //     <img
  //       className="h-auto max-w-full rounded-lg"
  //       src={src}
  //       alt={alt}
  //     />
  //   </motion.div>
  // );

  const truncateWords = (text, maxWords) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + " ...";
  };

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
          <p className="text-gray-600">
            Desa Cipareuan memiliki potensi yang luas
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-16 max-lg:gap-8">
          {ListPotensiData.slice(0, 6).map((potensi) => (
            <CardPotensi
              key={potensi.id}
              slug={potensi.slug}
              title={potensi.title}
              desc={truncateWords(potensi.desc, 10)}
              image={potensi.image}
              backgrond={"bg-[#FFFFFF]"}
            />
          ))}
        </div>

        <div className="text-right">
          <Link to="/potensi" className="text-gray-600 hover:underline">
            Lihat Semua Potensi
          </Link>
        </div>
      </div>
    </section>
  );
}
