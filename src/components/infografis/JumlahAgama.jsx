// JumlahAgama.jsx
import agamaData from "../../assets/data/agamaData";

export default function JumlahAgama() {
  return (
    <div className="flex justify-between items-center gap-12 pt-8">
      <div className="flex flex-col justify-center gap-2 w-full">
        <h2 className="text-3xl font-bold max-lg:text-2xl">Berdasarkan Agama</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {agamaData.map((data) => (
            <div
              key={data.id}
              className="flex  items-center bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <img
                className="object-contain w-32 aspect-square bg-gray-50"
                src={data.src}
                alt={data.title}
              />
              <div className="flex flex-col justify-center p-4 text-center text-left">
                <h5 className="mb-1 text-xl font-bold text-gray-900">
                  {data.title}
                </h5>
                <p className="font-semibold text-gray-700 text-xl">
                  {data.jumlah}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
