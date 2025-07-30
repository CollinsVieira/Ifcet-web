import logo from "../assets/logo-ifcet.webp";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import WhatsApp from "../utils/WhatsApp.tsx";
import Facebook from "../utils/Facebook.tsx";
import Instagram from "../utils/Instagram.tsx";
import LinkedIn from "../utils/LinkedIn.tsx";
import TikTok from "../utils/Tiktok.tsx";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Desktop
    <header className="sticky top-0 z-50">
      <div className="bg-[#010101] text-white min-h-[40px] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 hidden md:flex">
        <div className="flex gap-x-4 lg:gap-x-6 xl:gap-x-8 text-[11px] lg:text-[12px] font-semibold">
          <a href="#" className="flex items-center">
            <Phone size={14} className="lg:w-4 lg:h-4" />
            <span className="ml-1 lg:ml-2">+51 950 268 312</span>
          </a>
          <a href="#" className="flex items-center">
            <Mail size={14} className="lg:w-4 lg:h-4" />
            <span className="ml-1 lg:ml-2">administracion@ifcet.com.pe</span>
          </a>
          <a href="#" className="flex items-center">
            <MapPin size={14} className="lg:w-4 lg:h-4" />
            <span className="ml-1 lg:ml-2">Calle las Rosas #110</span>
          </a>
        </div>
      </div>

      <div className="bg-[#eaebf1] text-ifcet-primary items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 min-h-[70px] flex">
        {/* Móvil: Logo y hamburguesa con justify-between */}
        <div className="flex justify-between items-center w-full md:hidden">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-[30px] w-auto mt-1" />
          </Link>
          <button className="flex-shrink-0" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <img
                src={close}
                alt="Cerrar Menu"
                className="w-[28px] h-[28px]"
              />
            ) : (
              <img
                src={hamburger}
                alt="Abrir Menu"
                className="w-[28px] h-[28px]"
              />
            )}
          </button>
        </div>

        {/* Desktop: Estructura original */}
        <div className="hidden md:flex justify-between items-center w-full gap-x-4 lg:gap-x-6 xl:gap-x-8">
          <div className="flex gap-x-4 lg:gap-x-6 xl:gap-x-8 text-[14px] lg:text-[15px] xl:text-[16px] font-bold items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-[30px] w-auto mt-1" />
            </Link>
            <div className="flex gap-x-4 lg:gap-x-6 xl:gap-x-8 text-[14px] lg:text-[15px] xl:text-[16px] font-bold">
              <Link to="/docentes" className="whitespace-nowrap">Docentes</Link>
              <Link to="/blog" className="whitespace-nowrap">Blog</Link>
              <Link to="/noticias" className="whitespace-nowrap">Noticias</Link>
              <Link to="/cursos" className="whitespace-nowrap">Cursos</Link>
            </div>
          </div>
          <div className="flex gap-x-4 lg:gap-x-6 xl:gap-x-8 text-[14px] lg:text-[15px] xl:text-[16px] font-bold">
            <Link to="/biblioteca" className="whitespace-nowrap">Biblioteca</Link>
            <Link to="/aula-virtual" className="whitespace-nowrap">Aula Virtual</Link>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`bg-[#e3e4e6] text-ifcet-primary md:hidden transition-all duration-300 
        ${
          isOpen
            ? "opacity-100 visible max-h-screen mt-1"
            : "opacity-0 invisible max-h-0"
        }`}
      >
        <div className="px-4 py-6">
          <ul className="flex flex-col gap-y-4">
            <li className="text-center">
              <Link to="/biblioteca">Biblioteca</Link>
            </li>
            <li className="text-center">
              <Link to="/aula-virtual">Aula Virtual</Link>
            </li>
            <li className="text-center">
              <Link to="/docentes">Docentes</Link>
            </li>
            <li className="text-center">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="text-center">
              <Link to="/noticias">Noticias</Link>
            </li>
            <li className="text-center">
              <Link to="/cursos">Cursos</Link>
            </li>
            <li className="text-center">
              <Link to="/contacto">Contáctanos</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`bg-[#eaebf1] text-ifcet-primary md:hidden transition-all duration-300 
        ${
          isOpen
            ? "opacity-100 visible max-h-screen mt-1"
            : "opacity-0 invisible max-h-0"
        }`}
      >
        <div className="p-2 flex justify-center items-center gap-x-4">
          <a href="" className="hover:opacity-80" target="_blank">
            <WhatsApp className="w-[28px] h-[28px]" />
          </a>
          <a href="" className="hover:opacity-80" target="_blank">
            <Facebook className="w-[28px] h-[28px]" />
          </a>
          <a href="" className="hover:opacity-80" target="_blank">
            <Instagram className="w-[28px] h-[28px]" />
          </a>
          <a href="" className="hover:opacity-80" target="_blank">
            <LinkedIn className="w-[28px] h-[28px]" />
          </a>
          <a href="" className="hover:opacity-80" target="_blank">
            <TikTok className="w-[28px] h-[28px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
