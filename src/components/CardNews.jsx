import { Link } from "react-router-dom";

export default function CardNews({ id, title, image, alt, desc, backgrond }) {
  return (
    <div
      className={`max-w-sm ${backgrond} border border-gray-200 rounded-lg shadow-sm max-xl:max-w-full`}
    >
      <Link to={`/berita/${id}`}>
        <img
          className="rounded-t-lg w-full h-48 sm:h-56 md:h-64 object-cover"
          src={image}
          alt={alt || "Blog cover"}
        />
      </Link>
      <div className="p-5">
        <Link to={`/berita/${id}`}>
          <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-sm sm:text-base md:text-sm text-gray-700 text-justify">
          {desc}
        </p>
        <Link
          to={`/berita/${id}`}
          className="inline-flex items-center px-3 py-2 text-xs sm:text-sm md:text-base font-medium text-center text-white bg-[#437057] rounded-lg focus:ring-4 focus:outline-none"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3 h-3 sm:w-3.5 sm:h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
