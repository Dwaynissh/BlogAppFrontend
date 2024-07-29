import { useContext, useEffect, useState } from "react";
import DashHeader from "./Static/DashHeader";
import { GlobalContext } from "../Provider/ContextProvider";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FaCamera } from "react-icons/fa";
import pix from "../assets/PrinceJohn.jpeg";
import { createCard } from "../Api/CardApi";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";

const CreateBlog = () => {
  const { toggle } = useContext(GlobalContext);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [avatar, setAvatar] = useState<string>(pix);
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const userToken: any = useSelector((state: any) => state.user);

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const readyimage = URL.createObjectURL(file);
    setImage(file);
    setAvatar(readyimage);
  };

  const decodedToken: any = jwtDecode(userToken);
  const userID = decodedToken.id;

  const handleCreateCard = async (e: any) => {
    e.preventDefault();
    try {
      await createCard(
        userID,
        title,
        author,
        image,
        description,
        category,
        content
      ).then((res) => {
        console.log("Card created:", res);
        return res.data;
      });
    } catch (error) {
      console.log("Error creating card:", error);
    }
  };

  return (
    <div className="w-full pl-[5px] mt-[70px] rounded-[20px] flex justify-start items-center flex-col">
      <div
        className={`w-full ${
          toggle ? "md:pl-[45px]" : "md:pl-[120px]"
        } h-[70px] fixed top-0  text-white z-10`}
      >
        <DashHeader />
      </div>
      <div className="w-full py-[20px] px-[20px] min-h-[100vh] rounded-[30px] bg-white relative">
        <div className="w-full mb-4 top-[0]">
          <button
            className="py-2 px-5 bg-[#696969] text-[17px] text-white rounded-md font-medium"
            onClick={handleCreateCard}
          >
            Add Blog Post
          </button>
        </div>
        <div className="w-full py-[20px] pr-[20px] bg-gray-200 rounded-md grid md:grid-cols-3">
          <div className="h-full pl-[90px] md:pl-4 md:p-[10px] lg:p-[20px] ">
            <div className="relative h-[230px] md:h-[300px] bg-gray-400 w-[80%] sm:w-[70%] md:w-[100%] flex justify-center items-center rounded-md cursor-pointer">
              <img
                src={avatar}
                alt=""
                className="w-full h-full object-cover rounded-[inherit]"
              />
              <input
                type="file"
                id="blogImage"
                onChange={handleImage}
                className="hidden"
              />
              <label
                className="absolute bottom-[20px] right-[20px] py-3 px-3 text-[20px] text-[#696969] bg-white rounded-full cursor-pointer hover:text-[24px] hover:transition-all hover:duration-[400ms]"
                htmlFor="blogImage"
              >
                <FaCamera />
              </label>
            </div>
          </div>

          <div className="h-full pt-[20px] md:col-span-2">
            {/* Blog Title */}
            <div className="mb-[10px] pl-5 md:pl-0 grid grid-cols-1">
              <div className="mb-1 text-[#696969] text-[20px] font-semibold">
                Blog Title
              </div>
              <input
                type="text"
                placeholder="02/22/2024"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(e.target.value);
                }}
                className="bg-white h-[40px] pl-2 rounded-md"
              />
            </div>
            {/* Blog Author, Description */}
            <div className="mb-[10px] pl-5 md:pl-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="mr-0 sm:mr-0 md:mr-4 mb-2 md:col-span-2 lg:col-span-1">
                <div className="mb-1 text-[#696969] text-[20px] font-semibold">
                  Author
                </div>
                <input
                  type="text"
                  placeholder="Prince John"
                  value={author}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setAuthor(e.target.value);
                  }}
                  className="bg-white h-[40px] pl-2 rounded-md w-full"
                />
              </div>
              <div className="col-span-2">
                <div className="mb-1 text-[#696969] text-[20px] font-semibold">
                  Blog Description
                </div>
                <textarea
                  placeholder="About your blog"
                  value={description}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setDescription(e.target.value);
                  }}
                  className="bg-white h-[40px] pl-2 rounded-md w-full"
                />
              </div>
            </div>

            {/* Blog Category */}
            <div className="mb-[10px] pl-5 md:pl-0 grid grid-cols-1">
              <div className="mb-1 text-[#696969] text-[20px] font-semibold">
                Blog Category
              </div>
              <select
                name=""
                id=" "
                value={category}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setCategory(e.target.value);
                }}
                className="bg-white h-[40px] pl-2 rounded-md"
              >
                <option value="">Select</option>
                <option value="fiction">fiction</option>
                <option value="non-fiction">non-fiction</option>
                <option value="adventure">adventure</option>
                <option value="religious">religious</option>
              </select>
            </div>

            <div className="pl-5 md:pl-0 w-[99%]">
              <div className="mb-1 text-[#696969] text-[20px] font-semibold">
                Blog Content
              </div>
              <CKEditor
                editor={ClassicEditor}
                data={content}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContent(data);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
