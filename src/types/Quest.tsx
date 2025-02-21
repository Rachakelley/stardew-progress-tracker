export default interface Quest {
 _currentObjective: string;
 _questDescription: string;
 _questTitle: string;
 rewardDescription: number;
 accepted: boolean;
 completed: boolean;
 dailyQuest: boolean;
 showNew: boolean;
 canBeCancelled: boolean;
 destroy: boolean;
 id: number;
 moneyReward: number;
 questType: number;
 daysLeft: number;
 dayQuestAccepted: number;
 nextQuests: {
  int: number;
 };
 questTitle: string;
 buildingType?: string;
 npcName?: string;
 locationOfItem?: string;
 itemIndex?: string;
 tileX?: number;
 tileY?: number;
 itemFound?: boolean;
}
