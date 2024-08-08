import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Api/AuthApi";
import { ClipLoader } from "react-spinners";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const registerDetails = email && password;

  const onhandleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await registerUser(email, password);
      if (res?.status === 201) {
        toast.success(`${res?.message}`);
        navigate("/welcome");
        return res?.data;
      } else {
        toast.error(`${res?.message}`);
      }
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
            Register to Create your Blog
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
          <button
            className={`py-2 px-5 w-full bg-[#100a05] text-white text-[16px] shadow-sm rounded-md flex items-center justify-center gap-2 ${
              loading || !registerDetails ? "cursor-not-allowed" : ""
            }`}
            onClick={onhandleSubmit}
            disabled={loading || !registerDetails}
          >
            {loading ? (
              <>
                <ClipLoader color={"#fff"} loading={loading} size={20} />
                Subitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
        <Link to="/login">
          <div className="mt-3 text-center text-[#100a05]">Login Here</div>
        </Link>
      </div>
    </div>
  );
};

export default Register;
