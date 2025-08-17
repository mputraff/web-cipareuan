import Logo from "../assets/img/logo/logo.png"
import bgAdmin from "../assets/img/bg-admin.jpg"

export default function LoginAdmin() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image dengan Blur */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center filter "
        style={{
          backgroundImage: `url(${bgAdmin})`,
        }}
      ></div>

      {/* Overlay biar agak gelap dan fokus ke card */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center px-6 py-8 mx-auto h-full">
        <p className="flex items-center mb-6 text-2xl font-semibold text-white drop-shadow">
          <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
          Login Admin
        </p>

        <div className="w-full bg-white opacity-85 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-green-500 
                             focus:border-green-500 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-green-500 
                             focus:border-green-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 
                                 focus:ring-3 focus:ring-green-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-green-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Button Hijau */}
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 
                           hover:from-green-600 hover:via-green-700 hover:to-green-800
                           focus:ring-4 focus:outline-none focus:ring-green-300 
                           font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                           transition-all duration-300 cursor-pointer"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
