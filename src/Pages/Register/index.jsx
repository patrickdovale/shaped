import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Input from "../../Components/Inputs/Text";
import Select from "../../Components/Inputs/Select";
import Button from "../../Components/Button";
import * as S from "./styles";
import image from "../../images/primeiratela.png";
import { validateCPF, validateEmail } from "../../Util/validateValues";

const Register = () => {
  const navigate = useNavigate();

  const { handleSubmit, control, setValue } = useForm();

  const onSubmit = (data) => {
    window.alert("Usuário ", data.name, " cadastro com sucesso!");
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
          <S.Title>Cadastro</S.Title>
          <Input
            name="name"
            label="Nome"
            control={control}
            setValue={setValue}
            rules={{
              required: true,
            }}
          />
          <Input
            name="email"
            label="E-mail"
            control={control}
            setValue={setValue}
            rules={{
              required: true,
              validate: validateEmail,
            }}
          />
          <S.FormColumn>
            <Input
              name="cpf"
              label="CPF"
              control={control}
              setValue={setValue}
              rules={{
                required: true,
                validate: validateCPF,
              }}
            />
            <Select
              name="profession"
              label="Profissão"
              control={control}
              setValue={setValue}
              type="select"
              rules={{
                required: true,
              }}
            >
              <option></option>
              <option value="Nutricionista">Nutricionista</option>
              <option value="Medico">Médico</option>
            </Select>
          </S.FormColumn>
          <S.FormColumn>
            <Select
              name="counsel"
              label="Conselho"
              control={control}
              setValue={setValue}
              rules={{
                required: true,
              }}
            >
              <option></option>
              <option value="CRM-1">CRM-1</option>
              <option value="CRM-2">CRM-2</option>
              <option value="CRM-3">CRM-3</option>
              <option value="CRM-4">CRM-4</option>
            </Select>
            <Input
              name="numberRegister"
              label="Nº do Registro"
              control={control}
              setValue={setValue}
              rules={{
                required: true,
              }}
            />
          </S.FormColumn>
          <S.FormColumn>
            <Input
              name="cep"
              label="CEP"
              control={control}
              setValue={setValue}
              rules={{
                required: true,
              }}
            />
            <Input
              name="estate"
              label="estado"
              control={control}
              setValue={setValue}
              rules={{
                required: true,
              }}
            />
          </S.FormColumn>
          <S.FormColumn>
            <Input
              name="city"
              label="cidade"
              control={control}
              setValue={setValue}
              rules={{
                required: true,
              }}
            />
            <Input
              name="district"
              label="Bairro"
              control={control}
              setValue={setValue}
              rules={{
                required: true,
              }}
            />
          </S.FormColumn>
          <Input
            name="street"
            label="Rua"
            control={control}
            setValue={setValue}
            rules={{
              required: true,
            }}
          />

          <S.FormColumn>
            <Input
              name="number"
              label="Número"
              control={control}
              setValue={setValue}
              rules={{
                required: true,
              }}
            />
            <Input
              name="complement"
              label="complemento"
              control={control}
              setValue={setValue}
              rules={{
                required: false,
              }}
            />
          </S.FormColumn>
          <S.FormColumn>
            <Input
              name="password"
              label="senha"
              control={control}
              setValue={setValue}
              type="password"
              rules={{
                required: true,
              }}
            />
            <Input
              name="passwordConfirm"
              label="Repitir Senha"
              control={control}
              setValue={setValue}
              type="password"
              rules={{
                required: true,
              }}
            />
          </S.FormColumn>
          <Button>Cadastrar</Button>
          <Button type="button" outline onClick={() => navigate("/login")}>
            Cancelar
          </Button>
        </form>
      </S.ColumnRight>
    </S.Container>
  );
};

export default Register;
