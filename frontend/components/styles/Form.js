import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 2.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    height: 6rem;
    padding: 0.5rem;
    font-size: 2rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.blue};
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    background: blue;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 1.5rem 2.2rem;
    border-radius: 6px;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
      background-image: linear-gradient(
        to right,
        #00d8ff 0%,
        #ff6600 50%,
        #2164f4 100%
      );
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
