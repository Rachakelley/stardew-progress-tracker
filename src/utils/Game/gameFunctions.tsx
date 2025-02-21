// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getGameSummary(saveData: any) {
 if (!saveData) {
  return null;
 }

 const { currentSeason, dayOfMonth, year, whichFarm } = saveData;

 return {
  currentSeason,
  dayOfMonth,
  year,
  whichFarm,
 };
}
