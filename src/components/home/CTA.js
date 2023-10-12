import { NavLink, Link } from "react-router-dom";

export default function CTA() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">
            ¿Preparado para explorar el banano orgánico?
          </span>
          <span className="block text-lime-600">
            ¡Comienza tu viaje hoy mismo con nosotros!
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/servicios"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-lime-600 px-5 py-3 text-base font-medium text-white hover:bg-lime-800"
            >
              Conocenos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
