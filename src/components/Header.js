import React, { useEffect, useState } from "react";

import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import "./Header.css";

function Header({setSearchText}) {

  const navigate = useNavigate();
  const [token , setToken] = useState(null);
  useEffect (() =>{
    const token = localStorage.getItem('token')
    setToken(token)
  },[])
  function logout(){
    localStorage.removeItem('token')
    window.location.reload()
  }
  function gotologin()
  {
    
    navigate('/login')
  }
  return (
    <>
      <header className="header">
        <div className="right">
          <img
            className="header__logo"
            src="https://i.imgur.com/ogIo72b.png "
            alt="FilmWebLogo"
            onClick={()=>{navigate('/')}}
          />
          <div className="header__search">
            <form>
              <input onChange={e=>setSearchText(e.target.value)}
                type="text"
                placeholder="Szukaj filmów, seriali, gier itd."
              />
            </form>
          </div>
          <Link to="/AddMovie">Dodaj film</Link>
        </div>
        <div className="header__login">
          {!token && <h3 onClick={gotologin}>Zaloguj się</h3>}
          <FiLogIn color="gray" size="1.5em" onClick={logout} />
        </div>
      </header>
    </>
  );
}

export default Header;
