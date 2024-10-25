import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
//import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { BannerProps } from "../../types";
import { Link } from "react-router-dom";

type GamesSliderProps = {
   bannerList: BannerProps[]; // Define a prop type
};

const GamesSlider = ({ bannerList }: GamesSliderProps) => {
   return (
      <Swiper
         modules={[Pagination, Autoplay]}
         onTouchEnd={(swiper) => {
            if (swiper.isEnd) {
               swiper.slideTo(0);
            }
         }}
         slidesPerView={1}
         pagination={{
            dynamicBullets: true,
         }}
         autoplay={{
            delay: 5000,
            disableOnInteraction: false,
         }}
         style={{
            width: "100%",
            height: "100%",
         }}
      >
         {bannerList.map((el) => (
            <SwiperSlide
               key={el.id}
               //style={{
               //   width: "100% !important",
               //   height: "100%",
               //   minWidth: "100%",
               //}}
            >
               <div className="relative w-full h-full">
                  {/*<Link to={"/games"}>*/}
                  <div
                     className="text-3xl text-white absolute top-0 left-0 sm:ml-4 sm:mt-4 z-10 uppercase bg-[#202020]  p-2 rounded-lg font-normal
                     flex justify-center items-center shadow-sm shadow-black/60"
                  >
                     {/*transition duration-400 ease-in-out hover:border-[#FB773C] hover:text-[#FB773C] hover:font-bold hover:scale-105 hover:underline underline-offset-2 hover:cursor-pointer*/}
                     <span>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="#FB773C"
                           className="size-6 mr-2"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                              clip-rule="evenodd"
                           />
                        </svg>
                     </span>
                     Featured Games
                  </div>
                  {/*</Link>*/}
                  <img
                     className="w-full h-auto max-h-[600px] object-cover z-0"
                     src={el.image}
                     alt="banner"
                  />
                  <div
                     id="banner-text"
                     className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center"
                  >
                     <p className="bg-orange-500 text-white mt-2 sm:mt-0 sm:p-2 w-24 rounded-lg mb-2">
                        {el.users} users
                     </p>
                     <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {el.title}
                     </p>
                     <div className="flex gap-4 sm:gap-2 justify-center">
                        <button className="bg-indigo-500 text-white p-2 w-32 rounded-lg">
                           <Link to={el.links[0]}>Play</Link>
                        </button>
                        <button className="bg-indigo-500 text-white p-2 w-32 rounded-lg">
                           <Link to={el.links[1]}>About</Link>
                        </button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default GamesSlider;
