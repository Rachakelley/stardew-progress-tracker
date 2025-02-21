export default interface Friendship {
 Points: number;
 GiftsThisWeek: number;
 GiftsToday: number;
 LastGiftDate?: {
  Year: number;
  DayOfMonth: number;
  Season: string;
 };
 TalkedToToday: boolean;
 ProposalRejected: boolean;
 Status: string;
 Proposer: number;
 RoommateMarriage: boolean;
}
