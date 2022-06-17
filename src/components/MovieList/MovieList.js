import React from "react";
import Movie from "../Movie/Movie";
import "./MovieList.css";

function MovieList(props) {
  const MovieList = props.movies;

  return (
    <div className='movie-list'>
      {MovieList.map((movie) => {
        return <Movie movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
