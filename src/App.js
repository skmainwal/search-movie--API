import "./App.css";
import Nav from "./Nav";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import MovieList from "./MovieList";

function App() {
  const Base_Url = "https://api.themoviedb.org/3";
  // const fetchUrl = `/search/movie?api_key=21c89ff8841fc7ed0c7a346c8e305ddd&query=${search}`;

  const [movies, setMovies] = useState([]);

  async function getData(input) {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=21c89ff8841fc7ed0c7a346c8e305ddd&query=${input}`
    );
    //console.log(response);
    setMovies(response.data.results);
    // return response;
  }

  return (
    <div className="App">
      <Nav getData={getData} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
