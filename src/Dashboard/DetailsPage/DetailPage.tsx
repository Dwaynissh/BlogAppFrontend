import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneCard } from "../../Api/CardApi";
import { FaAngleRight } from "react-icons/fa";
import blogImage from "../../assets/blog-2.jpg";

const DetailPage = () => {
  const { ID } = useParams<{ ID: string }>();
  const [card, setCard] = useState<any>(null);

  useEffect(() => {
    getOneCard(ID).then((res) => {
      console.log(res?.data);

      setCard(res.data);
    });
  }, []);

  return (
    <div className="w-full min-h-screen rounded-[30px] pt-[20px] py-2 px-2 bg-white">
      <div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[90%] md:w-[95%] lg:w-[90%] flex justify-center items-start flex-col gap-3 transition-all duration-[350ms]">
            <div className="mt-3 text-black flex justify-center items-center gap-2">
              <Link to="/dashboard">
                <h1 className="text-[15px] text-[#696969]">Go Back</h1>
              </Link>
              <FaAngleRight />
              <h1 className="text-[15px] text-[black]">Blog News</h1>
            </div>

            {/* Blog Contents Starts Here */}
            <div className="p-[20px] lg:p-[40px] border transition-all duration-[350ms]">
              <div className="mb-4 text-[30px] md:text-[40px] font-bold">
                Erik ten Hag’s Manchester United contract extended until 2026
              </div>
              <div className="mb-3 text-[15px] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                debitis minima suscipit obcaecati explicabo aliquid, nihil
                delectus minus hic deleniti, quidem tempora nemo mollitia iusto
                architecto cumque nulla. Nulla, asperiores!
              </div>
              <div className="mb-1 text-[16px] md:text-[17px] font-semibold">
                By David Ornstein and Mark Critchley
              </div>
              <div className="mb-5 text-[15px] font-medium">
                16:42, Fri, Jul 5, 2024 | UPDATED: 16:43, Fri, Jul 5, 2024
              </div>
              <div className="mb-3">
                <img
                  src={blogImage}
                  alt="blogimage"
                  className="h-[300px] mb-3 w-full object-cover"
                />
              </div>
              <div className="mb-4 text-[15px] font-medium">
                16:42, Fri, Jul 5, 2024 | UPDATED: 16:43, Fri, Jul 5, 2024
              </div>
              <div className="mb-4 border border-b-[2px]" />
              <div className="mb-3 text-[15px] font-medium leading-9">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                corporis veritatis exercitationem tenetur, reprehenderit libero
                optio sit ipsam ullam culpa voluptatem obcaecati hic odio fugiat
                repellendus voluptatum? Molestiae, molestias minima? Officiis,
                tempore atque? Illo praesentium natus magnam deleniti,
                repellendus vitae? Minima, fugit saepe labore laudantium eum
                laboriosam nobis. Tempora tempore facere eum libero nulla
                debitis architecto et quas accusantium asperiores. Veritatis
                aliquid praesentium quod aliquam repellendus quaerat odio
                voluptatem sit fugit. Possimus inventore corrupti similique
                illum earum id! At quae doloribus quia consequuntur incidunt
                officia illo magni quo est quas. Consequuntur odio
                exercitationem quo, beatae cumque dolorem voluptatum eum quis
                officiis rem tenetur sunt et suscipit temporibus corporis
                inventore, delectus aperiam? Delectus repellat blanditiis
                inventore autem exercitationem, impedit qui illum. Ad assumenda
                cumque voluptatum nostrum non ex beatae, optio sequi
                voluptatibus suscipit nemo molestiae tenetur praesentium quis
                nisi esse pariatur illo delectus vero aperiam eligendi hic
                possimus! Eum, perspiciatis exercitationem! Doloremque fugit
                quis praesentium perspiciatis maxime cum provident ipsum
                blanditiis dolorem officia illum, quam est! Delectus repellat
                veniam consequuntur, earum illum eius molestiae rerum, quibusdam
                quaerat, ut aspernatur nisi quo.
              </div>
            </div>
            {/* Blog Contents Ends Here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

{
  /* <div className="w-full text-center">Card ID Number: {ID}</div>
<div className="text-[30px]">{card?.title}</div>
<div className="text-[20px]">{card?.description}</div> */
}
