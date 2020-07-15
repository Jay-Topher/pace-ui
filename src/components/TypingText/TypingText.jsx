import Typical from "react-typical";
import React from "react";
import styled from "styled-components";
import data from "../../assets/data.json";

const TypingText = () => {
  return (
    <Div>
      <Typical
        steps={mappedTitle(data.frontPage)}
        loop={Infinity}
        wrapper="h1"
      />
      <P>{data.frontPage[0].body}</P>
    </Div>
  );
};

const mappedTitle = (data) => {
  const result = [];
  data.map((item) => {
    return result.push(item.title, 5000);
  });
  return result;
};

const P = styled.p`
  font-size: 20px;
`;

const Div = styled.div`
  max-width: 45%;

  @media only screen and (max-width: 600px) {
    max-width: 90%;
    margin: 0 auto;
  }
`

export default TypingText;
