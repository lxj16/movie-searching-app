import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import getMovies from "./apis/OMDB";
import MovieList from "./components/MovieList/MovieList";
import React from "react";

function App() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    onSearchSubmit("Iron man");
  }, []);

  const onSearchSubmit = async (input) => {
    try {
      const response = await getMovies(
        `http://www.omdbapi.com/?apikey=e4d5cb13&s=${input}`
      );
      console.log(response, input);
      if (response.Error) {
        alert(`${response.Error} Please try again!`);
        return;
      }
      setMovies(response.Search);
    } catch (e) {
      console.log(e, "fetch data error");
    }
  };
  // const movie = getMovies("http://www.omdbapi.com/?apikey=e4d5cb13&t=iron-man");

  return (
    <div className='app'>
      <div id='header'>
        <SearchBar onFormSubmit={onSearchSubmit} />
      </div>

      <div id='result-container'>
        <MovieList movies={movies}></MovieList>
      </div>
    </div>
  );
}

export default App;
