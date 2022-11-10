import React from "react";
import Header from "../../Components/Header";
import SiderBar from "../../Components/SideBar";
import * as S from "./styles";

import Done from "../../images/Done.png";

const Dashboard = () => {
  return (
    <S.Container>
      <Header />

      <S.Columns>
        <SiderBar />
        <S.Content>
          <S.Description>Parabéns! Você acessou o sistema</S.Description>
          <S.Image src={Done} alt="imagem" />
        </S.Content>
      </S.Columns>
    </S.Container>
  );
};

export default Dashboard;
