import { FC } from "react";
import { IoIosLink } from "react-icons/io";

const IconLink: FC<{link: string, label:string }> = ({ link,label }) => {
  return (
    <a className="flex gap-1 items-center text-blue-500" href={link} target="_blank">
      <IoIosLink className="duration-500 cursor-pointer hover:text-green-blue" />
      <span>{label}</span>
    </a>
  );
};

export default IconLink;
