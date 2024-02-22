import { Item } from "./item";

export interface Card {
  _id: { $oid: string };
  title: string;
  items: Item[];
}

export interface DynamoDBResponse {
  ID: { S: string };
  items: { L: { M: { name: { S: string }; icon: { S: string } } }[] };
  title: { S: string };
}

