import Item from "./Item";

export default interface Tool extends Item {
 swingTicker: number;
 upgradeLevel: number;
 numAttachmentSlots: number;
 attachments: string | { Object: string[] };
 additionalPower?: {
  int: number;
 };
}
