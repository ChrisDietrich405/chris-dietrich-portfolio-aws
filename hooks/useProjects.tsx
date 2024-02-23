import { useEffect, useState } from "react";
import { Project } from "../model/project";
import { DynamoDBResponse } from "../model/project";

interface ApiGatewayResponse {
  status: string;
  body: string;
}

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const convertToCard = (data: DynamoDBResponse[]): Project[] => {
    return data.map((item) => ({
      _id: { $oid: item.ID.S },
      title: item.title.S,
      image: item.image.S,
      technologies: item.technologies.SS,
      github_link: item.github_link.S,
      link: item.link.S,
      libraries: item.libraries.SS,
      backend: item.backend.SS,
    }));
  };

  const fetchProjects = async () => {
    const response = await fetch(
      "https://16glg8r950.execute-api.us-east-1.amazonaws.com/production/projects",
      {
        headers: {
          "x-api-key": process.env.API_KEY,
        },
      }
    );

    console.log(response);

    const projectsResponse = (await response.json()) as ApiGatewayResponse;
    const projectsArray = convertToCard(JSON.parse(projectsResponse.body));
    return projectsArray;
  };

  useEffect(() => {
    const responseFunc = async () => {
      const response = await fetchProjects();
      setProjects(response);
    };
    responseFunc();
  }, []);

  return { projects };
};

export default useProjects;
