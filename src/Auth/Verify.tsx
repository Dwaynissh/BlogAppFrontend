const Verify = () => {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="min-h-[200px] w-[470px] md:w-[550px] p-7 shadow-md  bg-white rounded-md flex flex-col justify-between">
        <div>
          <div className="w-full mb-8 text-[purple] text-[20px] text-center font-bold">
            Complete Your Verification Process
          </div>
          <div>
            <div className="font-medium mb-2">Your email token</div>
            <input
              type="text"
              className="w-full h-[40px] pl-2 bg-gray-100 "
              placeholder="1d0ey6bv"
            />
          </div>
          <div className="mt-5 w-full flex justify-center items-center">
            <button className="py-2 px-5 bg-[purple] text-white shadow-sm rounded-md">
              Submit
            </button>
          </div>
        </div>
        <div className="w-full mt-10 text-center text-sm text-gray-600">
          We appreciate you for registering with us. You can look forward to
          giving you the best services we have to offer.
        </div>
      </div>
    </div>
  );
};

export default Verify;
