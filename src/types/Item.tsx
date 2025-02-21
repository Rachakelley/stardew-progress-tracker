export default interface Item {
 isLostItem: boolean;
 category: number;
 hasBeenInInventory: boolean;
 name: string;
 itemId: number | string;
 specialItem: boolean;
 isRecipe: boolean;
 quality: number;
 stack: number;
 SpecialVariable: number;
 initialParentTileIndex?: number;
 currentParentTileIndex?: number;
 indexOfMenuItemView?: number;
 instantUse: boolean;
 isEfficient: boolean;
 animationSpeedModifier: number;
}
