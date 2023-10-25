import styled from "styled-components";

export const GreetingContainer = styled.div`
  padding: 32px;
  background-color: lightgray;
`;

export const WelcomeMessage = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const LogoutButton = styled.button`
  background-color: #ff5733;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff331a;
  }
`;

export const LoginButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
