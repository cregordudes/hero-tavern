import { Link } from "react-router-dom";
import { HotTitleProps } from "../../types";

const HotTitle = ({ link, title }: HotTitleProps) => {
   return (
      <div
         className="max-w-md w-fit text-3xl text-white  sm:ml-4 sm:mt-4 z-10 uppercase bg-[#071E3D]  py-2 px-4 rounded-lg font-normal
            transition duration-400 ease-in-out hover:border-gray-400 hover:text-gray-400 hover:font-bold hover:scale-105 hover:underline underline-offset-2 hover:cursor-pointer
             shadow-sm shadow-black/60"
      >
         <Link to={link}>
            <p className="flex  justify-center items-center">
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
               {title}
            </p>
         </Link>
      </div>
   );
};

export default HotTitle;
