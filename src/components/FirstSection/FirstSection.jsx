import React from "react";
import styled from "styled-components";
import TypingText from "../TypingText/TypingText";
import LandingImage from "../LandingImage/LandingImage";

const FirstSection = () => {
  return (
    <section className="container">
      <FlexedDiv>
        <TypingText />
        <LandingImage />
      </FlexedDiv>
    </section>
  );
};

const FlexedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: auto;
  margin-top: 40px;
  flex-wrap: wrap;
`;

export default FirstSection;
