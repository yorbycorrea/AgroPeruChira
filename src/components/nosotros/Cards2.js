import { RiShakeHandsLine } from "react-icons/ri";
import { RiHandHeartLine } from "react-icons/ri";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { RiScales3Line } from "react-icons/ri";

function Cards2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <div className="bg-white hover:bg-cyan-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer hover:-translate-y-2">
        <div className="flex justify-center py-8">
          <a alt="JT Devs" className=" rounded-full w-18 h-18 object-cover">
            <RiShakeHandsLine size="48px" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <h3 className="font-semibold text-xl group-hover:text-white transition-all">
            Trabajo en Equipo
          </h3>
          <p className="text-gray-600 group-hover:text-gray-300 text-center">
            En nuestro ADN está el valor del trabajo en equipo. Fomentamos una
            cultura de colaboración y comunicación efectiva. Aquí, la
            productividad y la moral se disparan gracias al poder del equipo.
          </p>
        </div>
      </div>
      <div className="bg-white hover:bg-cyan-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer hover:-translate-y-2">
        <div className="flex justify-center py-8">
          <a alt="JT Devs" className=" rounded-full w-18 h-18 object-cover ">
            <RiHandHeartLine size="48px" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <h3 className="font-semibold text-xl group-hover:text-white transition-all">
            Diversidad e Inclusión
          </h3>
          <p className="text-gray-600 group-hover:text-gray-300 text-center">
            Celebramos la diversidad en nuestra casa. Creemos que la mezcla de
            perspectivas y experiencias enriquece nuestro camino hacia la
            excelencia. Todos son bienvenidos y respetados.
          </p>
        </div>
      </div>
      <div className="bg-white hover:bg-cyan-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer  hover:-translate-y-2">
        <div className="flex justify-center py-8">
          <a alt="JT Devs" className=" rounded-full w-18 h-18 object-cover ">
            <RiVerifiedBadgeLine size="48px" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <h3 className="font-semibold text-xl group-hover:text-white transition-all">
            Compromiso con el Cliente
          </h3>
          <p className="text-gray-600 group-hover:text-gray-300 text-center">
            Celebramos la diversidad en nuestra casa. Creemos que la mezcla de
            perspectivas y experiencias enriquece nuestro camino hacia la
            excelencia. Todos son bienvenidos y respetados.
          </p>
        </div>
      </div>
      <div className="bg-white hover:bg-cyan-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer hover:-translate-y-2">
        <div className="flex justify-center py-8">
          <a alt="JT Devs" className=" rounded-full w-18 h-18 object-cover">
            <RiScales3Line size="48px" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <h3 className="font-semibold text-xl group-hover:text-white transition-all">
            Transparencia
          </h3>
          <p className="text-gray-600 group-hover:text-gray-300 text-center">
            Operamos con honestidad y transparencia en cada acción que
            emprendemos. La confianza y la colaboración son las bases de
            nuestras relaciones.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Cards2;
