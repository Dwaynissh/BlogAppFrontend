import { FC, ReactNode, useContext } from "react";
import { GlobalContext } from "../../Provider/ContextProvider";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutState } from "../../Redux/ReduxState";
import { logoutUser } from "../../Api/AuthApi";
import toast, { Toaster } from "react-hot-toast";

interface iOthersProps {
  name: string;
  name2: string;
  icon: ReactNode;
  icon2: ReactNode;
  url: string;
}

const OthersProps: FC<iOthersProps> = ({ name, name2, icon, icon2, url }) => {
  const { toggle } = useContext(GlobalContext);
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      logoutUser().then((res) => {
        toast.success("Logout Successfully");
        dispatch(logoutState());
        return res;
      });
    } catch (error) {
      console.error();
    }
  };
  return (
    <div>
      <Toaster />
      <div className="w-full py-[15px] ">
        {!toggle && (
          <div className="pl-2 mb-3 transition-all duration-[350ms] text-[17px] font-semibold text-white">
            Others
          </div>
        )}

        <NavLink
          to={url}
          className={({ isActive }) =>
            isActive
              ? "w-full pl-2 mb-2 py-2 flex justify-start items-center gap-3 cursor-pointer text-[19px] font-semibold transition-all duration-[350ms] bg-white rounded-l-md text-[#100a05]"
              : "w-full pl-2 mb-2 py-2 flex justify-start items-center gap-3 cursor-pointer text-[19px] font-semibold transition-all duration-[350ms] hover:rounded-md text-[white]"
          }
        >
          {toggle ? (
            <div className="text-[25px] transition-all duration-[350ms]">
              {icon}
            </div>
          ) : (
            <div className="">{icon}</div>
          )}
          {!toggle && <div className="">{name}</div>}
        </NavLink>

        <div
          className="w-full pl-2 mb-2 py-2 flex justify-start items-center bred gap-3 cursor-pointer text-[19px] font-semibold transition-all duration-[350ms] hover:rounded-md text-[white]"
          onClick={() => {
            handleLogout();
          }}
        >
          {toggle ? (
            <div className="text-[25px] transition-all duration-[350ms]">
              {icon2}
            </div>
          ) : (
            <div className="">{icon2}</div>
          )}
          {!toggle && <div>{name2}</div>}
        </div>
      </div>
    </div>
  );
};

export default OthersProps;
