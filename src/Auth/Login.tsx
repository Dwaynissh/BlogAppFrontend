import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Api/AuthApi";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../assets/Logos/bloghavenwhitecropped-removebg-preview.png";
import { FiEye } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { loginState } from "../Redux/ReduxState";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginDetails = email && password;

  const onhandleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const delayLogin: NodeJS.Timeout = setTimeout(() => {
      try {
        loginUser(email, password).then((res: any) => {
          if (res?.status === 200) {
            dispatch(loginState(res?.data));
            if (res?.login.firstlogin === true) {
              navigate("/dashboard");
            } else {
              navigate("/first-time");
            }
          } else {
            toast.error("Incorrect Email or Password");
          }
        });
      } catch (error) {
        console.log("Error in onhandleSubmit", error);
      } finally {
        setLoading(false);
      }

      clearTimeout(delayLogin);
    }, 2000);
  };

  const passwordVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    // dispatch(clearstate());
  }, []);

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center flex-col">
      <Toaster />
      <div className="text-center">
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="h-[50px] mb-[30px] w-[500px] md:h-auto md:w-auto object-contain"
          />
        </Link>
        <div className="text-[18px] mb-[20px]">
          Welcome back to &nbsp;
          <span className="text-[#100a05] font-bold">BlogHaven</span>
        </div>
      </div>
      <div
        className="min-h-[200px] md:min-h-[400px] min-w-[93%] sm:min-w-[70%] md:min-w-[500px] p-7 shadow-sm bg-white rounded-md"
        data-aos="fade-left"
      >
        <div className="pb-5 w-full flex justify-center items-center">
          <div className="text-[#100a05] text-[20px] font-bold capitalize">
            Login to your Account here
          </div>
        </div>
        <form onSubmit={onhandleSubmit}>
          <label htmlFor="email" className="mb-3 text-[#100a05] font-semibold">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full mb-3 h-[42px] pl-2 bg-gray-100"
            placeholder="princejohn@mail.com"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />

          <label
            htmlFor="password"
            className="mb-3 text-[#100a05] font-semibold"
          >
            Password
          </label>
          <div className="bg-gray-100 pr-2 flex items-center justify-center">
            <input
              id="password"
              name="password"
              type={isVisible ? "text" : "password"}
              className=" h-[42px] flex-1 pl-2 bg-gray-100"
              placeholder="*********"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
            {isVisible ? (
              <FiEye
                className=" text-[#100a05] ml-3 text-[18px] font-semibold"
                onClick={passwordVisibility}
              />
            ) : (
              <AiOutlineEyeInvisible
                className=" text-[#100a05] ml-3 text-[18px] font-semibold"
                onClick={passwordVisibility}
              />
            )}
          </div>
          <div className="mt-5 w-full">
            <button
              className={`py-2 px-5 w-full bg-[#100a05] text-white text-[16px] shadow-sm rounded-md flex items-center justify-center gap-2 ${
                loading || !loginDetails ? "cursor-not-allowed" : ""
              }`}
              disabled={loading || !loginDetails}
            >
              {loading ? (
                <>
                  <ClipLoader color={"#fff"} loading={loading} size={20} />
                  Logging you in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
        <Link to="/register">
          <div className="mt-4 text-center">
            Don't Have an account?{" "}
            <span className="mt-3 ml-1 font-semibold text-[#100a05]">
              Register Here
            </span>
          </div>
        </Link>
      </div>
      <div className="mt-[30px]">This project is built with you in mind</div>
    </div>
  );
};

export default Login;
