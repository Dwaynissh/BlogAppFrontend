import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FiSettings, FiUpload } from "react-icons/fi";
import { MdCreate, MdFeed, MdLogout } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import HeaderMobileNavs from "./HeaderMobileNavs";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import avatar from "../../assets/PrinceJohn.jpeg";
import { RiProfileFill } from "react-icons/ri";
import { logoutState } from "../../Redux/ReduxState";
import { logoutUser } from "../../Api/AuthApi";
import { useDispatch } from "react-redux";
useDispatch;
scroll;

const DashHeader = () => {
  const [drop, setDrop] = useState(false);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleDropdown = () => {
    setDrop(!drop);
  };

  const menuVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: 230, opacity: 1, transition: { duration: 0.5 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const location = useLocation().pathname;
  return (
    <div className="h-[70px] flex justify-center items-center bg-[#b6b6b6] shadow-sm">
      <div className="w-[95%] py-2 flex justify-between items-center gap-5 transition-all duration-300">
        <div>
          <h1 className="font-semibold">Welcome Prince John</h1>
        </div>
        <div className="flex justify-end items-center gap-[20px] transition-all duration-300">
          {location === "/dashboard/publish" ? (
            <div></div>
          ) : (
            <NavLink
              to="publish"
              className={({ isActive }) => (isActive ? "" : "")}
            >
              <button className="py-2 px-2 text-[12px] md:text-[15px] md:py-3 md:px-3 bg-gray-200 text-[#100a05] rounded-[10px] font-semibold shadow-md flex justify-center items-center gap-2 scale-100">
                publish a post
                <MdCreate className="" />
              </button>
            </NavLink>
          )}
          <div>
            <div
              className=" border border-black rounded-full font-bold bg-gray-200 text-[#100a05] cursor-pointer scale-105 transition-all duration-300"
              onClick={handleDropdown}
            >
              <img
                src={avatar}
                alt="avatar"
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
            </div>
          </div>
          <div className="md:hidden">
            <BiMenuAltRight
              className={`text-[30px] font-semibold transition-transform duration-500 cursor-pointer ${
                menu ? "rotate-0" : "rotate-180"
              }`}
              onClick={handleMenu}
            />
            {/* Mobile Dashboard SideBar Code */}
            <AnimatePresence>
              {menu && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  className="fixed top-[70px] right-0 py-[40px] px-4 bg-[#100a05] h-[calc(100vh-70px)] flex justify-start items-start flex-col z-50"
                >
                  <Link to="/dashboard" className="w-full">
                    <div className="p-2 mb-4 w-full flex items-center justify-start gap-2 rounded-md text-white hover:bg-white cursor-pointer text-[18px] hover:text-[#100a05]">
                      <MdFeed />
                      <h1>My Feed</h1>
                    </div>
                  </Link>
                  <HeaderMobileNavs />
                  <div className="flex-1" />
                  <div className="mb-3 w-full border" />
                  <div
                    className="p-2 w-full flex items-center justify-start gap-2 rounded-md text-white hover:bg-white cursor-pointer text-[18px] hover:text-[#100a05]"
                    onClick={() => {
                      dispatch(logoutState());
                      logoutUser();
                    }}
                  >
                    <MdLogout />
                    <h1>Logout</h1>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* My Profile DropDown */}
      <AnimatePresence>
        {drop && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="p-3 mb-2 min-w-[150px] min-h-[100px] bxs bg-white absolute top-[65px] right-[10px] rounded-lg z-20"
          >
            <div>
              <div className="mb-2 h-[40px] bg-[#100a05] rounded-sm flex justify-center items-center relative">
                <div className="w-[20%] px-2 py-[3px] absolute bottom-[-10px] flex justify-center items-center rounded-full border border-[#100a05] bg-white">
                  PJ
                </div>
              </div>
              <div className="text-center mb-1 p-2">
                <h1 className="uppercase mb-1">Prince John</h1>
                <h2>dwaynissh@gmail.com</h2>
              </div>
            </div>
            <div className="p-2 flex items-center justify-start gap-2 rounded-md hover:bg-gray-300 cursor-pointer">
              <RiProfileFill />
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashHeader;
