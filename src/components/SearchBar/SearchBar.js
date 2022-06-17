import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [input, setInput] = React.useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    props.onFormSubmit(input);

    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className='search-bar'>
          <input
            className='search-input'
            type='text'
            name='movieSearch'
            placeholder='Search'
            value={input}
            onChange={onChangeHandler}
          />
          <button className='search-btn'>Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
