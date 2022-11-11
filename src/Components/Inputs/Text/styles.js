import styled from "styled-components";
import { MdErrorOutline, MdClose, MdCheck } from "react-icons/md";

export const Label = styled.label`
  position: absolute;
  margin: 0 0 10px;
  color: #788089;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  transform: translate(20px, 13px) scale(1);

  transform-origin: top left;
  transition: all 0.1s ease-in-out;
`;

export const ErrorIcon = styled(MdErrorOutline)`
  position: absolute;
  right: 10px;
  bottom: 12.5px;
  width: 15px;
  height: 15px;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  *:not([fill="none"]) {
    fill: red;
  }
`;

export const SuccessIcon = styled(MdCheck)`
  position: absolute;
  right: 10px;
  bottom: 12.5px;
  width: 15px;
  height: 15px;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  *:not([fill="none"]) {
    fill: green;
  }
`;

export const ClearIcon = styled(MdClose)`
  position: absolute;
  right: 10px;
  bottom: 12.5px;
  width: 15px;
  height: 15px;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  *:not([fill="none"]) {
    fill: gray;
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }

  &[disabled] {
    pointer-events: none;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 20px;
  position: relative;
  transition: all 0.3s ease;

  button {
    outline: none;
    background: red;
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    color: #fff;
  }

  .form-remember {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    text-transform: none;
  }

  .form-recovery {
    color: red;
  }
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;

  &[data-error],
  &[data-success] {
    margin-bottom: 30px;
    ${ClearIcon} {
      right: 35px;
    }

    &::after {
      position: absolute;
      font-size: 16px;
      line-height: 1rem;
      color: gray;
      bottom: -1.5rem;
      left: 0;
      width: 100%;
      text-align: left;
    }
  }

  &[data-success] {
    input {
      border: 1px solid green;
    }

    ${SuccessIcon} {
      opacity: 1;
      visibility: visible;
    }

    &::after {
      content: attr(data-success);
      color: green;
    }
  }

  .activeLabel {
    font-size: 12px;
    transform: translate(20px, 4px) scale(0.75);
  }

  &[data-error] {
    input {
      border: 1px solid red;
    }

    ${ErrorIcon} {
      opacity: 1;
      visibility: visible;
    }

    &::after {
      content: attr(data-error);
      color: red;
    }
  }
`;

export const Input = styled.input`
  outline: none;
  display: block;
  background: #fff;
  width: 100%;
  border: 1px solid #cecfd1;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: grey;

  &::placeholder {
    color: grey;
  }

  &:focus {
    color: #3e7d89;
    border: 1px solid #3e7d89;
  }

  &:disabled {
    background-color: lightgray;
  }
`;
