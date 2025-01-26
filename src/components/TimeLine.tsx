import { FC } from "react";
import { FaBriefcase, FaCode, FaGraduationCap, FaProjectDiagram } from "react-icons/fa";

const TimeLine: FC = () =>{
    return <div className="container mx-auto px-4 py-8 overflow-auto">
    <div className="relative">
      <div className="absolute left-1/2 w-1 bg-gray-300 h-full"></div>
      <div className="space-y-8">
        {/**Punto 1 */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <h3 className="text-xl font-bold">Estudios</h3>
            <p className="text-gray-600">Técnico Medio en Elaboración de Alimentos</p>
            <p className="text-gray-600">Operador de Microcomputadoras</p>
            <p className="text-gray-600">Licenciatura en Contabilidad y Finanzas</p>
          </div>
          <div className="size-12 bg-blue-500 rounded-full flex items-center justify-center relative">
            <FaGraduationCap className="text-white text-2xl" />
            <div className="absolute right-full w-8 h-1 bg-gray-300"></div>
          </div>
          <div className="w-1/2 pl-8">{/*Espacio vacio */}</div>
        </div>

        {/**punto 2 */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">{/**Espacio vacio */}</div>
          <div className="size-12 bg-green-500 rounded-full flex items-center justify-center relative">
            <FaBriefcase className="text-white text-2xl" />
            <div className="absolute left-full w-8 h-1 bg-gray-300"></div>
          </div>
          <div className="w-1/2 pl-8">
            <h3 className="text-xl font-bold">Trayectoria Laboral</h3>
            <p className="text-gray-600">Tecnico A en Gestión de RRHH</p>
            <p className="text-gray-600">Tecnico C en Gestión Documental</p>
          </div>
        </div>

        {/**punto 3 */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <h3 className="text-xl font-bold">Freelance</h3>
            <p className="text-gray-600">Desarrollo de Proyectos independientes para android y webs, utilizando, java, javascript, php, css, Html5, React, Tailwind, etc...</p>
          </div>
          <div className="size-12 bg-purple-500 rounded-full flex items-center justify-center relative">
            <FaCode className="text-white text-2xl" />
            <div className="absolute right-full w-8 h-1 bg-gray-300"></div>
          </div>
          <div className="w-1/2 pl-8">{/*Espacio vacio */}</div>
        </div>

        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">{/**Espacio vacio */}</div>
          <div className="size-12 bg-red-500 rounded-full flex items-center justify-center relative">
            <FaProjectDiagram className="text-white text-2xl" />
            <div className="absolute left-full w-8 h-1 rounded-r-full bg-gray-300"></div>
          </div>
          <div className="w-1/2 pl-9">
            <h3 className="text-xl font-bold">Colaboraciones</h3>
            <p className="text-gray-600">Mirage</p>
            <p className="text-gray-600">ERC20 - Vault</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default TimeLine