import { BiLogoJava, BiLogoPhp, BiLogoTailwindCss } from "react-icons/bi";
import {
  IoLogoAndroid,
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoNpm,
} from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import TimeLine from "../components/TimeLine";
import MatrixBackground from "../components/MatrixBackground";
import Icon from "../components/Icon";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-950 flex-col gap-4 text-white">
      <MatrixBackground/>
        <h1 className="sm:text-6xl text-3xl h-20 font-bold bg-gradient-to-r from-green-500 via-blue-500 to-green-500 bg-clip-text text-transparent animate-gradient">Welcome to lazaroysr96</h1>

      <div className="flex gap-2 z-10">
        <Icon Icon={IoLogoAndroid}/>
        <Icon Icon={IoLogoCss3}/>
        <Icon Icon={IoLogoGithub}/>
        <Icon Icon={IoLogoHtml5}/>
        <Icon Icon={IoLogoJavascript}/>
        <Icon Icon={IoLogoNodejs}/>
        <Icon Icon={IoLogoNpm}/>
        <Icon Icon={IoLogoReact}/>
        <Icon Icon={BiLogoTailwindCss}/>
        <Icon Icon={BiLogoJava}/>
        <Icon Icon={BiLogoPhp}/>
      </div>
      <h3 className="text-xl">Lic. Lazaro Yunier Salazar Rodriguez</h3>
      <h2 className="text-lg">Desarrollador Full Stack</h2>
      <TimeLine/>
    </div>
  );
}

export default App;
