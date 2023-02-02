import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
    password: "",
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
      const response = await axios.post(
        "https://at.usermd.net/api/user/auth",
        formData
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login--container">
      <div className="login--form">
        Login: <input type="text" name="login" onChange={handleChange}></input>
        Hasło:{" "}
        <input type="password" name="password" onChange={handleChange}></input>
        <button onClick={handleSubmit}>Zaloguj</button>
        <Link to="/register">Zarejestruj się</Link>
      </div>
    </div>
  );
}