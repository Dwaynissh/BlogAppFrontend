import { startTransition, useEffect, useState } from "react";
import { waveform } from "ldrs";
import logo from "../../assets/Logos/bloghavenwhitecropped-removebg-preview.png";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  waveform.register();

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      startTransition(() => {
        setLoading(false);
      });
      clearTimeout(loadTimeout);
    }, 15000);
  }, []);

  // Default values shown

  return (
    loading && (
      <div className="h-screen w-full bg-[whitesmoke] flex justify-center items-center">
        <div className="flex justify-center items-center gap-[20px] flex-col">
          <div>
            <img
              src={logo}
              alt=""
              className="w-[280px] md:w-[220px] object-cover animate-pulse"
            />
          </div>
          <l-waveform
            size="40"
            stroke="3.5"
            speed="1"
            color="black"
          ></l-waveform>
          {/* <div className="ml-4 text-[#100a05] text-[20px] animate-pulse">
            Loading . . .
          </div> */}
        </div>
      </div>
    )
  );
};

export default LoadingScreen;