import { useState } from "react";

const LoginPage = () => {
    //state
    const [ username, setUsername] = useState("")
    //comportements
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    //d'affichage
    return ( 
        <div>
            <h1>Bienvenue chez nous !</h1><br/><br/>
            <h3>Connectez vous</h3>
            <form>
                <input type="text" placeholder="Entrez votre prénom..." value={username} onChange={handleChange} required />
                <button>Accéder à votre espace</button>
            </form>
        </div>
     );
}
 
export default LoginPage;