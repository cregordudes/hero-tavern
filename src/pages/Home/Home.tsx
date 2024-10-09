import bannerBg from "../../assets/bannerBg.jpg";
import GameCard from "../../components/GameCard/GameCard";

const Home = () => {
   const gameList = [
      {
         id: 1,
         title: "League of legends",
         online: "4.4k",
         image: bannerBg,
         link: "/game/1",
         tags: ["MOBA"],
      },
      {
         id: 2,
         title: "PathFinder",
         online: "1.2k",
         image: bannerBg,
         link: "/game/2",
         tags: ["Role Play", "Tactics"],
      },
      {
         id: 3,
         title: "Doka 2",
         online: "5.7k",
         image: bannerBg,
         link: "/game/3",
         tags: ["MOBA"],
      },
      {
         id: 4,
         title: "Majong",
         online: "125",
         image: bannerBg,
         link: "/game/4",
         tags: ["Chess", "Tactics"],
      },
   ];

   return (
      <section id="home" className="mt-16 w-full h-full">
         {/* Using CSS Grid layout */}
         <div className="w-full h-full grid grid-cols-1 xl:grid-cols-3 gap-4">
            {/* Banner Section */}
            <div id="banner" className="col-span-2 relative h-[600px]">
               <img
                  className="w-full h-auto max-h-[600px] object-cover z-0"
                  src={bannerBg}
                  alt="banner"
               />

               <div
                  id="banner-text"
                  className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center"
               >
                  <p className="bg-orange-500 text-white p-2 w-24 rounded-lg mb-2">
                     22k users
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                     Dungeons and Dragons Edition 5
                  </p>
                  <div className="flex gap-2 justify-center">
                     <button className="bg-indigo-500 text-white p-2 w-32 rounded-lg">
                        Play
                     </button>
                     <button className="bg-indigo-500 text-white p-2 w-32 rounded-lg">
                        About
                     </button>
                  </div>
               </div>
            </div>

            {/* Popular Games Section */}
            <div
               id="popular-games"
               className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"
            >
               {gameList.map((game) => (
                  <GameCard key={game.id} {...game} />
               ))}
            </div>
         </div>

         {/* Placeholder sections */}
         <div id="recommended-rooms" className="mt-4"></div>
         <div id="top-dms" className="mt-4"></div>
         <div id="blog-news" className="mt-4"></div>
      </section>
   );
};

export default Home;
