import styled from "styled-components";

const LinkButton = styled.button`
  text-decoration: none;
  background-color: #12278c;
  border: none;
  color: #fff;
  padding: 15px 25px;
  border-radius: 5px;
  font-size: ${(props) => (props.small ? "11px" : null)};
`;

export default LinkButton;
