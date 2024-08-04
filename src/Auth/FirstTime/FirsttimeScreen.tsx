const PageOne = () => {
  return (
    <div className="p-[40px] min-h-[300px] bg-white min-w-[450px] flex justify-center items-center flex-col border-[2px] border-[silver]">
      <div className="mb-4 w-full">
        <div className="h-[10px] w-full bg-gray-300 rounded-[20px]">
          <div className="h-full w-[25%] bg-[purple] rounded-l-[20px]" />
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
          />
        </div>
        <div className="mb-4">
          <h1 className="font-medium">
            <span className="text-[purple]">•</span> Your Gender
          </h1>
          <select
            name="gender"
            id="gender"
            className="w-full h-[40px] bg-white border"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Them">Them</option>
            <option value="They">They</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="w-full flex justify-end items-center">
          <button className="py-2 px-6 bg-[purple] text-white rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const FirsttimeScreen = () => {
  return (
    <div>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center flex-col">
        <div className="mb-[25px] text-center">
          <div className="text-[30px] md:text-[45px] mb-4 upppercase italic font-extrabold text-[purple]">
            DwayneBlogApp⁜
          </div>
          <div className="text-[18px]">You are welcome to BlogApp</div>
        </div>
        {PageOne()}
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
