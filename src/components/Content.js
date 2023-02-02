import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Content.css";

function Content(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`https://at.usermd.net/api/movies/${props.data.id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props])
  const navigate = useNavigate();
  function changeLink()
  {
    
    navigate(`/movie/${props.data.id}`)
    
  }
  return (
    <div className="content" onClick={changeLink}>
      <div className="content__img">
        <img
          src={data.image}
          alt="American Psycho"
        />
      </div>
      <div className="content__description">
        <h1>{data.title}</h1>
        <h4>
        <span>2000</span>
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
