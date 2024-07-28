import { useEffect, useState } from "react";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import CardTooltipProps from "../Components/Props/CardTooltipProps";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { getNonFiction } from "../Api/CardApi";
import { data } from "./data";

const Fiction = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    getNonFiction().then((res: any) => {
      if (res && res.data) {
        setCard(res.data);
      } else {
        console.log(res.message);
        setCard([]);
      }
    });
  }, []);

  return (
    <div className="w-full min-h-[100vh] bg-white pt-[40px] py-2 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center lg:place-items-end">
      {card.map((props: any) => (
        <Link to={`${props._id}`} key={props._id} className="p-2">
          <div className="m-4 py-6 px-5 w-[95%] sm:w-[90%] md:w-[95%] lg:w-[90%] bg-gray-50 rounded-[12px] text-[purple] h-[455px] transition-all duration-[350ms] flex justify-center items-start flex-col border border-[purple] bxs">
            <div className="w-full mt-3 mb-4 flex justify-between items-center">
              <div className="flex justify-center items-center gap-3">
                <div className="p-2 bg-[purple] text-[white] text-[15px] rounded-full border border-[white] ">
                  {props.category}
                </div>
                <div>{moment(props.createdAt).fromNow()}</div>
              </div>

              <div>
                <MdDelete className="text-[22px]" />
              </div>
            </div>
            <div className="mb-4 text-[20px] font-bold">{props.title}</div>
            <div className="mb-4 text-[14px] font-medium">
              {props.description.slice(0, 100)}
              <span className="text-[#144214] cursor-pointer">
                {" "}
                ...read more
              </span>
            </div>

            <div className="flex-1" />
            <div className="w-full h-[45%] flex justify-center items-end">
              <img
                src={props.image}
                alt=""
                className={`w-full h-[95%] transition-all duration-500 object-cover rounded-xl mb-2 `}
              />
            </div>

            <div className="mt-2 w-full flex items-center justify-between">
              <div>
                <div className="text-[13px]">Author</div>
                <div className="text-[17px] font-semibold">{props.author}</div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <CardTooltipProps
                  icon={<FaBookmark />}
                  textBg="text-blue-200"
                  hoverName="bookmark"
                  hoverBg="bg-[red]"
                />

                <CardTooltipProps
                  icon={<FaHeart />}
                  textBg="text-[red]"
                  hoverName="like"
                  hoverBg="bg-[#00800095]"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Fiction;
