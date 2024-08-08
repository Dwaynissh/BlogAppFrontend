import { Link } from "react-router-dom";
import logo from "../../assets/Logos/bloghavenwhitecropped-removebg-preview.png";
import { BiMenuAltRight } from "react-icons/bi";
import { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalContext } from "../../Provider/ContextProvider";

const Header = () => {
  const { menu, setMenu, handleMenu } = useContext(GlobalContext);

  useEffect(() => {
    const handleScroll = () => {
      setMenu(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return (
    <div>
      <div
        className={`w-full fixed h-[80px] flex justify-center items-center bg-[white] shadow-sm ${
          menu ? "" : "border-b"
        } z-50`}
      >
        <div className="w-[92%] md:w-[90%] flex justify-between items-center">
          <div className="flex justify-between items-center gap-[50px]">
            <Link to="/" className="">
              <img
                src={logo}
                alt=""
                className="w-[180px] md:w-[220px] object-cover"
              />
            </Link>
            <div className="hidden md:mb-1 lg:flex justify-center items-center gap-[20px] text-[#100a05] text-[18px] font-medium">
              <Link to="/">
                <nav className="cursor-pointer hover:scale-110 hover:font-semibold transition-all duration-500">
                  Home
                </nav>
              </Link>
              <nav className="cursor-pointer hover:scale-110 hover:font-semibold transition-all duration-500">
                Features
              </nav>
              <nav className="cursor-pointer hover:scale-110 hover:font-semibold transition-all duration-500">
                About us
              </nav>
            </div>
          </div>
          <div className="flex items-center justify-end gap-[25px]">
            <div className="hidden md:mb-1 sm:flex items-center justify-end gap-[25px]">
              <div className="text-[#100a05] h-[32px] text-[20px] border " />
              <Link to="/register">
                <div className="text-[#100a05] text-[16px] md:text-[18px] font-semibold  hover:scale-110 transition-all duration-500">
                  Sign in
                </div>
              </Link>
              <Link to="/login">
                <button className="sm:py-2 lg:py-2 sm:px-3 lg:px-5 border border-[#100a05] text-[#100a05] text-[16px] md:text-[18px] shadow-sm rounded-lg bg-white font-semibold hover:scale-110 hover:bg-[#100a05] hover:text-white transition-all duration-[500ms]">
                  Join us for free
                </button>
              </Link>
            </div>
            {/* Hamburger Menu for Header */}
            <div className="lg:hidden">
              <BiMenuAltRight
                className={`text-[32px] font-semibold transition-transform duration-500 cursor-pointer ${
                  menu ? "rotate-0" : "rotate-180"
                }`}
                onClick={handleMenu}
              />
            </div>
          </div>
        </div>
        {/* Mobile Hamburger Menu Drop Down */}
        <AnimatePresence>
          {menu ? (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className={`absolute 
                top-[80px]
               right-0 left-0 min-h-[55px] bg-white flex justify-center rounded-b-lg shadow-sm ${
                 menu ? "" : "opacity-0"
               }`}
            >
              <div className="w-[92%] py-2 flex items-center justify-between transition-all duration-300">
                <div className="flex items-start justify-center flex-col gap-[15px]">
                  {" "}
                  <Link to="/">
                    <nav className="cursor-pointer hover:scale-110 hover:font-semibold transition-all duration-500">
                      Home
                    </nav>
                  </Link>
                  <nav className="cursor-pointer hover:scale-110 hover:font-semibold transition-all duration-500">
                    Features
                  </nav>
                  <nav className="cursor-pointer hover:scale-110 hover:font-semibold transition-all duration-500">
                    About us
                  </nav>
                </div>
                <div className="sm:hidden flex items-end justify-start flex-col gap-[15px]">
                  {/* <div className=" text-[#100a05] h-[20px] text-[20px] border " /> */}
                  <Link to="/register">
                    <div className="text-[#100a05] md:text-[18px] font-semibold  hover:scale-110 transition-all duration-500">
                      Sign in
                    </div>
                  </Link>
                  <Link to="/login">
                    <button className="py-1 px-2 border border-[#100a05] text-[#100a05]  shadow-sm rounded-lg bg-white font-semibold hover:scale-105 hover:bg-[#100a05] hover:text-white transition-all duration-[500ms]">
                      Join us for free
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
