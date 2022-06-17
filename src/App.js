import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import getMovies from "./apis/getMovies";
import MovieList from "./components/MovieList/MovieList";
import React from "react";

function App() {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    onSearchSubmit("COCO");
  }, []);

  const onSearchSubmit = async (input) => {
    try {
      const response = await getMovies(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${input}`
      );

      if (response.Error) {
        alert(`${response.Error} Please try again!`);
        console.log(response.Error, "fetch data failed");
        return;
      }
      setMovies(response.Search);
    } catch (e) {
      console.log(e.response, "fetch data error");
    }
  };

  return (
    <div className='app'>
      <div id='header'>
        <SearchBar
          placeholder='Movie title...'
          btnText='Search Movie'
          onFormSubmit={onSearchSubmit}
        />
      </div>

      <div id='result-container'>
        <MovieList movies={movies}></MovieList>
      </div>
    </div>
  );
}

export default App;
