import imagen1 from "assets/img/imagen1_storie.jpg";
import imagen2 from "assets/img/Imagen2_storie.png";

function Stories() {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-5xl px-4  sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
                Constantes Capacitaciones
              </h1>
              <p className="mt-4 text-xl text-black  text-justify">
                Con el objetivo de mejorar la capacidad de cultivar banano
                orgánico de manera sostenible y rentable, así como mantener
                altos estándares de calidad y seguridad alimentaria.
              </p>
            </div>
            <div>
              <div className="mt-50">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src={imagen1}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-white ">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48  ">
          <div className="relative mx-auto max-w-5xl px-4  sm:px-6 lg:px-8 ">
            <div className="sm:max-w-lg ">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center ">
                Programa de Ayuda al productor
              </h1>
              <p className="mt-4 text-xl text-black  text-justify ">
                Con el objetivo de mejorar la calidad y la cantidad de la
                cosecha proporcionamos el abono adecuado y en cantidad
                suficiente para poder enriquecer el suelo, lo que a su vez puede
                aumentar la produccion de cultivos y mejorar la calidad de los
                productos.
              </p>
            </div>
            <div>
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8  ">
                <div className="flex justify-items-end space-x-4 space-x-reverse lg:space-x-8  ">
                  <div className="h-64 w-54 overflow-hidden rounded-lg flex items-center ">
                    <img
                      src={imagen2}
                      alt=""
                      className="h-full w-full  object-end"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stories;
