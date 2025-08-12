import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Maps() {
  return (
    <>
      <section className="h-screen flex justify-center items-center max-lg:px-5">
        <div className="max-w-screen-xl w-full flex flex-col justify-between gap-20">
          <div className="flex justify-between max-lg:flex-col max-lg:gap-8">
            <div className="flex flex-col text-justify gap-2">
              <h2 className="text-2xl font-semibold">Hubungi Kami</h2>
              <p className="max-w-96 max-lg:max-w-full">
                Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan,
                membutuhkan dukungan, atau ingin mempelajari lebih lanjut
                tentang layanan kami, tim kami siap membantu.
              </p>
            </div>
            <div className="flex flex-col max-lg:flex-row max-lg:justify-between">
              <p className="text-2xl text-[#004030]">
                <FontAwesomeIcon icon={faLocationDot} />
              </p>
              <div>
                <h2 className="font-semibold mt-2 max-lg:mt-0">Alamat Kami</h2>
                <p> Cipareuan kec. Cibiuk, Garut, Jawa Barat, Indonesia. </p>
              </div>
            </div>
            <div className="flex flex-col max-lg:flex-row max-lg:gap-14">
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
          <div className="w-full h-96 border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.563755368676!2d107.94212526241351!3d-7.080594936755766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b60011d6de71%3A0x526288005c2d0598!2sCipareuan%2C%20Kec.%20Cibiuk%2C%20Kabupaten%20Garut%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1753002492125!5m2!1sid!2sid"
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
    </>
  );
}
