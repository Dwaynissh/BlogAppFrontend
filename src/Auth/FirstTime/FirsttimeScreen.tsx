import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  bioState,
  fullNameState,
  genderState,
  nextpage,
  professionState,
} from "../../Redux/ReduxState";
import { useSelector } from "react-redux";
import { IoHandLeftOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const PageOne = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [gender, setGender] = useState("");

  const formIsFilled = text && gender;

  const handleDispatch = () => {
    dispatch(fullNameState(text));
    dispatch(genderState(gender));
    if (dispatch(fullNameState(text)) && dispatch(genderState(gender))) {
      dispatch(nextpage());
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div
      className="p-[40px] min-h-[300px] bg-white min-w-[450px] flex justify-center items-center flex-col border-[2px] border-[silver]"
      data-aos="fade-left"
    >
      <div className="mb-4 w-full">
        <div className="h-[10px] w-full bg-gray-300 rounded-[20px]">
          <div className="h-full w-[33%] bg-[purple] rounded-l-[20px]" />
        </div>
      </div>
      <div className="w-full">
        <div className="mb-5">
          <h1 className="text-[23px] md:text-[30px]">
            Now let's get you started 😊
          </h1>
        </div>
        <div className="mb-4">
          <h1 className="font-medium">
            <span className="text-[purple]">•</span> Your Full Name
          </h1>
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="h-[40px] w-full px-3 border outline-none bg-white text-[18px]"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <h1 className="font-medium">
            <span className="text-[purple]">•</span> Your Gender
          </h1>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setGender(e.target.value);
            }}
            className="w-full h-[40px] bg-white border"
          >
            <option disabled selected value="">
              Select
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Them">Them</option>
            <option value="They">They</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="w-full flex justify-end items-center">
          {formIsFilled ? (
            <button
              onClick={handleDispatch}
              className="py-2 px-6 text-[16px] bg-[purple] text-white rounded-md"
            >
              Next
            </button>
          ) : (
            <button
              onClick={undefined}
              className="py-2 px-7 bg-[#4f4f4f] text-white rounded-md cursor-not-allowed"
            >
              <IoHandLeftOutline className="text-[23px]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const PageTwo = () => {
  const dispatch = useDispatch();
  const [bio, setBio] = useState("");

  const formIsFilled = bio;

  const handleDispatch = () => {
    dispatch(bioState(bio));
    if (dispatch(bioState(bio))) {
      dispatch(nextpage());
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div
      className="p-[40px] min-h-[300px] w-[350px] bg-white md:w-[450px] flex justify-center items-center flex-col border-[2px] border-[silver]"
      data-aos="fade-left"
    >
      <div className="mb-4 w-full">
        <div className="h-[10px] w-full bg-gray-300 rounded-[20px]">
          <div className="h-full w-[66%] bg-[purple] rounded-l-[20px]" />
        </div>
      </div>
      <div className="w-full">
        <div className="mb-5 text-center">
          <h1 className="text-[23px] md:text-[30px]">
            Tell your readers a little about yourself 😊
          </h1>
        </div>
        <div className="mb-4">
          <h1 className="font-medium">
            <span className="text-[purple]">•</span> Your Bio
          </h1>
        </div>
        <div className="mb-4">
          <textarea
            name="bio"
            cols={50}
            placeholder="About yourself"
            className="h-[70px] w-full px-3 border outline-none bg-white text-[16px] resize-none"
            value={bio}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setBio(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex justify-end items-center gap-[15px]">
          {formIsFilled ? (
            <button
              onClick={handleDispatch}
              className="py-2 px-6 text-[16px] bg-[purple] text-white rounded-md"
            >
              Next
            </button>
          ) : (
            <button
              onClick={undefined}
              className="py-2 px-7 bg-[#4f4f4f] text-white rounded-md cursor-not-allowed"
            >
              <IoHandLeftOutline className="text-[23px]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const PageThree = () => {
  const dispatch = useDispatch();
  const [profession, setProfession] = useState("");
  const navigate = useNavigate();

  const formIsFilled = profession;

  const handleDispatch = () => {
    dispatch(professionState(profession));
    navigate("/dashboard");
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div
      className="p-[40px] min-h-[300px] bg-white w-[450px] flex justify-center items-center flex-col border-[2px] border-[silver]"
      data-aos="fade-left"
    >
      <div className="mb-4 w-full">
        <div className="h-[10px] w-full bg-gray-300 rounded-[20px]">
          <div className="h-full w-[100%] bg-[purple] rounded-l-[20px]" />
        </div>
      </div>
      <div className="w-full">
        <div className="mb-5 text-center">
          <h1 className="text-[23px] md:text-[30px]">
            Finally, Let us know your profession 😊
          </h1>
        </div>

        <div className="mb-4">
          <select
            name="profession"
            id="profession"
            value={profession}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setProfession(e.target.value);
            }}
            className="w-full h-[40px] bg-white border"
          >
            <option disabled selected value="">
              Select
            </option>
            <option value="Author">Author</option>
            <option value="Journalist">Journalist</option>
            <option value="Blogger">Blogger</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="w-full flex justify-end items-center gap-[15px]">
          {formIsFilled ? (
            <button
              onClick={handleDispatch}
              className="py-2 px-6 text-[16px] bg-[purple] text-white rounded-md"
            >
              Next
            </button>
          ) : (
            <button
              onClick={undefined}
              className="py-2 px-7 bg-[#4f4f4f] text-white rounded-md cursor-not-allowed"
            >
              <IoHandLeftOutline className="text-[23px]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const FirsttimeScreen = () => {
  const page = useSelector((state: any) => state.page);

  return (
    <div>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center flex-col">
        <div className="mb-[25px] text-center">
          <div className="text-[30px] md:text-[45px] mb-4 upppercase italic font-extrabold text-[purple]">
            DwayneBlogApp⁜
          </div>
          <div className="text-[18px]">You are welcome to BlogApp</div>
        </div>
        {page === 1 ? (
          <PageOne />
        ) : page === 2 ? (
          <PageTwo />
        ) : page === 3 ? (
          <PageThree />
        ) : null}
        <div className="mt-[50px] flex items-center justify-center flex-col md:flex-row gap-[20px] text-[gray]">
          <p className="upppercase italic cursor-pointer">DwayneBlogApp⁜</p>
          <p className="cursor-pointer">Privacy</p>
          <p className="cursor-pointer">Security</p>
          <p className="cursor-pointer">Disclaimer</p>
          <p className="cursor-pointer">Legal & Complaince</p>
          <p className="cursor-pointer">Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default FirsttimeScreen;
