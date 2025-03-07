import React from 'react';
import { Link } from 'react-router-dom';

const OrderPage = () => {
    return (
        <div>
            <h1>OrderPage</h1>
            <button><Link to="/">Déconnexion</Link></button>
        </div>
    );
}

export default OrderPage;
