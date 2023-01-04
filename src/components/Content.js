import React from "react";
import { useNavigate } from "react-router-dom";

import "./Content.css";

function Content() {
  const navigate = useNavigate();
  function changeLink()
  {
    
    navigate('/movie')
  }
  return (
    <div className="content" onClick={changeLink}>
      <div className="content__img">
        <img
          src="https://m.media-amazon.com/images/I/41CDZy4gDvL._AC_SY780_.jpg"
          alt="American Psycho"
        />
      </div>
      <div className="content__description">
        <h1>American Psycho</h1>
        <h4>
          American Psycho <span>2000</span>
        </h4>
        <div className="content__rating">
          <img
            src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
            alt="star"
          />
          <h2>7.3</h2>
          <p>Liczba ocen: 182 217</p>
        </div>
        <div className="content__description__below">
          <p>
            gatunek <span>Dramat, Thriller</span>
          </p>
          <p>
            Reżyser <span>Mary Harron</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
