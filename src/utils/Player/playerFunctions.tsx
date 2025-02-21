import SaveGame from "../../types/SaveGame";
import Quest from "../../types/Quest";
import Player from "../../types/Player";

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

export function getPlayerSummaryData(player: Player) {
 if (!player) {
  return null;
 }

 console.log("player", player);
 return {
  maxHealth: player.maxHealth,
  maxStamina: player.maxStamina,
  maxItems: player.maxItems,
  name: player.name,
  gender: player.Gender,
  farmName: player.farmName,
  favoriteThing: player.favoriteThing,
  petType: player.whichPetType,
  petBreed: player.whichPetBreed,
  farming: player.farmingLevel,
  mining: player.miningLevel,
  combat: player.combatLevel,
  foraging: player.foragingLevel,
  fishing: player.fishingLevel,
  luck: player.luckLevel,
  money: player.money,
 };
}
