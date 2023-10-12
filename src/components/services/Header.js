import Lottie from "lottie-react";
import hola from "hola.json";

function Header() {
  return (
    <>
      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-1/2 px-10 lg:w-1/2 xl:w-5/12">
              <div className="mt-8 lg:mt-0 justify-items-start">
                <h1 className="text-2xl font-bold tracking-tight pb-12  sm:text-5xl text-left text-white">
                  Servicios de Cosecha y Empaque de Banano Organico
                  <div
                    className="inline-flex"
                    style={{ color: "green", fontWeight: "bold" }}
                  ></div>
                </h1>
                <p className="mb-8 text-base text-body-color text-white">
                  Nuestro compromiso es la excelencia en cada etapa: desde la
                  cosecha hasta el empaque. Con años de experiencia en banano
                  orgánico, garantizamos calidad y frescura en cada fruto que
                  entregamos. Confíe en nosotros para llevar su banano a nuevos
                  mercados de manera sostenible y deliciosa
                </p>
              </div>
            </div>
            <div className="w-1/2 px-16 lg:w-6/12 justify-end">
              <div className="flex  items-end -mx-3 sm:-mx-4 ">
                <div className="w-full px-5 sm:px-4 xl:w-1/2">
                  <div className="relative z-4 my-6">
                    <Lottie
                      loop={true}
                      animationData={hola}
                      autoplay={true}
                      style={{ height: "400px", width: "500px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img
                src="https://images.pexels.com/photos/1072177/pexels-photo-1072177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
