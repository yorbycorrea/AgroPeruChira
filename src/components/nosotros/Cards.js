import { RiTeamLine } from "react-icons/ri";
import { RiMedalLine } from "react-icons/ri";
import { RiBrainLine } from "react-icons/ri";
import { RiPlantLine } from "react-icons/ri";

function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <div className="bg-white hover:bg-cyan-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer hover:-translate-y-2">
        <div className="flex justify-center py-8">
          <a alt="JT Devs" className=" rounded-full w-18 h-18 object-cover">
            <RiTeamLine size="48px" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <h3 className="font-semibold text-xl group-hover:text-white transition-all">
            Integridad
          </h3>
          <p className="text-gray-600 group-hover:text-gray-300 text-center">
            Actuamos con ética y honestidad en todas nuestras relaciones para
            construir confianza con nuestros clientes, empleados y socios
            comerciales.
          </p>
        </div>
      </div>
      <div className="bg-white hover:bg-cyan-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer hover:-translate-y-2">
        <div className="flex justify-center py-8">
          <a alt="JT Devs" className=" rounded-full w-18 h-18 object-cover ">
            <RiMedalLine size="48px" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <h3 className="font-semibold text-xl group-hover:text-white transition-all">
            Calidad
          </h3>
          <p className="text-gray-600 group-hover:text-gray-300 text-center">
            Nuestro compromiso es la excelencia. Entregamos productos y
            servicios excepcionales. Son la clave de nuestra satisfacción del
            cliente y nuestra reputación impecable.
          </p>
        </div>
      </div>
      <div className="bg-white hover:bg-cyan-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer  hover:-translate-y-2">
        <div className="flex justify-center py-8">
          <a alt="JT Devs" className=" rounded-full w-18 h-18 object-cover ">
            <RiBrainLine size="48px" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <h3 className="font-semibold text-xl group-hover:text-white transition-all">
            Innovacion
          </h3>
          <p className="text-gray-600 group-hover:text-gray-300 text-center">
            Enfrentamos el cambio constante con valentía. Innovar es nuestra
            brújula para mantenernos en la cima en un mundo en constante
            evolución. Buscamos incansablemente nuevas ideas y nos esforzamos
            por mejorar continuamente.
          </p>
        </div>
      </div>
      <div className="bg-white hover:bg-cyan-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer hover:-translate-y-2">
        <div className="flex justify-center py-8">
          <a alt="JT Devs" className=" rounded-full w-18 h-18 object-cover">
            <RiPlantLine size="48px" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <h3 className="font-semibold text-xl group-hover:text-white transition-all">
            Responsabilidad Social
          </h3>
          <p className="text-gray-600 group-hover:text-gray-300 text-center">
            No solo buscamos el éxito financiero, sino también el bienestar de
            nuestra sociedad y el planeta. Tomamos medidas decididas para
            contribuir de manera positiva en cada paso que damos.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Cards;
