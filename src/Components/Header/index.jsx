import React from "react";
import * as S from "./styles";

import Logo from "../../images/Logo.png";

const Header = () => {
  return (
    <S.Header>
      <S.Logo src={Logo} alt="logo" />
    </S.Header>
  );
};

export default Header;
