import { useEffect, useState } from "react";
import { Card } from "../model/card";

const useTechnologies = () => {
  const [technologies, setTechnologies] = useState<Card[]>([]);

  const fetchTechnologies = async () => {
    const response = await fetch(
      "https://16glg8r950.execute-api.us-east-1.amazonaws.com/production/skills",
      {
        headers: {
          "x-api-key": process.env.API_KEY,
        },
      }
    );
    const technologies = (await response.json()) as Card[];
    console.log(technologies)
    return [];
  };

  useEffect(() => {
    const responseFunc = async () => {
      const response = await fetchTechnologies();
      setTechnologies(response);
    };
    responseFunc();
  }, []);

  return { technologies };
};
export default useTechnologies;
