import { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import cardimg from "../assets/blog-2.jpg";
import CardTooltipProps from "../Components/Props/CardTooltipProps";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { deleteCard, getNonFiction } from "../Api/CardApi";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { BiSolidErrorCircle } from "react-icons/bi";
import LittleNav from "../Components/Props/LittleNav";

const Nonfiction = () => {
  const [card, setCard] = useState([]);
  const userToken: any = useSelector((state: any) => state.user);

  const decodedToken: any = jwtDecode(userToken);
  const userID = decodedToken.id;

  const fetchNonfiction = useCallback(() => {
    try {
      getNonFiction().then((res) => {
        if (res && res.data) {
          setCard(res.data);
        } else {
          console.log(res.message);
          setCard([]);
        }
      });
    } catch (error) {
      console.error("Error fetching Nonfiction:", error);
      setCard([]);
    }
  }, []);

  useEffect(() => {
    fetchNonfiction();
  }, [fetchNonfiction]);

  const handleDeleteCard = (cardID: any) => {
    try {
      deleteCard(userID, cardID).then(() => {
        toast.success("Card Deleted Successfully");
        fetchNonfiction();
      });
    } catch (error) {
      toast.error("Error deleting card");
      console.error("Error deleting card:", error);
    }
  };

  return (
    <div className="w-full min-h-[100vh] bg-white pt-[20px] py-2 px-2 appear">
      <div className="w-full mb-5 flex justify-start items-center">
        <LittleNav name="Non-Fiction" />
      </div>
      <div>
        <Toaster />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center lg:place-items-end border min-h-[650px] rounded-md">
        {/* Card Stying */}
        {card.length > 0 ? (
          card.map((props: any) => (
            <div key={props._id} className="p-2">
              <div className="m-4 py-6 px-5 w-[95%] sm:w-[90%] md:w-[95%] lg:w-[98%] bg-gray-50 rounded-[12px] text-[purple] h-[455px] transition-all duration-[350ms] flex justify-center items-start flex-col border border-[purple]">
                <div className="w-full mt-3 mb-4 flex justify-between items-center">
                  <div className="flex justify-center items-center gap-3">
                    <div className="p-2 bg-[purple] text-[white] text-[15px] rounded-full border border-[white] ">
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
                    <Link to={props._id}>
                      <span className="text-[#144214] cursor-pointer">
                        {" "}
                        ...read more
                      </span>
                    </Link>
                  </Link>
                </div>

                <div className="flex-1" />
                <div className="w-full h-[45%] flex justify-center items-end">
                  <img
                    src={cardimg}
                    alt=""
                    className={`w-full transition-all duration-500 object-cover rounded-xl mb-2 `}
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
              No Non-Fiction Blogs Created
            </h1>
            <p className="text-gray-600">
              It looks like there are no non-fiction blogs available at the
              moment. Please check back later or create a new blog to get
              started!
            </p>
          </div>
        )}
        {/* Card Stying */}
      </div>
    </div>
  );
};

export default Nonfiction;
