import SaveGame from "../../types/SaveGame";
import Quest from "../../types/Quest";
import Player from "../../types/Player";
import { SKILL_CONFIG } from "../../constants/skills";

export function getPlayerQuests(saveGame: SaveGame): Quest[] {
 return saveGame.player.questLog.Quest;
}

export function getFriendshipLevel(
 saveGame: SaveGame,
 npcName: string
): number {
 const friendship = saveGame.player.friendshipData.item.find(
  (item) => item.key.string === npcName
 );
 return friendship?.value.Friendship.Points ?? 0;
}

export function getPlayerSummaryData(player: Player | null) {
 if (!player) {
  return null;
 }

 console.log("player", player);
 return {
  name: player.name,
  maxHealth: player.maxHealth,
  maxStamina: player.maxStamina,
  maxItems: player.maxItems,
  gender: player.Gender,
  farmName: player.farmName,
  favoriteThing: player.favoriteThing,
  petType: player.whichPetType || player.catPerson ? "Cat" : "Dog",
  petBreed: player.whichPetBreed,
  luck: player.luckLevel,
  money: player.money,
  playTime: player.millisecondsPlayed,
  totalMoneyEarned: player.totalMoneyEarned,
 };
}

export function getPlayerSkillsData(player: Player | null) {
 if (!player) {
  return null;
 }

 return SKILL_CONFIG.map(({ name, levelKey, expIndex, icon }) => ({
  name,
  level: player[levelKey] ?? 0,
  currentExp: player.experiencePoints.int[expIndex] ?? 0,
  icon: icon || "",
 }));
}
