//NPM
import React from "react";

//Components
import { TopicElement } from "../TopicsElement/TopicElement";

export const Topics = ({ information, setTopic }) => {
  const { loading, error, data } = information;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data?.topic?.relatedTopics?.map(({ name }) => {
    return <TopicElement name={name} setTopic={setTopic} key={name} />;
  });
};
