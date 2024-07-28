import { useState, useEffect, useContext } from "react";
import { getAllCards } from "../Api/CardApi";
import moment from "moment";
import { FaBookmark } from "react-icons/fa6";
import { GlobalContext } from "../Provider/ContextProvider";
import DashHeader from "../Components/Static/DashHeader";
import cardimg from "../assets/blog-2.jpg";
import CardTooltipProps from "../Components/Props/CardTooltipProps";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
// import { data } from "./data";

const HomeScreen = () => {
  const { toggle } = useContext(GlobalContext);
  const [hover] = useState<Boolean>(false);
  const [searchCard, setSearchCard] = useState("");

  const [card, setCard] = useState([]);

  useEffect(() => {
    getAllCards().then((res) => {
      if (res && res.data) {
        setCard(res.data);
      } else {
        console.log(res.message);
        setCard([]);
      }
    });
  }, []);

  const filteredCards = card.filter((el: any) => {
    const titleName = `${el.title}`.toLowerCase();
    return titleName.includes(searchCard.toLowerCase());
  });

  // const addBookmarktoCard = (cardID: any) => {
  //   addBookmark(cardID);
  // };
  return (
    <div className="w-full px-[7px] md:px-0 md:pl-[10px] mt-[70px] rounded-[20px] min-[100vh] flex justify-start items-center flex-col">
      <div
        className={`w-full ${
          toggle ? "md:pl-[45px]" : "md:pl-[120px]"
        } h-[70px] fixed top-0 bg-[#696969] text-white z-10`}
      >
        <DashHeader />
      </div>

      <div className="w-full min-h-[calc(100vh-70px)] pt-[40px] py-2 px-2 bg-white">
        <div className="w-full">
          <input
            type="search"
            placeholder="Search BlogName here"
            className="h-[45px] w-[50%] lg:w-[35%] xl:w-[30%] ml-[23px] px-3 border outline-none rounded-lg border-[purple]"
            value={searchCard}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchCard(e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center lg:place-items-end ">
          {/* Card Stying */}
          {filteredCards.length > 0 &&
            filteredCards.map((props: any) => (
              <Link to={`${props._id}`} key={props._id} className="p-2">
                <div className="m-4 py-6 px-5 w-[95%] sm:w-[90%] md:w-[95%] lg:w-[98%] bg-gray-50 rounded-[12px] text-[purple] h-[455px] transition-all duration-[350ms] flex justify-center items-start flex-col border border-[purple] bxs">
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
                  <div className="mb-4 text-[20px] font-bold">
                    {props.title}
                  </div>
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
                      src={cardimg}
                      alt=""
                      className={`w-full ${
                        hover ? "h-[75%]" : "h-[95%]"
                      } transition-all duration-500 object-cover rounded-xl mb-2 `}
                    />
                  </div>

                  <div className="mt-2 w-full flex items-center justify-between">
                    <div>
                      <div className="text-[13px]">Author</div>
                      <div className="text-[17px] font-semibold">
                        {props.author}
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <CardTooltipProps
                        icon={<FaBookmark />}
                        textBg="text-blue-200"
                        hoverName="bookmark"
                        hoverBg="bg-[red]"
                        // onClick={() => {
                        //   addBookmarktoCard(props._id);
                        // }}
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
          {/* Card Stying */}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
