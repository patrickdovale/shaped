import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 6px;
  padding: 13px 42px;
  cursor: pointer;
  background-color: ${(props) => (props.outline ? "#fff" : "#3E7D89")};
  border: ${(props) => (props.outline ? "2px solid #3E7D89" : "none")};
  color: ${(props) => (props.outline ? "#3E7D89" : "#fff")};
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  .outline {
    outline: 1px solid #3e7d89;
  }
  margin-bottom: 16px;
`;
