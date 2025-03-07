const LoginPage = () => {
    return ( 
        <div>
            <h1>Bienvenue chez nous !</h1><br/><br/>
            <h3>Connectez vous</h3>
            <form>
                <input type="text" placeholder="Entrez votre prénom..." required />
                <button>Accéder à votre espace</button>
            </form>
        </div>
     );
}
 
export default LoginPage;