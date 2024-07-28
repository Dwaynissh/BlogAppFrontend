import { FC, ReactNode, useContext } from "react";
import { GlobalContext } from "../../Provider/ContextProvider";
import { NavLink } from "react-router-dom";

interface iManageProps {
  name: string;
  name2: string;
  icon: ReactNode;
  icon2: ReactNode;
  url: string;
  url2: string;
}

const ManageProps: FC<iManageProps> = ({
  name,
  name2,
  icon,
  icon2,
  url,
  url2,
}) => {
  const { toggle } = useContext(GlobalContext);
  return (
    <div>
      <div className="w-full py-[15px] ">
        {!toggle && (
          <div className="pl-2 mb-3 transition-all duration-[350ms] text-[17px] font-semibold text-white">
            Manage
          </div>
        )}

        <NavLink
          to={url}
          className={({ isActive }) =>
            isActive
              ? "w-full pl-2 mb-2 py-2 flex justify-start items-center gap-3 cursor-pointer text-[19px] font-semibold transition-all duration-[350ms] bg-white rounded-l-md text-[#696969]"
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

        <NavLink
          to={url2}
          className={({ isActive }) =>
            isActive
              ? "w-full pl-2 mb-2 py-2 flex justify-start items-center gap-3 cursor-pointer text-[19px] font-semibold transition-all duration-[350ms] bg-white rounded-l-md text-[#696969]"
              : "w-full pl-2 mb-2 py-2 flex justify-start items-center gap-3 cursor-pointer text-[19px] font-semibold transition-all duration-[350ms] hover:rounded-md text-[white]"
          }
        >
          {toggle ? (
            <div className="text-[25px] transition-all duration-[350ms]">
              {icon2}
            </div>
          ) : (
            <div className="">{icon2}</div>
          )}
          {!toggle && <div className="">{name2}</div>}
        </NavLink>
      </div>
    </div>
  );
};

export default ManageProps;
