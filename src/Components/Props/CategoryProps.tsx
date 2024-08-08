import { FC, ReactNode, useContext } from "react";
import { GlobalContext } from "../../Provider/ContextProvider";
import { NavLink } from "react-router-dom";

interface iCategoryProps {
  name: string;
  name2: string;
  name3: string;
  name4: string;
  icon: ReactNode;
  icon2: ReactNode;
  icon3: ReactNode;
  icon4: ReactNode;
  url: string;
  url2: string;
  url3: string;
  url4: string;
}

const CategoryProps: FC<iCategoryProps> = ({
  name,
  name2,
  name3,
  name4,
  icon,
  icon2,
  icon3,
  icon4,
  url,
  url2,
  url3,
  url4,
}) => {
  const { toggle } = useContext(GlobalContext);
  return (
    <div>
      <div className="w-full py-[20px] transition-all duration-[350ms] ">
        {!toggle && (
          <div className="pl-2 mb-3 transition-all duration-[350ms] text-[17px] font-semibold text-white">
            Category
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

        <NavLink
          to={url2}
          className={({ isActive }) =>
            isActive
              ? "w-full pl-2 mb-2 py-2 flex justify-start items-center gap-3 cursor-pointer text-[19px] font-semibold transition-all duration-[350ms] bg-white rounded-l-md text-[#100a05]"
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

        <NavLink
          to={url3}
          className={({ isActive }) =>
            isActive
              ? "w-full pl-2 mb-2 py-2 flex justify-start items-center gap-3 cursor-pointer text-[19px] font-semibold transition-all duration-[350ms] bg-white rounded-l-md text-[#100a05]"
              : "w-full pl-2 mb-2 py-2 flex justify-start items-center gap-3 cursor-pointer text-[19px] font-semibold transition-all duration-[350ms] hover:rounded-md text-[white]"
          }
        >
          {toggle ? (
            <div className="text-[25px] transition-all duration-[350ms]">
              {icon3}
            </div>
          ) : (
            <div className="">{icon3}</div>
          )}
          {!toggle && <div className="">{name3}</div>}
        </NavLink>

        <NavLink
          to={url4}
          className={({ isActive }) =>
            isActive
              ? "w-full pl-2 mb-2 py-2 flex justify-start items-center gap-3 cursor-pointer text-[19px] font-semibold transition-all duration-[350ms] bg-white rounded-l-md text-[#100a05]"
              : "w-full pl-2 mb-2 py-2 flex justify-start items-center gap-3 cursor-pointer text-[19px] font-semibold transition-all duration-[350ms] hover:rounded-md text-[white]"
          }
        >
          {toggle ? (
            <div className="text-[25px] transition-all duration-[350ms]">
              {icon4}
            </div>
          ) : (
            <div className="">{icon4}</div>
          )}
          {!toggle && <div className="">{name4}</div>}
        </NavLink>
      </div>
    </div>
  );
};

export default CategoryProps;
