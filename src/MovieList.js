import React from "react";
import "./MovieList.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function MovieList({ movies }) {
  return (
    <div className="movieList">
      <div className="movieList__posters">
        {movies.map((movie) => {
          return (
            <div>
              <img
                key={movie.id}
                className="movieList__poster"
                src={`${base_url}${
                  true ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
              />
              <p>{movie.release_date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
