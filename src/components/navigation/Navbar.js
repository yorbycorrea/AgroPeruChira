import { connect } from "react-redux";
//import { Popover, Transition } from '@headlessui/react'
//import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState, Fragment, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import logo_agroperu from "assets/img/agro_peru.png";
import DotLoader from "react-spinners/DotLoader";

function Navbar() {
  const [loading, setLoading] = useState(true);

  window.onscroll = function () {
    scrollFunction();
  }; // esto es para el scrool

  function scrollFunction() {
    if (document.getElementById("navbar")) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("navbar").classList.add("shadow-navbar");
        document.getElementById("navbar").classList.add("bg-white");
      } else {
        document.getElementById("navbar").classList.remove("shadow-navbar");
        document.getElementById("navbar").classList.remove("bg-white");
      }
    }
  }

  //const [open, setOpen] = useState(false)

  return (
    <nav
      data-scroll
      data-scroll-id="hey"
      id="navbar"
      className="w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed"
    >
      <div className="px-4 sm:px-6">
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to="/" className="ml-4 mt-2">
            <img src={logo_agroperu} width={120} height={110} className="" />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/Inicio"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
            >
              Inicio
            </NavLink>
            <NavLink
              to="/nosotros"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/servicios"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
            >
              Servicios
            </NavLink>

            <NavLink
              to="/blog"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contacto"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
            >
              Contacto
            </NavLink>

            <Link
              to="/contacto"
              className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Contactanos
              <DotLoader
                className="ml-3 -mr-1 h-5 w-5"
                loading={loading}
                size={20}
                color="#f2f2f2"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Navbar);
