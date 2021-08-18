//NPM
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

//Styles
import {
  Appis,
  TitleWrapper,
  TopicsWrapper,
  SubTitleWrapper,
  BoldWrapper,
} from "./styles";

//Components
import { Topics } from "../../components/Topics/Topics";

//Utils
import { firstCapitalLetter } from "../../utils/utils";
import { GET_TOPICS } from "../../graphql/queries";

export const App = () => {
  const [topic, setTopic] = useState("react");
  const [stargazerCount, setStargazerCount] = useState(0);

  const { loading, error, data } = useQuery(GET_TOPICS(topic));

  const information = { loading, error, data };

  useEffect(
    () => setStargazerCount(data?.topic?.stargazerCount),
    [data?.topic?.stargazerCount]
  );

  return (
    <Appis>
      <div className="app__title-wrapper">
        <TitleWrapper>
          Selected topic: <BoldWrapper>{firstCapitalLetter(topic)}</BoldWrapper>
        </TitleWrapper>
        <div>
          <SubTitleWrapper>
            <BoldWrapper>{firstCapitalLetter(topic)}</BoldWrapper> stagazers:{" "}
            <BoldWrapper>{stargazerCount}</BoldWrapper>
          </SubTitleWrapper>
        </div>
        <TopicsWrapper>
          <h3>Select a related topic:</h3>
          <Topics setTopic={setTopic} information={information} />
        </TopicsWrapper>
      </div>
    </Appis>
  );
};
