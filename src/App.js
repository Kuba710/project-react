import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Movie from "./components/Movie";
import AddMovie from "./components/AddMovie";
import axios from "axios";




function App() {
  const [searchText, setSearchText ] = useState("");
  const [data, setData] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      

        axios.get('https://at.usermd.net/api/movies')
        .then(res => {
            setData(res.data);
            setMovies(res.data);
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

function searchMovies(){
  const foundMovies = [];
      data.filter(movie => {
          if(movie.title.toLowerCase().includes(searchText.toLowerCase())) {
              foundMovies.push(movie);
          }
      })
      setMovies(foundMovies);
}
useEffect (()=>{searchMovies()},[searchText])
  return (
    
    <>
    <Routes>
      <Route path="/" element={
        <React.Fragment>
      <Header setSearchText = {setSearchText}/>
      <div className="movieWrapper">
        {movies.map((movie,i)=>{
          return(
            <div key={i}>
              <Content data={movie}/>
            </div>
          )
        })}
        </div>
      <Footer />
      </React.Fragment>
        }>

      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/movie/:id" element={<Movie />}></Route>
      <Route path="/AddMovie" element={<AddMovie/>}></Route>
      </Routes>
    </>
  );
}
export default App;