import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Provider/ContextProvider";
import DashSideBar from "./DashSideBar";

const DashLayout = () => {
  const { toggle } = useContext(GlobalContext);

  return (
    <div className="md:flex transition-all duration-300">
      <div
        className={`hidden md:block fixed z-20 transition-all duration-[350] h-[100vh]
      ${toggle ? "md:w-[80px]" : "md:w-[230px]"}`}
      >
        <div></div>
        <DashSideBar />
      </div>

      <div className="w-full transition-all duration-300 flex md:justify-end bg-[#696969]">
        <div
          className={`w-full transition-all duration-300 ${
            toggle ? "md:w-[calc(100vw-80px)]" : "md:w-[calc(100vw-230px)]"
          }
          `}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
