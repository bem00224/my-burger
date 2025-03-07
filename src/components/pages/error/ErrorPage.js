import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <h1>ErrorPage</h1>
      <button><Link to="/">Retourner vers la page d'accueil</Link></button>
    </div>
  )
}

export default ErrorPage
