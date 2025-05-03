import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../../reusable-ui/Input";
import Button from "../../reusable-ui/Button";
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import { theme } from "../../../theme";

const LoginForm = () => {
    //state
    const [ username, setUsername] = useState("")
    const navigate = useNavigate()
    
    //comportements
    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`order/${username}`)
        setUsername("")
    }
     
    //d'affichage
    return ( 
        <LoginFormStyled onSubmit={handleSubmit}>
            <div>
               <h1>Bienvenue chez nous !</h1><hr/>
               <h2>Connectez-vous</h2>
            </div>
            <div>
               <Input
                  placeholder={"Entrez votre prénom"}
                  value={username} 
                  onChange={handleChange} 
                  Icon={<BsPersonCircle />} 
                  required 
                  className="input-login"
                  version="normal"
               />
               <Button label={"Accéder à mon espace"} Icon={<IoChevronForward />} />
            </div>
        </LoginFormStyled>
     );
}
 
export default LoginForm;

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;
  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }
  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }
  .input-login {
    margin: 18px 0; // must be handled in Parent
  }
`;