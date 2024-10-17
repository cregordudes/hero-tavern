import GameCard from "../../components/GameCard/GameCard";
import GamesSlider from "../../components/GamesSlider/GamesSlider";
import { gameList, bannerList } from "../../utils/dummyData";

const Home = () => {
   return (
      <section id="home" className="mt-16 w-full h-full">
         <div className="w-full h-full grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 relative">
               <GamesSlider bannerList={bannerList} />
            </div>
            <div
               id="popular-games"
               className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"
            >
               {gameList.map((game) => (
                  <GameCard key={game.id} {...game} />
               ))}
            </div>
         </div>

         <div id="recommended-rooms" className="mt-4"></div>
         <div id="top-dms" className="mt-4"></div>
         <div id="blog-news" className="mt-4"></div>
      </section>
   );
};

export default Home;
