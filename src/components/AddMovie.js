import React from 'react'
import './AddMovie.css'
export default function AddMovie() {
  return (
    <div className='login--container'>
    <div className='login--form'>
        Podaj nazwę filmu: <input type="text"></input>
        Podaj opis filmu:<input type="text"></input>
        Podaj gatunek filmu: <input type="text"></input>
        Podaj link do plakatu:<input type="text"></input>
        Podaj reżysera filmu: <input type="text"></input>
        Podaj rok produkcji filmu:<input type="text"></input>
        <button>Dodaj Film</button>
    </div>
</div>
  )
}