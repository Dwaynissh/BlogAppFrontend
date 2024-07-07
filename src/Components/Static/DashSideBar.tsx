import { FaAngleLeft, FaBookmark, FaHeart } from "react-icons/fa";
import { MdFeed, MdLogout, MdSettings } from "react-icons/md";
import {} from "react-icons/ri";
import { PiChurchDuotone } from "react-icons/pi";
import { GiMountainClimbing } from "react-icons/gi";
import { FaUserPen } from "react-icons/fa6";
import { SiStorybook } from "react-icons/si";
import { GlobalContext } from "../../Provider/ContextProvider";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CategoryProps from "../Props/CategoryProps";
import ManageProps from "../Props/ManageProps";
import OthersProps from "../Props/OthersProps";

const DashSideBar = () => {
  // const sideData = [
  //   {
  //     name: "fiction",
  //     icon: <SiStorybook />,
  //     url: "/fiction",
  //   },
  //   {
  //     name: "non-fiction",
  //     icon: <FaUserPen />,
  //     url: "/nonfiction",
  //   },
  //   {
  //     name: "religious",
  //     icon: <PiChurchDuotone />,
  //     url: "/religious",
  //   },
  //   {
  //     name: "adventure",
  //     icon: <GiMountainClimbing />,
  //     url: "/adventure",
  //   },
  // ];
  // const manageData = [
  //   {
  //     name: "bookmarks",
  //     icon: <FaBookmark />,
  //     url: "/bookmark",
  //   },
  //   {
  //     name: "history",
  //     icon: <FaHistory />,
  //     url: "/",
  //   },
  // ];
  // const othersData = [
  //   {
  //     name: "settings",
  //     icon: <MdSettings />,
  //     url: "/settings",
  //   },
  //   {
  //     name: "Logout",
  //     icon: <MdLogout />,
  //     url: "/",
  //   },
  // ];

  const { toggle, handleToggle } = useContext(GlobalContext);

  return (
    <div className="h-full bg-[#696969] pl-4 transition-all duration-300">
      <div className="h-full flex transition-all duration-300 justify-start items-center flex-col">
        <div
          className="rounded-full transition-all duration-300 p-[4px] shadow-md bg-white hover:bg-gray-300 text-[696969] hover:text-gray-500 absolute right-0 top-2 flex justify-center items-center cursor-pointer"
          onClick={handleToggle}
        >
          <FaAngleLeft
            className={` ${
              toggle ? "rotate-180" : "rotate-60"
            } transition-all duration-1000 text-[20px]`}
          />
        </div>

        <div className="h-[80px] py-3 w-full flex justify-start items-center">
          <div
            className={`${
              toggle ? "text-[17px]" : "text-[25px]"
            } transition-all duration-300 text-[white] pt-3 font-bold flex justify-center items-center`}
          >
            MY BLOG
          </div>
        </div>

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive
              ? "w-full pl-2 py-2 mt-[37px] mb-4 flex items-center gap-3 cursor-pointer text-[19px] font-semibold text-[#696969] bg-white rounded-l-md rounded-br-[0px]"
              : "w-full pl-2 py-2 mt-[37px] mb-4 flex items-center gap-3 cursor-pointer text-[19px] font-semibold text-white"
          }
        >
          {toggle ? (
            <div className="text-[25px] transition-all duration-300">
              <MdFeed />
            </div>
          ) : (
            <div className="transition-all duration-300">
              <MdFeed />
            </div>
          )}
          {!toggle && (
            <div className="transition-all duration-300">My Feed </div>
          )}
        </NavLink>

        <div className="w-full transition-all duration-300">
          <CategoryProps
            name="fiction"
            url="fiction"
            icon={<SiStorybook />}
            name2="non-fiction"
            url2="nonfiction"
            icon2={<FaUserPen />}
            name3="religious"
            url3="religious"
            icon3={<PiChurchDuotone />}
            name4="adventure"
            url4="adventure"
            icon4={<GiMountainClimbing />}
          />
        </div>

        <div className="w-full transition-all duration-300">
          <ManageProps
            name="bookmarks"
            url="bookmark"
            icon={<FaBookmark />}
            name2="liked"
            url2="liked"
            icon2={<FaHeart />}
          />
        </div>

        <div className="flex-1" />
        <div className="w-full mb-1 transition-all duration-300">
          <OthersProps
            name="settings"
            url="settings"
            icon={<MdSettings />}
            name2="Logout"
            url2="/"
            icon2={<MdLogout />}
          />
        </div>
      </div>
    </div>
  );
};

export default DashSideBar;
