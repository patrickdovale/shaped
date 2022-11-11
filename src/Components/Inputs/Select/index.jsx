import React, { useState, useEffect } from "react";
import { useController } from "react-hook-form";

import Validations from "../inputValidations";
import * as S from "./styles";

export default function Select({
  control,
  name,
  label = "",
  rules = {},
  setValue,
  children,
  multiple = false,
  defaultValue = "",
}) {
  const {
    field: { value, ...inputProps },
    fieldState: { isValid, error },
  } = useController({
    name,
    control,
    rules: { ...rules },
    defaultValue: defaultValue ?? "",
  });

  const [focused, setFocused] = useState(false);

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  const handleError = (error) => {
    if (error.type === "required") return Validations.required;
    else if (error.message) return error.message;
    else return Validations[error.type] ?? "Preencha o campo corretamente";
  };

  const handleChange = (e) => {
    setValue(name, e.target.value);
  };

  useEffect(() => {
    if (defaultValue) setValue(name, defaultValue);
  }, [defaultValue, setValue, name]);

  return (
    <S.FormGroup data-error={error ? handleError(error) : null}>
      <S.Label htmlFor={name} className={focused || value ? "activeLabel" : ""}>
        {label}
      </S.Label>
      <S.Select
        {...inputProps}
        onChange={handleChange}
        id={name}
        multiple={multiple}
        disabled={rules.disabled}
        onFocus={() => handleInputFocus()}
        onBlur={() => handleInputBlur()}
      >
        {children}
      </S.Select>
      {error ? <S.ErrorIcon /> : <></>}
      {isValid ? <S.SuccessIcon /> : <></>}
    </S.FormGroup>
  );
}
