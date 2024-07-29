import { useContext } from "react";
import { MdCreate } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Provider/ContextProvider";

const DashHeader = () => {
  const { toggle } = useContext(GlobalContext);
  return (
    <div
      className={` ${
        toggle ? "md:w-[calc(100vw-80px)]" : "md:w-[calc(100vw-230px)]"
      } h-full flex justify-center md:justify-center items-center`}
    >
      <div className="w-[90%] md:w-[80%] lg:w-[90%] flex justify-end items-center">
        <NavLink
          to="publish"
          className={({ isActive }) => (isActive ? "" : "")}
        >
          <button className="py-3 px-3 bg-gray-200 text-[#696969] rounded-[10px] font-semibold shadow-md flex justify-center items-center gap-2">
            publish a post
            <MdCreate className="" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DashHeader;
