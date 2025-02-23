/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import {
 getPlayerSkillsData,
 getPlayerSummaryData,
 getGameSummary,
 handleFileUpload,
} from "./utils";
import Clouds from "./components/Clouds";
import PlayerSummary from "./components/PlayerSummary";
import Pets from "./components/Pets";
import Loading from "./components/Loading";
import Player from "./types/Player";
import DateDetails from "./components/DateDetails";

const App: React.FC = () => {
 const [isLoading, setIsLoading] = useState(false);
 const [parsedData, setParsedData] = useState<any>(null);
 const [player, setPlayer] = useState<Player | null>(null);
 const [gameData, setGameData] = useState<any>(null);
 const [error, setError] = useState<string | null>(null);
 const summaryRef = useRef<HTMLDivElement>(null);
 const playerSummaryData = getPlayerSummaryData(player);
 const gameSummaryData = getGameSummary(gameData);
 const playerSkills = getPlayerSkillsData(player);

 const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  setError(null);
  setIsLoading(true);
  handleFileUpload(
   event,
   (data) => {
    setParsedData(data);
    setIsLoading(false);
   },
   (errorMessage) => {
    setError(errorMessage);
    setIsLoading(false);
   }
  );
 };

 useEffect(() => {
  if (parsedData) {
   console.log("parsedData", JSON.stringify(Object.keys(parsedData), null, 2));
   if (parsedData.SaveGame && parsedData.SaveGame.player) {
    setGameData(parsedData.SaveGame);
    setPlayer(parsedData.SaveGame.player);
   }
  }
 }, [parsedData]);

 useEffect(() => {
  if (playerSummaryData && summaryRef.current) {
   setTimeout(() => {
    summaryRef.current?.scrollIntoView({
     behavior: "smooth",
     block: "center",
    });
   }, 100);
  }
 }, [playerSummaryData]);

 return (
  <div>
   <header className="border-b-blue-900 shadow-xl">
    <Clouds />
    <div className="h-[100vh] bg-cover bg-center flex flex-col align-center items-center justify-center bg-[url('/stardew-day.jpg')]">
     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-[#161616] opacity-30"></div>
     <h1 className="z-2 relative text-white text-2xl md:text-3xl lg:text-6xl drop-shadow-lg border-none">
      Stardew Valley Progress Tracker
     </h1>
     <div className="relative flex flex-col gap-1 md:gap-2 lg:gap-4 items-center justify-center mt-0 lg:mt-6 md:mt-2 p-4">
      <h2 className="text-white text-lg md:text-xl lg:text-3xl drop-shadow-lg">
       Upload your save file to get started
      </h2>
      <label
       htmlFor="file"
       className="z-2 backdrop-blur-xs cursor-pointer inline-block border border-dotted border-white p-6 m-4 w-48 bg-gradient-to-tr from-[#008c6c4f] to-[#084b8b52] text-white shadow-lg text-center text-md md:text-lg lg:text-xl rounded"
      >
       Select Save File
      </label>
      <input
       type="file"
       accept=".xml,*"
       id="file"
       className="absolute invisible"
       onChange={handleUpload}
      />
      {isLoading && <Loading />}
      {error && (
       <div className="z-2 bg-red-300 border rounded text-black p-3 text-center">
        {error}
       </div>
      )}
     </div>
    </div>
   </header>

   {playerSummaryData && (
    <div
     ref={summaryRef}
     className="w-[70vw] h-[100vh] mx-auto flex flex-col items-center justify-start"
    >
     <h1 className="tracking-wide text-red-950 text-md md:text-2xl lg:text-3xl drop-shadow-lg text-center mt-4">
      {`${playerSummaryData?.farmName} Farm`}
     </h1>
     <DateDetails {...gameSummaryData} />
     <PlayerSummary skills={playerSkills || []} {...playerSummaryData} />
     <Pets
      petType={playerSummaryData?.petType}
      petBreed={playerSummaryData?.petBreed}
     />
    </div>
   )}
  </div>
 );
};

export default App;
