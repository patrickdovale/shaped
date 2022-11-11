import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #ffffff;
`;

export const Image = styled.img`
  margin-bottom: 10px;
`;

export const Description = styled.span`
  font-weight: 700;
  color: #424a52;
  font-size: 27px;
  line-height: 36px;
  text-align: center;
  width: 570px;
`;

export const ColumnRight = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
  background-color: #e4ebee;

  form {
    display: flex;
    flex-direction: column;
    width: 405px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #424a52;
  margin-bottom: 64px;
`;

export const Linker = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #3e7d89;
  margin-bottom: 16px;

  :hover {
    text-decoration: underline;
  }
`;
