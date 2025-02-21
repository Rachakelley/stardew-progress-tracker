/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import PlayerSummary from "./components/PlayerSummary";
import {
 getPlayerSummaryData,
 getGameSummary,
 handleFileUpload,
} from "./utils";

const App: React.FC = () => {
 const [parsedData, setParsedData] = useState<any>(null);
 const [player, setPlayer] = useState<any>(null);
 const [gameData, setGameData] = useState<any>(null);
 const playerSummaryData = getPlayerSummaryData(player);
 const gameSummaryData = getGameSummary(gameData);

 useEffect(() => {
  if (parsedData) {
   if (parsedData.SaveGame && parsedData.SaveGame.player) {
    setGameData(parsedData.SaveGame);
    setPlayer(parsedData.SaveGame.player);
   }
  }
 }, [parsedData]);

 return (
  <div>
   <div className="relative h-[50vh] bg-cover bg-center flex flex-col align-center items-center justify-center bg-[url('/stardew-day.jpg')] shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-[#161616] opacity-30"></div>
    <h1 className="relative text-white text-3xl md:text-5xl lg:text-6xl drop-shadow-lg">
     Stardew Valley Progress Tracker
    </h1>
    <div className="relative flex flex-col gap-4 md:gap-2 items-center justify-center mt-6 md:mt-2 p-4">
     <h2 className="text-white text-xl md:text-2xl lg:text-3xl drop-shadow-lg">
      Upload your save file to get started
     </h2>
     <label
      htmlFor="file"
      className="backdrop-blur-xs cursor-pointer inline-block border border-dotted border-white rounded-lg p-6 m-4 w-48 bg-gradient-to-tr from-[#008c6c4f] to-[#084b8b52] text-white shadow-lg text-center text-xl rounded"
     >
      Select Save File
     </label>
     <input
      type="file"
      id="file"
      className="absolute invisible"
      onChange={(event) => handleFileUpload(event, setParsedData)}
     />
    </div>
   </div>

   {playerSummaryData && (
    <>
     <h1 className="text-xl md:text-2xl lg:text-3xl drop-shadow-lg text-center mt-4">
      {playerSummaryData && `${playerSummaryData?.farmName} Farm`}
     </h1>
     <div className="relative text-center mt-4">
      <img src="/scroll.png" alt="Date on Scroll" className="mx-auto" />
      <h2 className="absolute inset-0 flex items-center justify-center text-lg text-black drop-shadow-lg">
       {`Day ${gameSummaryData?.dayOfMonth} of ${gameSummaryData?.currentSeason
        ?.charAt(0)
        .toUpperCase()}${gameSummaryData?.currentSeason?.slice(
        1,
        gameSummaryData?.currentSeason?.length
       )}, Year ${gameSummaryData?.year}`}
      </h2>
     </div>
    </>
   )}
   {playerSummaryData && <PlayerSummary {...playerSummaryData} />}
  </div>
 );
};

export default App;
