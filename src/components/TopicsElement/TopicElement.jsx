//NPM
import React from "react";

//Styles
import { TopicElementContainer } from "./styles";

//Utils
import { firstCapitalLetter } from "../../utils/utils";

export const TopicElement = ({ name, setTopic }) => {
  const topicsName = firstCapitalLetter(name);

  return (
    <TopicElementContainer
      onClick={() => {
        setTopic(name);
      }}
    >
      <span>
        Topic's name: <b>{topicsName}</b>{" "}
      </span>
    </TopicElementContainer>
  );
};
