import React from "react";
import global from "assets/img/global.png";
import fairtrade from "assets/img/fairtrade.png";
import organic from "assets/img/organic.png";

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-5xl font-bold text-lime-600 text-center underline border-b-8 border-lime-700">
        Certificaciones
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
        <img src={global} className="w-40" />
        <img src={fairtrade} width={120} height={110} className="" />
        <img src={organic} width={120} height={110} className="" />
      </div>
    </div>
  );
};

export default Clients;
