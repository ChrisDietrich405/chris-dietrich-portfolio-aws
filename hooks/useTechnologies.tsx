import { useEffect, useState } from "react";
import { Card } from "../model/card";
import { DynamoDBResponse } from "../model/card";

interface ApiGatewayResponse {
  statusCode: string;
  body: string;
}

const useTechnologies = () => {
  const [technologies, setTechnologies] = useState<Card[]>([]);

  const convertToCard = (data: DynamoDBResponse[]): Card[] => {
    return data.map((item) => ({
      _id: { $oid: item.ID.S },
      title: item.title.S,
      items: item.items.L.map((subItem) => ({
        name: subItem.M.name.S,
        icon: subItem.M.icon.S,
      })),
    }));
  };

  const fetchTechnologies = async () => {
    const response = await fetch(
      "https://16glg8r950.execute-api.us-east-1.amazonaws.com/production/skills",
      {
        headers: {
          "x-api-key": process.env.API_KEY,
        },
      }
    );

    const technologies = (await response.json()) as ApiGatewayResponse;
    const cards = convertToCard(JSON.parse(technologies.body));
    return cards;
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
