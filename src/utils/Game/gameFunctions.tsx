// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getGameSummary = (gameData: any) => {
 if (!gameData) {
  return { currentSeason: "", dayOfMonth: 0, year: 0 };
 }

 return {
  currentSeason: gameData.currentSeason || "",
  dayOfMonth: Number(gameData.dayOfMonth) || 0,
  year: Number(gameData.year) || 0,
 };
};
