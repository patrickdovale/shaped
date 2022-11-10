import React from "react";
import * as S from "./styles";
// import image from './'

const Login = () => {
  return (
    <S.Container>
      <S.ColumnLeft>
        <S.Image alt="imagem" />
        <S.Description>
          Utilizamos inteligência artificial para realizar a avaliação corporal
          por meio de fotos
        </S.Description>
      </S.ColumnLeft>
      <S.ColumnRight>
        <S.Form>
          <S.Title>Login</S.Title>
          <input type="text" />
          <input type="text" />
          <S.Linker to="#">Esqueceu sua senha?</S.Linker>
          <button>Entrar</button>
          <button>Cadastrar</button>
        </S.Form>
      </S.ColumnRight>
    </S.Container>
  );
};

export default Login;
