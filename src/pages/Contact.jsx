import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="bg-[#FFFFFF]" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12 text-[#437057]">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-2xl sm:text-4xl md:text-5xl">
                Hubungi Kami
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg md:text-xl">
                Kami senang mendengar dari Anda!
              </p>
            </div>
          </div>

          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              {/* Info Section */}
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-sm sm:text-base md:text-lg text-[#437057] text-justify max-lg:px-5">
                  Kami senang mendengar dari Anda! Jika Anda memiliki
                  pertanyaan, membutuhkan dukungan, atau ingin mempelajari lebih
                  lanjut tentang layanan kami, tim kami siap membantu.
                </p>

                <ul className="mb-6 md:mb-0 max-lg:px-5">
                  {/* Address */}
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#437057] text-gray-50">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                      </svg>
                    </div>
                    <div className="ml-4 mb-4 text-[#437057]">
                      <h3 className="mb-2 text-base sm:text-lg md:text-xl font-medium leading-6">
                        Our Address
                      </h3>
                      <p className="text-sm sm:text-base">Cipareuan kec. Cibiuk, Garut.</p>
                      <p className="text-sm sm:text-base">Jawa Barat, Indonesia.</p>
                    </div>
                  </li>

                  {/* Contact */}
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#437057] text-gray-50">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <path d="M15 7a2 2 0 0 1 2 2" />
                        <path d="M15 3a6 6 0 0 1 6 6" />
                      </svg>
                    </div>
                    <div className="ml-4 mb-4 text-[#437057]">
                      <h3 className="mb-2 text-base sm:text-lg md:text-xl font-medium leading-6">
                        Contact
                      </h3>
                      <p className="text-sm sm:text-base">Mobile: +6244012947126</p>
                      <p className="text-sm sm:text-base">Mail: desacipareuancibiuk@gmail.com</p>
                    </div>
                  </li>

                  {/* Hours */}
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#437057] text-blue-50">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                    </div>
                    <div className="ml-4 mb-4 text-[#437057]">
                      <h3 className="mb-2 text-base sm:text-lg md:text-xl font-medium leading-6">
                        Working hours
                      </h3>
                      <p className="text-sm sm:text-base">Senin - Jumat: 08:00 - 17:00</p>
                      <p className="text-sm sm:text-base">Sabtu & Minggu: 08:00 - 12:00</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Form */}
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-lg sm:text-2xl md:text-3xl font-bold text-[#437057]">
                  Ready to Get Started?
                </h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      {/* Name Input */}
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          autoComplete="given-name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-sm sm:text-base text-[#437057] focus:border-[#437057] sm:mb-0"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your email address"
                          autoComplete="email"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-sm sm:text-base text-[#437057] focus:border-[#437057] sm:mb-0"
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-sm sm:text-base text-[#437057] focus:border-[#437057] sm:mb-0"
                      ></textarea>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-[#437057] text-white px-6 py-3 text-sm sm:text-base md:text-lg rounded-md cursor-pointer hover:shadow-md"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
