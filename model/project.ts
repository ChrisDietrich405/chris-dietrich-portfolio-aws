export interface Project {
  _id: { $oid: string };
  title: string;
  image: string;
  technologies: string[];
  github_link: string;
  link: string;
  libraries: string[];
  backend: string[];
}
export interface DynamoDBResponse {
  ID: { S: string };
  title: { S: string };
  image: { S: string };
  technologies: { L: { S: string }[] };
  github_link: { S: string };
  link: { S: string };
  libraries: { L: { S: string }[] };
  backend: { L: { S: string }[] };
}
