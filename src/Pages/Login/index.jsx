import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import InputText from "../../Components/Inputs/Text/index";
import Button from "../../Components/Button";
import * as S from "./styles";
import image from "../../images/primeiratela.png";

const Login = () => {
  const navigate = useNavigate();

  const { handleSubmit, control, setValue } = useForm();

  const onSubmit = () => {
    navigate("/dashboard");
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Title>Fazer login</S.Title>
          <InputText
            name="email"
            label="Email"
            control={control}
            setValue={setValue}
            rules={{
              required: true,
            }}
          />
          <InputText
            name="password"
            label="Senha"
            control={control}
            setValue={setValue}
            rules={{
              required: true,
            }}
          />
          <S.Linker to="#">Esqueceu sua senha?</S.Linker>

          <Button>Logar</Button>
          <Button type="button" outline onClick={() => navigate("/register")}>
            Cadastrar-se
          </Button>
        </form>
      </S.ColumnRight>
    </S.Container>
  );
};

export default Login;
