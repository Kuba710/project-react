import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <AiOutlineFacebook size="3em" />
        <AiOutlineInstagram size="3em" />
      </div>
      <div className="footer__content">
        Ankara.com &copy;	Jakub Rodak
      </div>
    </footer>
  );
}

export default Footer;
