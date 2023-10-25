import styled from "styled-components";

export const NewRowFormContainer = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  input[type="text"].error {
    border-color: red;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
