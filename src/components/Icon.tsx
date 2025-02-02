import { FC } from "react";
import { IconType } from "react-icons";

const Icon:FC<{Icon:IconType}> = ({Icon}) =>{
    return <Icon className="duration-500 cursor-pointer hover:text-green-500 sm:text-5xl text-3/1"/>
}

export default Icon