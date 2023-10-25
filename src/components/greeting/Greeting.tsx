import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../redux/store";
import { logOut } from "../../redux/auth/authSlice";

import {
  WelcomeMessage,
  LoginButton,
  LogoutButton,
  GreetingContainer,
} from "./Greeting.styled";

const Greeting: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <GreetingContainer>
      {isAuthenticated ? (
        <div>
          <WelcomeMessage>Вітаємо, {user?.username}!</WelcomeMessage>
          <LogoutButton onClick={handleLogout}>Вийти</LogoutButton>
        </div>
      ) : (
        <LoginButton onClick={() => navigate("/login")}>
          Будь ласка, увійдіть.
        </LoginButton>
      )}
    </GreetingContainer>
  );
};

export default Greeting;
