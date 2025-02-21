import Vector2 from "./Vector2";
import Player from "./Player";
import Building from "./Building";
import Item from "./Item";

export default interface SaveGame {
 player: Player;
 locations: {
  GameLocation: Array<{
   buildings: {
    Building: Building[];
   };
   objects: {
    item: Array<{
     key: { Vector2: Vector2 };
     value: { Object: Item };
    }>;
   };
  }>;
 };
}
