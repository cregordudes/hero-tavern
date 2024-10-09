import { Link } from "react-router-dom";
import { GameCardProps } from "../../types";

const GameCard = ({ title, online, image, link, tags }: GameCardProps) => {
   return (
      <div className="bg-slate-900 w-full rounded-lg mb-4 p-2 grid gap-2">
         <img
            src={image}
            alt={title}
            className="h-auto object-cover rounded-lg"
         />
         <div className="flex flex-col items-center justify-center">
            <div className="flex gap-2 py-1">
               {tags.map((tag, index) => (
                  <p
                     key={index}
                     className="bg-slate-800 text-blue-400 p-1 text-md rounded-md"
                  >
                     {tag}
                  </p>
               ))}
            </div>
            <p className="text-xl font-bold text-white mt-2">{title}</p>
            <div className="flex gap-2 items-center mt-2">
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
               <p className="text-slate-400 text-sm">{online} online</p>
            </div>
            <Link
               to={link}
               className="bg-indigo-500 text-white p-2 mt-4 text-md rounded-lg block text-center w-full"
            >
               Join Game
            </Link>
         </div>
      </div>
   );
};

export default GameCard;
