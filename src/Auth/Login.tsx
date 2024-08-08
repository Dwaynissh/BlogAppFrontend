import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Api/AuthApi";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEyeInvisible } from "react-icons/ai";
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

  const onhandleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      loginUser(email, password).then((res) => {
        if (res?.status === 200) {
          setLoading(true);
          toast.success("Login Successfully, Welcome back 😊");
          dispatch(loginState(res?.data));
          navigate("/first-time");
        } else {
          toast.error("Incorrect Email or Password");
        }
      });
    } catch (error) {
      console.log("Error in onhandleSubmit", error);
    } finally {
      setLoading(false);
    }
  };

  const passwordVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <Toaster />
      <div
        className="min-h-[200px] w-[400px] p-5 shadow-sm bg-white rounded-md"
        data-aos="fade-left"
      >
        <div className="pb-5 w-full flex justify-center items-center">
          <div className="text-[#100a05] text-[20px] font-bold capitalize">
            Login to your Account here
          </div>
        </div>
        <div className="mb-3 text-[#100a05] font-semibold">Email</div>

        <input
          type="email"
          className="w-full mb-3 h-[42px] pl-2 bg-gray-100"
          placeholder="princejohn@mail.com"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />

        <div className="mb-3 text-[#100a05] font-semibold">Password</div>
        <div className="bg-gray-100 pr-2 flex items-center justify-center">
          <input
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
          {loading ? (
            <button
              className="py-2 px-5 w-full bg-[#100a05] text-white text-[16px] shadow-sm rounded-md flex items-center justify-center gap-2"
              onClick={onhandleSubmit}
            >
              <ClipLoader color={"#fff"} loading={loading} size={20} />
              Login you in...
            </button>
          ) : (
            <button
              className="py-2 px-5 w-full text-[16px] bg-[#100a05] text-white shadow-sm rounded-md"
              onClick={onhandleSubmit}
            >
              Login
            </button>
          )}
        </div>
        <Link to="/register">
          <div className="mt-3 text-center text-[#100a05]">Register Here</div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
