import agamaData from "../../assets/data/agamaData";

export default function JumlahAgama() {
  return (
    <>
      <div className="flex justify-between items-center gap-12 pt-8">
        <div className="flex flex-col justify-center gap-2 w-full">
          <h2 className="text-3xl font-bold">
            Berdasarkan agama
          </h2>
          <div className="flex flex-wrap justify-between">
            {agamaData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg h-36 mt-4 w-full shadow-sm md:flex-row md:max-w-xl"
              >
                <img
                  className="object-cover w-full rounded-t-lg md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                  src={data.src}
                  alt="Technology Acquisition"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {data.title}
                  </h5>
                  <p className="mb-3 font-semibold text-gray-700 text-2xl text-justify">
                    {data.jumlah}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
