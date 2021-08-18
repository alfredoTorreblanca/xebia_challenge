import styled from "styled-components";

const Appis = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 100%;
`;

const TitleWrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 2rem 5rem;
`;

const TopicsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
`;

const SubTitleWrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const BoldWrapper = styled.b`
  padding: 0 0.3rem;
`;

export { Appis, TitleWrapper, TopicsWrapper, SubTitleWrapper, BoldWrapper };
