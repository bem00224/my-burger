import React from 'react';
import { Link, useParams } from 'react-router-dom';

const OrderPage = () => {
    const { username } = useParams()
    return (
        <div>
            <h1>Bonjour {username} </h1>
            <button><Link to="/">Déconnexion</Link></button>
        </div>
    );
}

export default OrderPage;
