import { gql } from "@apollo/client";

export const GET_TOPICS = (topic) => gql`
    query {
      topic(name: "${topic}") {
        name
        stargazerCount
        relatedTopics(first: 10) {
          name
          stargazerCount
        }
      }
    }
  `;
