import { Item } from "./item";

export interface Card {
  _id: { $oid: string };
  title: string;
  items: Item[];
}
