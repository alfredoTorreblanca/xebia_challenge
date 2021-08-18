import styled from "styled-components";

const TopicElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid blue;
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
`;

export { TopicElementContainer };
