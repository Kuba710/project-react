import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
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
        "https://at.usermd.net/api/user/create",
        {
          name: formData.login,
          email: formData.email,
          password: formData.password,
        }
      );

      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login--container">
      <div className="login--form">
        Login: <input type="text" name="login" onChange={handleChange}></input>
        Email: <input type="text" name="email" onChange={handleChange}></input>
        Hasło:{" "}
        <input type="password" name="password" onChange={handleChange}></input>
        Powtórz Hasło:{" "}
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>Zarejestruj konto</button>
      </div>
    </div>
  );
}