import { useState } from "react";
import imgFama from "/fama.svg";


const Header = () => {
  const [menuOpn, setMenuOpn] = useState(false);

  return (
      <nav className="bg-gradient-to-r from-blue-100 via-blue-200 to-gray-300 shadow-xl">
        <div className="max-w-full mx-auto px-8 sm:px-10 lg:px-10">
          <div className="flex items-center justify-between h-28">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0">
                <img className="h-32 w-32" src={imgFama} alt="Logotipo fama" />
              </a>
            </div>
            <div className="hidden md:block">
                <div className="flex items-baseline space-x-6">
                  <a href="#" className="text-blue-950 hover:text-blue-400 hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out ">Início</a>
                  <a href="#" className="text-blue-950 hover:text-blue-400 hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out">Serviços</a>
                  <a href="#" className="text-blue-950 hover:text-blue-400 hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out">Sobre nós</a>
                  <a href="#" className="text-blue-950 hover:text-blue-400 hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out">Orçamento</a>
                </div>
              </div>
            <div className="mr-2 flex md:hidden">
              <button id="Button" type="button" onClick={() => setMenuOpn(!menuOpn)} className="inline-flex items-center justify-center p-2 rounded-md text-blue-950 hover:text-blue-400 hover:bg-white focus:outline-none focus:bg-white focus:text-blue-400 transition duration-500 ease-in-out" aria-label="menu" aria-expanded="false">
                <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
          {menuOpn == true ? (
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <a href="#" className="text-blue-950 hover:text-blue-400 hover:bg-white block px-3 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out">Início</a>
            <a href="#" className="text-blue-950 hover:text-blue-400 hover:bg-white block px-3 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out">Serviços</a>
            <a href="#" className="text-blue-950 hover:text-blue-400 hover:bg-white block px-3 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out">Sobre</a>
            <a href="#" className="text-blue-950 hover:text-blue-400 hover:bg-white block px-3 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out">Orçamento</a>
          </div>
          ): null}
      </nav>
  );
};

export default Header;
