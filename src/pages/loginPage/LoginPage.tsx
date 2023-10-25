import { useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/auth/operation";

import {
  LoginPageContainer,
  LoginForm,
  FormField,
  LoginButton,
} from "./LoginPage.styled";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const jsonData = JSON.stringify({
      username: formData.username,
      password: formData.password,
    });
    dispatch(logIn(jsonData));

    navigate("/table");
  };

  return (
    <LoginPageContainer>
      <h2>Login</h2>
      <LoginForm>
        <FormField>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </FormField>
        <FormField>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormField>
        <LoginButton type="button" onClick={handleLogin}>
          Login
        </LoginButton>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
