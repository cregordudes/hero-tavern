import DMCard from "../../components/DMCard/DMCard";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import GameCard from "../../components/GameCard/GameCard";
import GamesSlider from "../../components/GamesSlider/GamesSlider";
import HotTitle from "../../components/HotTitle/HotTitle";
import RoomCard from "../../components/RoomCard/RoomCard";
import { gameList, bannerList, roomList, DMList } from "../../utils/dummyData";
import RecommendIcon from "@mui/icons-material/Recommend";

const Home = () => {
   return (
      <section id="home" className="mt-16 w-full h-full">
         <div className="w-full h-full grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 relative">
               <GamesSlider bannerList={bannerList} />
            </div>

            <div className="w-full flex flex-row justify-between items-center">
               <HotTitle link="/popular-games" title="Popular Games" />
               <FilterSelect options={["All", "NoDM", "DM"]} />
            </div>

            <div
               id="popular-games"
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center px-4"
            >
               {gameList.map((game) => (
                  <GameCard key={game.id} {...game} />
               ))}
            </div>

            <div className="w-full flex flex-row justify-between items-center">
               <HotTitle
                  link="/popular-rooms"
                  title="Recomended Rooms"
                  icon={RecommendIcon}
               />
               <FilterSelect
                  defaultValue="Featured"
                  options={["Featured", "Recent", "Popular", "All"]}
               />
            </div>

            <div
               id="recommended-rooms"
               className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-4"
            >
               {roomList.map((room) => (
                  <RoomCard key={room.id} {...room} />
               ))}
            </div>

            <div className="w-full flex flex-row justify-between items-center">
               <HotTitle
                  link="/dms"
                  title="Find Dungeon Master"
                  icon={RecommendIcon}
               />
               <FilterSelect
                  defaultValue="Popular"
                  options={["Highest Rated", "New", "Popular", "All"]}
               />
            </div>

            <div
               id="top-dms"
               className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center px-4"
            >
               {DMList.map((dm) => (
                  <DMCard key={dm.id} {...dm} />
               ))}
            </div>
            <div id="blog-news" className="mt-4"></div>
         </div>
      </section>
   );
};

export default Home;
