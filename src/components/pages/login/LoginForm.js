import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1><br/><br/>
            <h3>Connectez vous</h3>
            <input type="text" placeholder="Entrez votre prénom..." value={username} onChange={handleChange} required />
            <button>Accéder à votre espace</button>
        </form>
     );
}
 
export default LoginForm;