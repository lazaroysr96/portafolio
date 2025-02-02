import { FC } from "react";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";
import { IoMdCube } from "react-icons/io";
import { IoCalendar, IoLocation } from "react-icons/io5";
import IconLink from "./IconLink";

const TimeLine: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 overflow-auto">
      <div className="relative">
        <div className="absolute left-1/2 w-1 bg-slate-600 rounded-xl h-full"></div>
        <div className="space-y-8">
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-9 text-right">
              <h3 className="text-xl font-bold">Estudios</h3>
              <p className="text-slate-300">
                Técnico Medio en Elaboración de Alimentos
              </p>
              <p className="text-slate-300">Operador de Microcomputadoras</p>
              <p className="text-slate-300">
                Licenciatura en Contabilidad y Finanzas
              </p>
            </div>
            <div className="size-12 bg-blue-500 rounded-full flex items-center justify-center relative">
              <FaGraduationCap className="text-white text-2xl" />
              <div className="absolute right-full w-8 h-1 bg-slate-600 rounded-l-xl"></div>
            </div>
            <div className="w-1/2 pl-8"></div>
          </div>

          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8 text-right"></div>
            <div className="size-12 bg-green-500 rounded-full flex items-center justify-center relative">
              <FaBriefcase className="text-white text-2xl" />
              <div className="absolute left-full w-8 h-1 bg-slate-600 rounded-r-xl"></div>
            </div>
            <div className="w-1/2 pl-8">
              <h3 className="text-xl font-bold">Trayectoria Laboral</h3>
              <p className="text-slate-300 pt-2 p-1">
                <div className="flex items-center gap-1">
                  <FaBriefcase />{" "}
                  <span className="text-base font-semibold">
                    Tecnico A en Gestión de RRHH
                  </span>
                </div>
                <div className="flex items-center gap-1 pl-5">
                  <IoLocation />
                  <span className="font-extralight text-sm">
                    UEB PCPE - EELT - UNE
                  </span>
                </div>
                <div className="flex items-center gap-1 pl-5">
                  <IoCalendar />
                  <span className="font-extralight text-sm">
                    octubre 2021 - enero 2022
                  </span>
                </div>

                <div className="flex items-center gap-1 pl-10">
                  <IoMdCube />
                  <span className="font-extralight text-sm">
                    Seguridad y salud en el trabajo
                  </span>
                </div>
              </p>

              <p className="text-slate-300 pt-2 p-1">
                <div className="flex items-center gap-1">
                  <FaBriefcase />{" "}
                  <span className="text-base font-semibold">
                    Tecnico C en Gestión Documental
                  </span>
                </div>
                <div className="flex items-center gap-1 pl-5">
                  <IoLocation />
                  <span className="font-extralight text-sm">
                    UEB PCPE - EELT - UNE
                  </span>
                </div>
                <div className="flex items-center gap-1 pl-5">
                  <IoCalendar />
                  <span className="font-extralight text-sm">
                    enero 2022 - hasta la actualidad
                  </span>
                </div>
                <div className="flex items-center gap-1 pl-10">
                  <IoMdCube />
                  <span className="font-extralight text-sm">Archivo</span>
                </div>

                <div className="flex items-center gap-1 pl-10">
                  <IoMdCube />
                  <span className="font-extralight text-sm">Informática</span>
                </div>
                <div className="flex items-center gap-1 pl-10">
                  <IoMdCube />
                  <span className="font-extralight text-sm">
                    Comunicaciones
                  </span>
                </div>
              </p>
            </div>
          </div>

          <div className="flex items-center w-full">
            <div className="w-1/2 pr-9 text-right">
              <h3 className="text-xl font-bold">Freelance</h3>
              {/* <div className="flex items-center justify-end gap-1 pl-5">
                  <i className="font-extralight text-sm">
                  febrero 2024 - hasta la actualidad
                  </i>
                  <IoCalendar />
                </div> */}
              <p className="text-slate-300">
                Desarrollo de Proyectos Independientes
              </p>
              <div className="flex items-center justify-end gap-1 pl-10">
                <IconLink
                  label="SYSGD"
                  link="https://github.com/lazaroysr96/sysgd/"
                />
              </div>
            </div>
            <div className="size-12 bg-purple-500 rounded-full flex items-center justify-center relative">
              <FaCode className="text-white text-2xl" />
              <div className="absolute right-full w-8 h-1 bg-slate-600 rounded-l-xl"></div>
            </div>
            <div className="w-1/2 pl-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
