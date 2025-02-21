import Friendship from "./Friendship";
import Quest from "./Quest";
import Vector2 from "./Vector2";
import Tool from "./Tool";
import Item from "./Item";
import Color from "./Color";
import Boots from "./Boots";
import PantsItem from "./PantsItem";

export default interface Player {
 name: string;
 forceOneTileWide: boolean;
 isEmoting: boolean;
 isCharging: boolean;
 isGlowing: boolean;
 coloredBorder: boolean;
 flip: boolean;
 drawOnTop: boolean;
 faceTowardFarmer: boolean;
 ignoreMovementAnimation: boolean;
 faceAwayFromFarmer: boolean;
 scale: {
  float: number;
 };
 glowingTransparency: number;
 glowRate: number;
 Gender: string;
 willDestroyObjectsUnderfoot: boolean;
 Position: Vector2;
 Speed: number;
 FacingDirection: number;
 IsEmoting: boolean;
 CurrentEmote: number;
 Scale: number;
 questLog: {
  Quest: Quest[];
 };
 professions: string;
 newLevels: string;
 experiencePoints: {
  int: number[];
 };
 items: {
  Item: (Tool | Item | string)[];
 };
 dialogueQuestionsAnswered: string;
 cookingRecipes: {
  item: Array<{
   key: { string: string };
   value: { int: number };
  }>;
 };
 craftingRecipes: {
  item: Array<{
   key: { string: string };
   value: { int: number };
  }>;
 };
 activeDialogueEvents: {
  item: Array<{
   key: { string: string };
   value: { int: number };
  }>;
 };
 friendshipData: {
  item: Array<{
   key: { string: string };
   value: { Friendship: Friendship };
  }>;
 };
 farmingLevel: number;
 miningLevel: number;
 combatLevel: number;
 foragingLevel: number;
 fishingLevel: number;
 luckLevel: number;
 maxStamina: number;
 maxItems: number;
 stamina: number;
 health: number;
 maxHealth: number;
 difficultyModifier: number;
 farmName: string;
 favoriteThing: string;
 slotCanHost: boolean;
 userID: string;
 money: number;
 totalMoneyEarned: number;
 millisecondsPlayed: number;
 gameVersion: string;
 saveTime: number;
 shirt: number;
 hair: number;
 skin: number;
 shoes: number;
 accessory: number;
 facialHair: number;
 pants: number;
 hairstyleColor: Color;
 pantsColor: Color;
 newEyeColor: Color;
 boots: Boots;
 pantsItem: PantsItem;
 isMale: string;
 deepestMineLevel: number;
 timesReachedMineBottom: number;
 basicShipped: {
  item: Array<{
   key: { string: number };
   value: { int: number };
  }>;
 };
 mineralsFound: {
  item: Array<{
   key: { string: number };
   value: { int: number };
  }>;
 };
 fishCaught: {
  item: Array<{
   key: { string: string };
   value: {
    ArrayOfInt: {
     int: number[];
    };
   };
  }>;
 };
 caveChoice: number;
 lastSeenMovieWeek: number;
 clubCoins: number;
 qiGems: number;
 trashCanLevel: number;
 showChestColorPicker: boolean;
 hasWateringCanEnchantment: boolean;
 daysLeftForToolUpgrade: number;
 houseUpgradeLevel: number;
 daysUntilHouseUpgrade: number;
 homeLocation: string;
 lastSleepLocation: string;
 lastSleepPoint: Vector2;
 dayOfMonthForSaveGame: number;
 seasonForSaveGame: number;
 yearForSaveGame: number;
 UniqueMultiplayerID: string;
 useSeparateWallets: boolean;
 disconnectDay: number;
 disconnectPosition: Vector2;
 divorceTonight: boolean;
 changeWalletTypeTonight: boolean;
 isCustomized: boolean;
 movementMultiplier: number;
 temporaryInvincibilityTimer: number;
 currentTemporaryInvincibilityDuration: number;
 eventsSeen: {
  int: number[];
 };
 secretNotesSeen: string;
 songsHeard: {
  string: string[];
 };
 mailReceived: {
  string: string[];
 };
 mailForTomorrow: string;
 mailbox: {
  string: string;
 };
 archaeologyFound: {
  item: Array<{
   key: { string: number };
   value: {
    ArrayOfInt: {
     int: number[];
    };
   };
  }>;
 };
 whichPetType: string;
 whichPetBreed: number;
 stats: {
  specificMonstersKilled: {
   item: Array<{
    key: { string: string };
    value: { int: number };
   }>;
  };
  Values: {
   item: Array<{
    key: { string: string };
    value: { unsignedInt: number };
   }>;
  };
 };
 biteChime: number;
 itemsLostLastDeath: string;
 movementDirections: string;
 acceptedDailyQuest: boolean;
 mostRecentBed: Vector2;
 lastGotPrizeFromGil: {
  WorldDate: string;
 };
 lastDesertFestivalFishingQuest: {
  WorldDate: string;
 };
}
