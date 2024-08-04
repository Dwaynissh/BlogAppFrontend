import { FC } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface iNav {
  name: string;
}
const LittleNav: FC<iNav> = ({ name }) => {
  return (
    <div>
      <div className="mt-3 text-black flex justify-center items-center gap-2">
        <Link to="/dashboard">
          <h1 className="text-[18px] text-[#696969]">Go Back</h1>
        </Link>
        <FaAngleRight />
        <h1 className="text-[18px] text-[black]">{name}</h1>
      </div>
    </div>
  );
};

export default LittleNav;
