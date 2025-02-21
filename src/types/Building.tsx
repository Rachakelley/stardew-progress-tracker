import Vector2 from "./Vector2";

export default interface Building {
 id: string;
 skinId: {
  string: string;
 };
 nonInstancedIndoorsName: {
  string: string;
 };
 tileX: number;
 tileY: number;
 tilesWide: number;
 tilesHigh: number;
 maxOccupants: number;
 currentOccupants: number;
 daysOfConstructionLeft: number;
 daysUntilUpgrade: number;
 buildingType: string;
 hayCapacity: number;
 humanDoor: Vector2;
 animalDoor: Vector2;
 animalDoorOpen: boolean;
 animalDoorOpenAmount: number;
 magical: boolean;
 fadeWhenPlayerIsBehind: boolean;
 owner: number | string;
 isMoving: boolean;
}
