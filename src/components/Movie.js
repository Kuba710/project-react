import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Content.css";
import Header from "./Header";

function Movie() {
  const navigate=useNavigate();
  const {id}=useParams();
  const [data, setData] = useState({});
  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
    axios.get(`https://at.usermd.net/api/movies/${id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  const removeMovie = () => {
    axios.delete(`https://at.usermd.net/api/movie/${data.id}`)
    .then(response => {
    console.log(response.status);
    navigate('/');
    })
    .catch(error => {
    console.log(error);
    });
}
  return (
    <>
    <Header/>
    <div className="content">
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
            Opis <span>{data.content}</span>
          </p>
          {token && <button onClick={removeMovie}>Usuń Film</button>}
        </div>
      </div>
    </div>
    </>
  );
}

export default Movie;
