import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login--container'>
        <div className='login--form'>
            Login: <input type="text"></input>
            Hasło: <input type="text"></input>
            <button>Zaloguj</button>
            <Link to="/register">Zarejestruj się</Link>
        </div>
    </div>
  )
}