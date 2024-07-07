const Login = () => {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="min-h-[200px] w-[400px] p-5 shadow-sm bg-white rounded-md">
        <div className="pb-5 w-full flex justify-center items-center">
          <div className="text-[purple] text-[20px] font-bold capitalize">
            Login into your Blog
          </div>
        </div>
        <div className="mb-3 text-[purple] font-semibold">Blog Name</div>
        <input
          type="text"
          className="w-full h-[40px] pl-2 bg-gray-100 "
          placeholder="John Doe's Blog"
        />
        <div className="my-3 text-[purple] font-semibold">Token</div>
        <input
          type="text"
          className="w-full h-[40px] pl-2 bg-gray-100 "
          placeholder="1d0ey6bv"
        />
        <div className="mt-5 w-full flex justify-center items-center">
          <button className="py-2 px-5 bg-[purple] text-white shadow-sm rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
