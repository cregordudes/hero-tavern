import { Link } from "react-router-dom";
import { RoomType } from "../../types";
import DefaultUser from "../../assets/defaultUser.svg";

const RoomCard = ({
   id,
   name,
   image,
   creator,
   users,
   createdAt,
   status,
   tags,
   link,
}: RoomType) => {
   const statusColor =
      status === "Active"
         ? "#22c55e"
         : status === "Finished"
         ? "#ef4444"
         : "#808080";

   return (
      <div
         className="bg-slate-900 min-h-[280px] max-w-full lg:max-w-lg xl:max-w-full rounded-lg mb-4 p-4 flex gap-4"
         id={id}
      >
         {/* Left Section: Room Image */}
         <div className="w-1/2">
            <img
               src={image}
               alt={name}
               className="w-full h-auto object-cover rounded-lg"
            />
         </div>

         <div className="w-1/2 flex flex-col justify-between">
            <div className="flex gap-2 flex-wrap">
               <div
                  className={`flex items-center bg-[#27304B] text-white px-2 py-1 rounded-md text-sm`}
                  style={{ backgroundColor: statusColor }}
               >
                  {status}
               </div>
               {/* max 3 tags, maxlenght = 22 */}
               {tags.map((tag, index) => (
                  <div
                     key={index}
                     className="bg-[#27304B] text-blue-400 px-2 py-1 rounded-md text-sm "
                  >
                     {tag}
                  </div>
               ))}
            </div>

            <p className="text-xl font-bold text-white mt-2 text-left">
               {name}
            </p>

            <div className="flex items-center justify-start mt-2 text-gray-400 text-sm">
               <span className="mr-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1"></div>
                  {users.length} users
               </span>
               <span className="ml-2 md:ml-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full inline-block mr-1"></div>
                  {createdAt}
               </span>
               <span className="ml-2 md:ml-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full inline-block mr-1"></div>
                  Once per week
               </span>
            </div>

            <div
               className={`${
                  users.length >= 3 ? "justify-evenly" : "justify-start"
               } relative mt-2 flex items-center `}
            >
               <div
                  //style={{ flexGrow: "3" }}
                  className={`${
                     users.length >= 3
                        ? "w-3/6 justify-evenly"
                        : "w-1/3 justify-evenly"
                  } flex items-center gap-2`}
               >
                  {users.slice(0, 3).map((user, idx) => (
                     <div
                        className="group flex flex-col justify-center gap-1 items-center relative"
                        key={idx}
                     >
                        <Link to={`/profile/${user.id}`}>
                           {user.id === creator.id && (
                              <div className="absolute top-0 right-1 w-2 h-2 rounded-full bg-purple-500 inline-block mr-1" />
                           )}

                           <img
                              src={user.avatar || DefaultUser}
                              alt={user.username}
                              className="w-8 h-8 rounded-full group-hover:border-2 group-hover:border-indigo-500 group-hover:scale-115 cursor-pointer"
                           />
                        </Link>
                        <p className="text-sm text-white">{user.username}</p>
                     </div>
                  ))}
               </div>

               <div
                  className="flex flex-col w-3/6 items-center"
                  //style={{ flexGrow: "1" }}
               >
                  {users.length > 3 && (
                     <>
                        <div className="flex items-baseline ml-4 h-full ">
                           {users.slice(3).map((user, idx) => (
                              <div
                                 key={idx}
                                 className="group relative -ml-4 first:ml-0 group"
                                 style={{ zIndex: users.length - idx }}
                              >
                                 <Link to={`/profile/${user.id}`}>
                                    <img
                                       src={user.avatar || DefaultUser}
                                       alt={user.username}
                                       className="w-8 h-8 rounded-full group-hover:border-2 group-hover:border-indigo-500 group-hover:scale-115 cursor-pointer"
                                    />
                                 </Link>
                              </div>
                           ))}
                        </div>
                        <p className="text-white">+{users.length - 3} others</p>
                     </>
                  )}
               </div>
            </div>

            <Link
               to={link}
               className="bg-indigo-500 text-white py-2 mt-4 rounded-lg text-center text-md"
            >
               View Room
            </Link>
         </div>
      </div>
   );
};

export default RoomCard;
