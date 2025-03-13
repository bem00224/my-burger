import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    //state
    //comportements
    //affichage
    
    return ( 
        <LoginPageStyled>
            <Logo className={"logo-login-page"}/>
            <LoginForm/>
        </LoginPageStyled>
     );
}
 
export default LoginPage;

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &::before {
    content: "";
    background: url("/images//burger-background.jpg")  rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .logo-login-page {
    transform: scale(2.5);
  }
`;