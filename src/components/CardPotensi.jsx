import { Link } from "react-router-dom";

export default function CardPotensi({
  slug,
  title,
  image,
  alt,
  desc,
  backgrond,
}) {
  return (
    <div
      className={`max-w-sm ${backgrond} border border-gray-200 rounded-lg shadow-sm max-xl:max-w-full`}
    >
      <img
        className="rounded-t-lg w-full h-48 sm:h-56 md:h-64 object-cover"
        src={image}
        alt={alt || "Blog cover"}
      />

      <div className="p-5">
        <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>

        <p className="mb-3 font-normal text-sm sm:text-base md:text-sm text-gray-700 text-justify">
          {desc}
        </p>
      </div>
    </div>
  );
}
