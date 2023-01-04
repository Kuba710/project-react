import React from 'react'
import './Register.css'
export default function Register() {
  return (
    <div className='login--container'>
    <div className='login--form'>
        Login: <input type="text"></input>
        Email: <input type="text"></input>
        Hasło: <input type="text"></input>
        Powtórz Hasło: <input type="text"></input>
        <button>Zarejestruj konto</button>
    </div>
</div>
  )
}