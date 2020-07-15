import React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";
import PropTypes from 'prop-types'

const ChecklistItem = (props) => {
  const checkMark =
    "https://res.cloudinary.com/winter-cake/image/upload/v1594814340/pace/check-white_gzxq4o.svg";
  return (
    <FlexedDiv>
      <Point>
        <img src={checkMark} alt="check" />
      </Point>
      <p>{props.text}</p>
    </FlexedDiv>
  );
};

const Point = styled.span`
  background-color: ${Colors.darkBlue};
  border-radius: 100%;
  margin-right: 5px;
`;

const FlexedDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #f3f7ff;
  margin-bottom: 30px;
  padding: 13px;
  font-size: 10px;
  box-shadow: 0 2px 30px rgba(0,0,0,.1)
`

ChecklistItem.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ChecklistItem;
