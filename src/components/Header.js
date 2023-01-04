import React from "react";

import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import "./Header.css";

function Header() {
  const navigate = useNavigate();
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
            src="https://i.imgur.com/ogIo72b.png"
            alt="FilmWebLogo"
          />
          <div className="header__search">
            <form>
              <input
                type="text"
                placeholder="Szukaj filmów, seriali, gier itd."
              />
            </form>
          </div>
        </div>
        <div className="header__login">
          <h3 onClick={gotologin}>Zaloguj się</h3>

          <FiLogIn color="gray" size="1.5em" />
        </div>
      </header>
    </>
  );
}

export default Header;
