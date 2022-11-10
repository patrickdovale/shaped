import React from "react";
import Button from "../../Components/Button";
import * as S from "./styles";
import image from "../../images/primeiratela.png";

const Login = () => {
  return (
    <S.Container>
      <S.ColumnLeft>
        <S.Image src={image} alt="imagem" />
        <S.Description>
          Utilizamos inteligência artificial para realizar a avaliação corporal
          por meio de fotos
        </S.Description>
      </S.ColumnLeft>
      <S.ColumnRight>
        <S.Form>
          <S.Title>Fazer login</S.Title>
          <input type="text" />
          <input type="text" />
          <S.Linker to="#">Esqueceu sua senha?</S.Linker>

          <Button>Logar</Button>
          <Button outline>Cadastrar-se</Button>
        </S.Form>
      </S.ColumnRight>
    </S.Container>
  );
};

export default Login;
