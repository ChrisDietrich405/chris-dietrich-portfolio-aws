export interface Project {
  _id: { $oid: string };
  title: string;
  image: string;
  github_link: string;
  technologies: string[];
  link: string;
  libraries: string[];
  backend: string[];
}
