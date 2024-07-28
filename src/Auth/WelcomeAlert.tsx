const WelcomeAlert = () => {
  return (
    <div>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
        <div className="min-h-[200px] w-[470px] md:w-[550px] p-7 shadow-sm bg-white rounded-md flex flex-col justify-between">
          <div>
            <div className="w-full mb-8 text-[purple] text-[20px] text-center font-bold">
              Welcome, User! Important Notification
            </div>
            <h1 className="text-[18px] text-center font-medium">
              Thank you for Registering with us!. &nbsp; A mail has been sent to
              your email address. Please copy the token provided and click the
              verify button in the email to complete the verification process.
            </h1>
          </div>
          <div className="w-full mt-10 text-center text-sm text-gray-600">
            We appreciate you for registering with us. You can look forward to
            giving you the best services we have to offer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAlert;
