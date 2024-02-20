import { useEffect, useState } from "react";
import { Project } from "../model/project";

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    const response = await fetch("/api/projects");
    const projects = (await response.json()) as Project[];
    return projects;
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

