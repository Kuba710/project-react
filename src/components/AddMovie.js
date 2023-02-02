import React, { useState } from "react";
import axios from "axios";
import "./AddMovie.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://at.usermd.net/api/movies", {
        title: formData.title,
        image: formData.image,
        content: formData.content,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="login--container">
        <div className="login--form">
          Podaj nazwę filmu:{" "}
          <input type="text" name="title" onChange={handleChange}></input>
          Podaj opis filmu:
          <input type="text" name="content" onChange={handleChange}></input>
          Podaj link do plakatu:
          <input type="text" name="image" onChange={handleChange}></input>
          <button onClick={handleSubmit}>Dodaj Film</button>
        </div>
      </div>
    </>
  );
}
