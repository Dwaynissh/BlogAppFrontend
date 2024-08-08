import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { useContext } from "react";
import { GlobalContext } from "../Provider/ContextProvider";
import Marquee from "react-fast-marquee";
import heroimg from "../assets/bloglappy-removebg-preview.png";
import tiktok from "../assets/companyimgs/tiktok.51111cc4.png";
import mono from "../assets/companyimgs/mono.b4cdd575.jpeg";
import hootsuite from "../assets/companyimgs/Hootsuite.6f43348b.png";
import paystack from "../assets/companyimgs/paystack.5577e2b0.png";
import palmpay from "../assets/companyimgs/palmpay.f4ba7c46.jpeg";
import teamapt from "../assets/companyimgs/teamapt.18b44ce9.png";
import dash from "../assets/Myblogdashboard.png";

const Hero = () => {
  const { menu } = useContext(GlobalContext);

  return (
    <div
      className={`w-full appear ${
        menu ? "pt-[150px]" : "pt-[70px]"
      } min-h-[100vh] flex justify-center items-center flex-col transition-all duration-[350ms] `}
    >
      <div className="w-[92%] md:w-[90%] h-full grid grid-cols-1 lg:grid-cols-2 bg-white">
        <div className="h-full pt-[50px]">
          <div className="my-[20px]">
            <button className=" py-2 px-5 capitalize text-[#100a05]  shadow-sm rounded-[27px] bg-gray-200 font-semibold hover:scale-100 hover:bg-[#100a05] hover:text-white transition-all duration-[500ms] cursor-auto">
              Modern & scalable Blog Platform
            </button>
          </div>
          <div className="my-[20px]">
            <h1 className="text-[40px] md:text-[50px] xl:text-[60px] text-[#100a05] font-bold">
              The Ultimate Blog Tool for Authors, Business, and Everyone
            </h1>
          </div>
          <div className="my-[20px]">
            <h3 className="text-[18px] xl:text-[22px] ">
              Build customer relationships with Blog tools that can accommodate
              all needs and are also integrated and accessible by everyone!
            </h3>
          </div>
          <div className="mt-6 block md:flex justify-start items-center gap-[25px]">
            <button className="py-2 px-5 md:px-8 mb-4 md:mb-0 w-full md:w-auto shadow-lg md:text-[19px] rounded-lg font-semibold hover:scale-100 bg-[#100a05] text-white transition-all duration-[500ms] cursor-auto">
              Start a Free Trial
            </button>
            <button className="py-2 px-5 md:px-8 mb-4 md:mb-0 w-full md:w-auto border border-[#100a05] text-[#100a05] shadow-lg md:text-[19px] rounded-lg bg-white font-semibold transition-all duration-[500ms] flex justify-center items-center gap-2 cursor-auto">
              <HiOutlineDevicePhoneMobile />
              Request a demo
            </button>
          </div>
          <div className="mt-[55px] text-center md:flex items-center gap-[25px] text-[18px]">
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
        <div className="h-full pb-[50px]">
          <div className="w-[90%] lg:w-[100%] h-[90%] lg:h-[100%]">
            <img
              src={heroimg}
              alt=""
              className="w-full h-full object-cover bounce"
            />
          </div>
        </div>
      </div>
      <div className="w-[92%] min-h-[100px] flex justify-center items-center">
        <div className="w-[100%] mb-[40px] md:w-[90%] lg:w-[50%]">
          <div className="text-center my-[30px]">
            <h1 className="text-[22px] md:text-[28px] font-bold text-[#100a05]">
              Loved by all, trusted by authors, businesses
            </h1>
          </div>

          {/* Marquee */}
          <div className="">
            <Marquee>
              <div className="h-[50px] ml-[30px]">
                <img
                  src={tiktok}
                  alt=""
                  className="w-[120px] h-full object-contain"
                />
              </div>
              <div className="h-[50px]">
                <img
                  src={mono}
                  alt=""
                  className="w-[120px] h-full object-contain"
                />
              </div>
              <div className="h-[50px]">
                <img
                  src={hootsuite}
                  alt=""
                  className="w-[120px] h-full object-contain"
                />
              </div>
              <div className="h-[50px]">
                <img
                  src={palmpay}
                  alt=""
                  className="w-[120px] h-full object-contain"
                />
              </div>
              <div className="h-[50px]">
                <img
                  src={paystack}
                  alt=""
                  className="w-[120px] h-full object-contain"
                />
              </div>
              <div className="h-[50px] md:hidden">
                <img
                  src={teamapt}
                  alt=""
                  className="w-[120px] h-full object-contain"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[100vh] pb-[100px] mb-[40px] bg-[#100a05] bacc flex justify-center items-center flex-col">
        <div className="w-[92%] py-[60px]">
          <div className="lg:flex items-center">
            <div className="h-[400px] lg:w-[1400px] appear">
              <div className="my-[40px] md:flex justify-start items-center gap-[10px]">
                <div className="text-white w-full mb-4 md:mb-0 md:w-[25%] cursor-pointer transition-all duration-300">
                  <div className="mb-2">Blog Sales😊</div>
                  <div className="h-[4px] bg-white rounded-xl" />
                </div>
                <div className="text-white w-full mb-4 md:mb-0 md:w-[25%] cursor-pointer transition-all duration-300">
                  <div className="mb-2">Blog Activity🗣️</div>
                  <div className="h-[4px] bg-gray-500 rounded-xl" />
                </div>
                <div className="text-white w-full md:w-[25%] cursor-pointer transition-all duration-300">
                  <div className="mb-2">Blog Likes👍</div>
                  <div className="h-[4px] bg-gray-500 rounded-xl" />
                </div>
              </div>
              <img
                src={dash}
                alt="dashboard"
                className="h-[100%] object-contain"
              />
            </div>
            <div className="h-[400px] lg:pl-[25px] flex justify-start items-end">
              <div className="w-[80%] lg:w-[65%]">
                <h1 className="mb-[25px] text-[35px] font-bold text-white">
                  Easily monitor sales increases
                </h1>
                <h2 className="text-gray-300 text-[21px] mb-[25px]">
                  Effortlessly track and stay informed about your growing
                  readership with our advanced monitoring tools.
                </h2>
                <button className="py-3 px- md:px-4 mt-4 md:mb-0 md:w-auto border border-[#100a05] text-[#100a05] shadow-lg md:text-[19px] rounded-lg bg-white font-semibold transition-all duration-[500ms] flex justify-center items-center gap-2 cursor-auto">
                  <HiOutlineDevicePhoneMobile />
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
