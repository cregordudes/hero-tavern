import { Link } from "react-router-dom";
import { GameMasterType } from "../../types";

const DMCard = ({
   id,
   username,
   image,
   price,
   rating,
   experience,
   description,
   gamesPlayed,
   link,
}: GameMasterType) => {
   return (
      <div
         className="bg-slate-900 min-h-[300px] max-w-full lg:max-w-lg xl:max-w-full rounded-lg mb-4 p-4 flex flex-col gap-4 relative group"
         id={id}
      >
         {/* Left Section: Room Image */}
         <div className="flex flex-row">
            <div className="w-1/3">
               <Link to={link}>
                  <img
                     src={image}
                     alt={username}
                     className="w-full h-auto object-cover rounded-full"
                  />
               </Link>
            </div>

            <div className="w-2/3 flex flex-row justify-around items-center">
               <p className="text-xl font-bold text-white  text-left">
                  {username}
               </p>
               <div className="gap-2 flex items-center justify-evenly  text-white px-2 py-1 rounded-md text-md">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="#facc15"
                     className="size-6"
                  >
                     <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                     />
                  </svg>

                  <p>{rating}</p>
               </div>
            </div>
         </div>

         <div className="w-full h-full flex flex-col items-start text-left">
            <p className="text-slate-300  text-md pb-2">
               Price: <span className="text-slate-200 font-bold">{price}$</span>
            </p>
            <p className="text-slate-300 text-md pb-2">
               {description.length < 50
                  ? description
                  : description.slice(0, 50) + "..."}
            </p>
            <p className="text-slate-300 text-md pb-2">
               <span className="text-slate-200 font-bold"> {experience} </span>{" "}
               years of experience
            </p>
            <p className="text-slate-300 text-md pb-2">
               <span className="text-slate-200 font-bold">{gamesPlayed}</span>{" "}
               total games played
            </p>
         </div>
         <button className="opacity-0 group-hover:opacity-100 absolute bottom-2 right-2 text-slate-200 bg-indigo-500 p-2 rounded">
            Apply
         </button>
      </div>
   );
};

export default DMCard;
