import React from "react";
import styled from "styled-components";
import Checklist from "../Checklist/CheckList";

const LandingImage = () => {
  const laptopImage =
    "https://res.cloudinary.com/winter-cake/image/upload/v1594811878/pace/boy_girl_laptop_nhcwb9.png";
  const dotsImage =
    "https://res.cloudinary.com/winter-cake/image/upload/v1594813156/pace/dots_hdphje.svg";
  return (
    <Div>
      <Wrapper>
        <Img src={laptopImage} alt="boy girl laptop" />
      </Wrapper>
      <Dots src={dotsImage} alt="dots" />
      <Checklist />
    </Div>
  );
};

const Div = styled.div`
  max-width: 50%;
  margin-left: 15px;
  position: relative;

  @media only screen and (max-width: 600px) {
    max-width: 90%;
    margin: 30px auto;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;

const Dots = styled.img`
  position: absolute;
  top: -47px;
  right: -49px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export default LandingImage;
