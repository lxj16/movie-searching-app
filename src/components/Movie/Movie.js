import React from "react";
import "./Movie.css";
import posterPlaceholder from "./film-poster-placeholder.png";

function Movie(props) {
  const Movie = props.movie;
  const [added, setAdded] = React.useState(false);
  const hasPoster = (Movie) => Movie.Poster && Movie.Poster !== "N/A";

  const onAddFavClick = (e) => {
    alert(`${Movie.Title} ${added ? "removed" : "added"} to your favorite!`);
    setAdded(!added);
  };
  return (
    <div className='movie-container'>
      <img
        src={hasPoster(Movie) ? Movie.Poster : posterPlaceholder}
        alt='poster'
      />
      <div className='movie-info-container'>
        <div className='movie-info'>
          <h4 className='movie-title'>{Movie.Title}</h4>
          <p className='movie-year'>{Movie.Year}</p>
        </div>

        <div className='fav-button-container'>
          <button className='fav-button' onClick={onAddFavClick}>
            {added ? "Remove from favorite" : "Add to favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
