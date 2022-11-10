import React from "react";
import Header from "../../Components/Header";
import SiderBar from "../../Components/SideBar";
import * as S from "./styles";

const Dashboard = () => {
  return (
    <S.Container>
      <Header />

      <S.Columns>
        <SiderBar />
        <S.Content></S.Content>
      </S.Columns>
    </S.Container>
  );
};

export default Dashboard;
