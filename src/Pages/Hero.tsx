import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import heroimg from "../assets/bloglappy-removebg-preview.png";

const Hero = () => {
  return (
    <div className="w-full pt-[80px] h-[100vh] flex justify-center items-center ">
      <div className="w-[92%] md:w-[90%] h-full grid grid-cols-1 lg:grid-cols-2 bg-white">
        <div className="h-full pt-[50px]">
          <div className="my-[20px]">
            <button className=" py-2 px-5 capitalize text-[#100a05]  shadow-sm rounded-[27px] bg-gray-200 font-semibold hover:scale-100 hover:bg-[#100a05] hover:text-white transition-all duration-[500ms] cursor-auto">
              Modern & scalable Blog Platform
            </button>
          </div>
          <div className="my-[20px]">
            <h1 className="text-[40px] md:text-[50px] lg:[75px] text-[#100a05]  font-bold">
              The Ultimate Blog Tool for Authors, Business, and Everyone
            </h1>
          </div>
          <div className="my-[20px]">
            <h3 className="text-[18px]">
              Build customer relationships with Blog tools that can accommodate
              all needs and are also integrated and accessible by everyone!
            </h3>
          </div>
          <div className="my-5 block md:flex justify-start items-center gap-[25px]">
            <button className="py-2 px-5 md:px-8 mb-4 md:mb-0 w-full md:w-auto shadow-lg md:text-[19px] rounded-lg font-semibold hover:scale-100 bg-[#100a05] text-white transition-all duration-[500ms] cursor-auto">
              Start a Free Trial
            </button>
            <button className="py-2 px-5 md:px-8 mb-4 md:mb-0 w-full md:w-auto border border-[#100a05] text-[#100a05] shadow-lg md:text-[19px] rounded-lg bg-white font-semibold transition-all duration-[500ms] flex justify-center items-center gap-2 cursor-auto">
              <HiOutlineDevicePhoneMobile />
              Request a demo
            </button>
          </div>
          <div className="mt-[55px] flex items-center gap-[25px] text-[18px]">
            <div>
              <span className="font-semibold">Excellent</span>
              &nbsp; 4.7 out of 5
            </div>
            <div>
              Verified by{" "}
              <span className="font-semibold">
                <span className="text-green-500">⭐</span>Trustpilot
              </span>
            </div>
          </div>
        </div>
        <div className="h-full pt-[50px]">
          <div className="w-[90%] h-[90%]">
            <img
              src={heroimg}
              alt=""
              className="w-full h-full object-center bounce"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
