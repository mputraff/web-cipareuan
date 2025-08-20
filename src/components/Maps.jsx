import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Maps() {
  return (
    <>
      <section className="h-fit flex justify-center items-center max-lg:px-5 my-10">
        <div className="max-w-screen-xl w-full flex flex-col justify-between gap-10 bg-white p-8 border border-gray-300 rounded-xl shadow-md">
          <div className="flex justify-between max-lg:flex-col max-lg:gap-8">
            <div className="flex flex-col text-justify gap-2">
              <h2 className="text-2xl font-semibold">Hubungi Kami</h2>
              <p className="max-w-96 max-lg:max-w-full">
                Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan,
                membutuhkan dukungan, atau ingin mempelajari lebih lanjut
                tentang layanan kami, tim kami siap membantu.
              </p>
            </div>
            <div className="flex flex-col max-lg:flex-row max-lg:gap-3">
              <p className="text-2xl text-[#004030]">
                <FontAwesomeIcon icon={faLocationDot} />
              </p>
              <div>
                <h2 className="font-semibold mt-2 max-lg:mt-0">Alamat Kami</h2>
                <p> Cipareuan kec. Cibiuk, Garut, Jawa Barat, Indonesia. </p>
              </div>
            </div>
            <div className="flex flex-col max-lg:flex-row max-lg:gap-3">
              <p className="text-2xl">
                <FontAwesomeIcon icon={faPhone} />
              </p>
              <div>
                <h2 className="font-semibold mt-3 max-lg:mt-0">Contact kami</h2>
                <p>+6244012947126</p>
                <p>cipareuan@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-full h-96 max-lg:h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4959.595915685853!2d107.95760597591261!3d-7.076284792926537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ca06d96dbe7d%3A0xda44f0d2eb0db198!2sKantor%20Desa%20Cipareuan%20-%20Cibiuk!5e1!3m2!1sid!2sid!4v1755500768907!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
