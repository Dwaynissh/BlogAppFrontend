import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Provider/ContextProvider";
import DashSideBar from "./DashSideBar";
import DashHeader from "./DashHeader";

const DashLayout = () => {
  const { toggle } = useContext(GlobalContext);

  return (
    <div className="md:flex">
      <div
        className={`md:flex w-[230px] h-[100vh] fixed hidden bg-yellow-500  transition-all duration-300 z-30`}
      >
        <DashSideBar />
      </div>
      <div className="flex w-[calc(100%)] justify-end">
        <div
          className={`flex flex-col w-[100%] transition-all duration-300 ${
            toggle ? "md:w-[calc(100%-230px)]" : "md:w-[calc(100%-230px)]"
          } justify-end`}
        >
          <DashHeader />
          <div className="min-h-[calc(100vh-70px)]  ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
