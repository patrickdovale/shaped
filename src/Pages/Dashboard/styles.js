import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  background-color: #9f9d9d;
`;
export const Columns = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 208px);
  margin: 26px 34px 85px;
  background-color: #fff;
  border-radius: 6px;
`;

export const Description = styled.p`
  margin-bottom: 41px;
  color: #424a52;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;
export const Image = styled.img``;
