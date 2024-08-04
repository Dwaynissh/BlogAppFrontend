import { useState } from "react";
import { AiFillProfile } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { FiSettings, FiUpload } from "react-icons/fi";
import { MdCreate, MdFeed, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import HeaderMobileNavs from "../../Components/Props/HeaderMobileNavs";
import { Link } from "react-router-dom";

const DashHeader = () => {
  const [drop, setDrop] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleDropdown = () => {
    setDrop(!drop);
  };
  return (
    <div className="h-[70px] flex justify-center items-center bg-[#b6b6b6] relative">
      <div className="w-[95%] py-2 flex justify-between items-center gap-5 transition-all duration-300">
        <div>
          <h1 className="font-semibold">Welcome Prince John</h1>
        </div>
        <div className="flex justify-end items-center gap-[20px] transition-all duration-300">
          <NavLink
            to="publish"
            className={({ isActive }) => (isActive ? "" : "")}
          >
            <button className="py-3 px-3 bg-gray-200 text-[#696969] rounded-[10px] font-semibold shadow-md flex justify-center items-center gap-2 scale-100">
              publish a post
              <MdCreate className="" />
            </button>
          </NavLink>
          <div>
            <div
              className="py-2 px-3 border border-black rounded-full font-bold bg-gray-200 text-[#696969] cursor-pointer"
              onClick={handleDropdown}
            >
              PJ
            </div>
          </div>
          <div className=" md:hidden">
            <BiMenuAltRight
              className={`${
                menu ? "rotate-60" : "rotate-180"
              } text-[30px] font-semibold transition-all duration-500 cursor-pointer`}
              onClick={handleMenu}
            />

            {/* Menu DropDown */}
            {menu && (
              <div
                className={`absolute top-[70px] right-0 py-[40px] px-4 ${
                  menu ? "w-[200px]" : "w-[0px]"
                }  bg-[#696969] h-[calc(100vh-70px)] flex justify-start items-start flex-col transition-all duration-[350ms] z-20 fixed`}
              >
                <Link to="/dashboard" className="w-full">
                  <div className="p-2 mb-4 w-full flex items-center justify-start gap-2 rounded-md text-white  hover:bg-white cursor-pointer text-[18px] hover:text-[#696969]">
                    <MdFeed />
                    <h1>My Feed</h1>
                  </div>
                </Link>
                <HeaderMobileNavs />
                <div className="flex-1" />
                <div className="mb-3 w-full border " />
                <div className="p-2 w-full flex items-center justify-start gap-2 rounded-md text-white  hover:bg-white cursor-pointer text-[18px] hover:text-[#696969]">
                  <MdLogout />
                  <h1>Logout</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Profile Dropdown Card */}
      {drop && (
        <div className="p-3 mb-2 min-w-[150px] min-h-[100px] bxs bg-white absolute top-[65px] right-[10px] rounded-lg z-20">
          <div className="p-2 flex items-center justify-start gap-2 rounded-md hover:bg-gray-300 cursor-pointer">
            <AiFillProfile />
            <h1>My Profile</h1>
          </div>
          <div className="p-2 flex items-center justify-start gap-2 rounded-md hover:bg-gray-300 cursor-pointer">
            <FiUpload />
            <h1>Upload Image</h1>
          </div>
          <div className="p-2 flex items-center justify-start gap-2 rounded-md hover:bg-gray-300 cursor-pointer">
            <FiSettings />
            <h1>Settings</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashHeader;
