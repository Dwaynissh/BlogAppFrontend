import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full fixed h-[80px] flex justify-center items-center bg-[purple] shadow-md">
      <div className="w-[92%] md:w-[87%] flex justify-between items-center">
        <div>
          <h1 className="text-[22px] md:text-[28px] text-white font-bold">
            My Blog Website
          </h1>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="text-white text-[20px]">|</div>
          <Link to="/register">
            <div className="text-white">Join us</div>
          </Link>
          <Link to="/login">
            <button className="py-2 px-5 text-[purple] shadow-md rounded-md bg-white font-semibold">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
