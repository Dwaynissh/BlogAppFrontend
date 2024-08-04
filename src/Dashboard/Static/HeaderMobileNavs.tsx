import { ReactNode } from "react";
import { FaBookmark, FaHeart, FaUserPen } from "react-icons/fa6";
import { GiMountainClimbing } from "react-icons/gi";
import { MdSettings } from "react-icons/md";
import { PiChurchDuotone } from "react-icons/pi";
import { SiStorybook } from "react-icons/si";
import { Link } from "react-router-dom";

interface iNavs {
  routeName: string;
  url: string;
  icon: ReactNode;
}
const categoryData: iNavs[] = [
  {
    routeName: "fiction",
    url: "fiction",
    icon: <SiStorybook />,
  },
  {
    routeName: "non-ficition",
    url: "fiction",
    icon: <FaUserPen />,
  },
  {
    routeName: "religious",
    url: "religious",
    icon: <PiChurchDuotone />,
  },
  {
    routeName: "adventure",
    url: "adventure",
    icon: <GiMountainClimbing />,
  },
];
const manageData: iNavs[] = [
  {
    routeName: "bookmarks",
    url: "bookmark",
    icon: <FaBookmark />,
  },
  {
    routeName: "liked",
    url: "liked",
    icon: <FaHeart />,
  },
];
const othersData: iNavs[] = [
  {
    routeName: "settings",
    url: "settings",
    icon: <MdSettings />,
  },
];

const HeaderMobileNavs = () => {
  return (
    <div className="w-full">
      <div className="p-2 w-full flex items-center justify-start gap-2 rounded-md text-white cursor-pointer">
        <h1 className="text-[20px] font-semibold">Category</h1>
      </div>
      <div className="mb-4">
        {categoryData.map((props: iNavs) => (
          <Link to={props.url}>
            <div className="p-2 w-full flex items-center justify-start gap-2 rounded-md text-white hover:bg-white cursor-pointer text-[18px] hover:text-[#696969] ">
              <div>{props.icon}</div>
              <h1>{props.routeName}</h1>
            </div>
          </Link>
        ))}
      </div>
      <div className="p-2 w-full flex items-center justify-start gap-2 rounded-md text-white">
        <h1 className="text-[20px] font-semibold">Manage</h1>
      </div>
      <div className="mb-4">
        {manageData.map((props: iNavs) => (
          <Link to={props.url} className="">
            <div className="p-2 w-full flex items-center justify-start gap-2 rounded-md text-white hover:bg-white cursor-pointer text-[18px] hover:text-[#696969]">
              <div>{props.icon}</div>
              <h1>{props.routeName}</h1>
            </div>
          </Link>
        ))}
      </div>
      <div className="p-2 w-full flex items-center justify-start gap-2 rounded-md text-white">
        <h1 className="text-[20px] font-semibold">Others</h1>
      </div>
      {othersData.map((props: iNavs) => (
        <Link to={props.url}>
          <div className="p-2 w-full flex items-center justify-start gap-2 rounded-md text-white hover:bg-white cursor-pointer text-[18px] hover:text-[#696969]">
            <div>{props.icon}</div>
            <h1>{props.routeName}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HeaderMobileNavs;
