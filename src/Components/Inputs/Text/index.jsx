import React, {
  useRef,
  useEffect,
  forwardRef,
  useState,
  useImperativeHandle,
} from "react";
import { useController } from "react-hook-form";

import Validations from "../inputValidations";
import * as S from "./styles";

const Text = forwardRef(function Component(
  {
    control,
    name,
    label = "",
    rules = {},
    setValue,
    defaultValue = "",
    disabled = false,
    setInputValue,
    type = "text",
  },
  refComponent
) {
  const inputRef = useRef();
  const [valueFoward, setValuaForward] = useState("");
  const {
    field: { ref, value, ...inputProps },
    fieldState: { isValid, error },
  } = useController({
    name,
    control,
    rules: { ...rules },
    defaultValue: defaultValue,
  });

  useImperativeHandle(refComponent, () => ({
    updateValue(value) {
      if (inputRef.current) {
        setValuaForward(value);
        const input = inputRef.current;
        input.value = value;
      }
    },
  }));

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

  const eraseInput = () => {
    setValue(name, "");
    const input = inputRef.current;
    input.value = "";
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, setValue, name]);

  useEffect(() => {
    if (valueFoward) {
      setValue(name, valueFoward);
    }
  }, [valueFoward, setValue, name]);

  useEffect(() => {
    if (setInputValue && value) {
      const input = inputRef.current;
      input.value = setInputValue;
    }
  }, [setInputValue, inputRef, value]);

  return (
    <S.FormGroup
      data-error={error ? handleError(error) : null}
      disabled={disabled}
    >
      <S.Label htmlFor={name} className={focused || value ? "activeLabel" : ""}>
        {label}
      </S.Label>
      <S.Input
        {...inputProps}
        inputRef={ref}
        ref={inputRef}
        id={name}
        defaultValue={defaultValue}
        disabled={disabled || rules.disabled}
        onFocus={() => handleInputFocus()}
        onBlur={() => handleInputBlur()}
        type={type}
      />
      {!rules.disabled ? (
        <S.ClearIcon
          onClick={eraseInput}
          className={value ? "active" : ""}
          disabled={disabled}
        />
      ) : null}
      {error ? <S.ErrorIcon /> : <></>}
      {isValid ? <S.SuccessIcon /> : <></>}
    </S.FormGroup>
  );
});

export default Text;
