import { FC } from "react";
import { IconType } from "react-icons";

const Icon:FC<{Icon:IconType}> = ({Icon}) =>{
    return <Icon className="duration-500 cursor-pointer hover:-translate-y-3 text-5xl"/>
}

export default Icon