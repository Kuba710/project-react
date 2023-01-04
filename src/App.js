import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Movie from "./components/Movie";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={
        <React.Fragment>
      <Header />
      <Content />
      <Content />
      <Content />
      <Footer />
      </React.Fragment>
        }>

      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/movie" element={<Movie />}></Route>
      <Route path="/AddMovie" element={<AddMovie/>}></Route>
      </Routes>
    </>
  );
}

export default App;
