import Color from "./Color";

export default interface PantsItem {
 isLostItem: boolean;
 category: number;
 hasBeenInInventory: boolean;
 name: string;
 itemId: number;
 specialItem: boolean;
 isRecipe: boolean;
 quality: number;
 stack: number;
 SpecialVariable: number;
 price: number;
 indexInTileSheet: number;
 indexInTileSheetFemale: string;
 clothesType: string;
 dyeable: boolean;
 clothesColor: Color;
 isPrismatic: boolean;
 Price: number;
}
