import { useState, useEffect, useCallback } from "react";
import { deleteCard, getAllCards } from "../Api/CardApi";
import moment from "moment";
import { FaBookmark } from "react-icons/fa6";
import cardimg from "../assets/blog-2.jpg";
import CardTooltipProps from "../Components/Props/CardTooltipProps";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiSolidErrorCircle } from "react-icons/bi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const HomeScreen = () => {
  const [hover] = useState<Boolean>(false);
  const [isClicked, setIsClicked] = useState(false);
  const [searchCard, setSearchCard] = useState("");
  const userToken: any = useSelector((state: any) => state.user);

  const decodedToken: any = jwtDecode(userToken);
  const userID = decodedToken.id;

  const [card, setCard] = useState([]);

  const fetchAllCards = useCallback(() => {
    try {
      getAllCards().then((res) => {
        if (res && res.data) {
          setCard(res.data);
        } else {
          console.log(res.message);
          setCard([]);
        }
      });
    } catch (error) {
      console.error("Error fetching All Cards:", error);
      setCard([]);
    }
  }, []);

  const handleDeleteCard = (cardID: any) => {
    try {
      deleteCard(userID, cardID).then(() => {
        toast.success("Card Deleted Successfully");
        fetchAllCards();
      });
    } catch (error) {
      toast.error("Error deleting card");
      console.error("Error deleting card:", error);
    }
  };

  useEffect(() => {
    fetchAllCards();
  }, [fetchAllCards]);

  const filteredCards = card.filter((el: any) => {
    const titleName = `${el.title}`.toLowerCase();
    return titleName.includes(searchCard.toLowerCase());
  });

  // const addBookmarktoCard = (cardID: any) => {
  //   addBookmark(cardID);
  // };
  return (
    <div className="w-full min-h-[calc(100vh-70px)] pt-[30px] py-2 px-2">
      <div className="border p-2 w-full min-h-[100px] mb-3 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 rounded-md">
        <div className="border m-1 p-[20px] rounded-md  sm:block flex justify-center items-center gap-[40px] ">
          <div className="w-[50%] sm:w-full sm:block flex justify-between items-center">
            <h1>Total Blogs:</h1>
            {filteredCards.length > 0 ? (
              <h1 className="font-bold text-[25px]">{card.length}</h1>
            ) : (
              <h1 className="font-bold text-[25px]">0</h1>
            )}
          </div>
        </div>
        <div className="border m-1 p-[20px] rounded-md  sm:block flex justify-center items-center gap-[40px] ">
          <div className="w-[50%] sm:w-full sm:block flex justify-between items-center">
            <h1>Total Bookmarks:</h1>
            {filteredCards.length > 0 ? (
              <h1 className="font-bold text-[25px]">1</h1>
            ) : (
              <h1 className="font-bold text-[25px]">0</h1>
            )}
          </div>
        </div>
        <div className="border m-1 p-[20px] rounded-md  sm:block flex justify-center items-center gap-[40px]">
          <div className="w-[50%] sm:w-full sm:block flex justify-between items-center">
            <h1>Total Likes:</h1>
            {filteredCards.length > 0 ? (
              <h1 className="font-bold text-[25px]">1</h1>
            ) : (
              <h1 className="font-bold text-[25px]">0</h1>
            )}
          </div>
        </div>
      </div>
      <div className="w-full mb-3">
        <fieldset
          className={`border min-h-[45px] w-[50%] lg:w-[35%] xl:w-[30%] ${
            isClicked
              ? "border-[#100a05] text-[#100a05]"
              : "border-gray-300 text-gray-300"
          }`}
          onClick={() => setIsClicked(true)}
        >
          <legend className="ml-3">Search BlogName Here</legend>
          <input
            type="search"
            className="h-[40px] w-full px-3 outline-none bg-white text-[18px]"
            value={searchCard}
            onChange={(e) => setSearchCard(e.target.value)}
            onBlur={() => setIsClicked(false)}
          />
        </fieldset>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center lg:place-items-end border min-h-[480px] rounded-md">
        {/* Card Stying */}
        {filteredCards.length > 0 ? (
          filteredCards.map((props: any) => (
            <div key={props._id} className="p-2">
              <div className="m-4 py-6 px-5 w-[95%] sm:w-[90%] md:w-[95%] lg:w-[98%] bg-gray-50 rounded-[12px] text-[#100a05] h-[455px] transition-all duration-[350ms] flex justify-center items-start flex-col border border-[#100a05]">
                <div className="w-full mt-3 mb-4 flex justify-between items-center">
                  <div className="flex justify-center items-center gap-3">
                    <div className="p-2 bg-[#100a05] text-[white] text-[15px] rounded-full border border-[white] ">
                      {props.category}
                    </div>
                    <div>{moment(props.createdAt).fromNow()}</div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      handleDeleteCard(props?._id);
                    }}
                  >
                    <MdDelete className="text-[22px]" />
                  </div>
                </div>
                <div className="mb-4 text-[20px] font-bold">{props.title}</div>
                <div className="mb-4 text-[14px] font-medium">
                  {props.description.slice(0, 100)}
                  <Link to={props?._id}>
                    <span className="text-[#144214] cursor-pointer">
                      {" "}
                      ...read more
                    </span>
                  </Link>
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
            </div>
          ))
        ) : (
          <div className="w-full h-full p-[40px] col-span-3 flex justify-center items-center flex-col">
            <h1 className="flex justify-center items-center gap-2">
              <BiSolidErrorCircle />
              No Blogs Created
            </h1>
            <p className="text-gray-600">
              It looks like there are no blogs available at the moment. Please
              check back later or create a new blog to get started!
            </p>
          </div>
        )}
        {/* Card Stying */}
      </div>
    </div>
  );
};

export default HomeScreen;
