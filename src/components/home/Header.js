import { Typewriter } from "react-simple-typewriter";

function Header() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"></div>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Bananos Organicos para <span></span>
                <div
                  className="inline-flex"
                  style={{ color: "green", fontWeight: "bold" }}
                >
                  <Typewriter
                    words={[
                      "  Disfrutar",
                      "  Energizar",
                      "  Cultivar",
                      "  Compartir!",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={120}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-950 sm:text-center">
                Bienvenidos a <strong>COOPERATIVA AGRO PERU </strong>, tu
                destino para el banano orgánico de la más alta calidad. Desde la
                naturaleza hasta tu mesa, cultivamos con amor y sostenibilidad.
                Descubre la frescura y el sabor que solo nuestros bananos
                orgánicos pueden ofrecer. ¡Disfruta de lo mejor de la
                naturaleza, disfruta de <b>COOPERTATIVA AGRO PERU!</b>
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-lime-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-lime-600 hover:bg-lime-800 hover:ring-indigo-700"
                >
                  Explora nuestros servicios
                  <span className="text-indigo-200" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
                {/* <a
                  href="#"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Live demo
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </a> */}
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img
                src="https://images.pexels.com/photos/1072177/pexels-photo-1072177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
