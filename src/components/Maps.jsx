import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Maps() {
  return (
    <section className="h-fit flex justify-center items-center px-4 md:px-6 lg:px-8 my-10">
      <div className="max-w-screen-xl w-full flex flex-col gap-10 bg-white p-6 md:p-8 lg:p-10 border border-gray-300 rounded-xl shadow-md">
        
        {/* Bagian Konten Atas */}
        <div className="flex justify-between gap-8 flex-col lg:flex-row">
          
          {/* Deskripsi */}
          <div className="flex flex-col text-justify gap-3 lg:max-w-md">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Hubungi Kami
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan,
              membutuhkan dukungan, atau ingin mempelajari lebih lanjut tentang
              layanan kami, tim kami siap membantu.
            </p>
          </div>

          {/* Alamat */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-3">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#004030]">
              <FontAwesomeIcon icon={faLocationDot} />
            </p>
            <div>
              <h2 className="font-semibold mt-2 sm:mt-0 text-base md:text-lg">
                Alamat Kami
              </h2>
              <p className="text-sm md:text-base">
                Cipareuan kec. Cibiuk, Garut, Jawa Barat, Indonesia.
              </p>
            </div>
          </div>

          {/* Kontak */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-3">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#004030]">
              <FontAwesomeIcon icon={faPhone} />
            </p>
            <div>
              <h2 className="font-semibold mt-2 sm:mt-0 text-base md:text-lg">
                Contact Kami
              </h2>
              <p className="text-sm md:text-base">+62 4401 2947 126</p>
              <p className="text-sm md:text-base">cipareuan@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Peta */}
        <div className="w-full h-64 sm:h-80 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4959.595915685853!2d107.95760597591261!3d-7.076284792926537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ca06d96dbe7d%3A0xda44f0d2eb0db198!2sKantor%20Desa%20Cipareuan%20-%20Cibiuk!5e1!3m2!1sid!2sid!4v1755500768907!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
