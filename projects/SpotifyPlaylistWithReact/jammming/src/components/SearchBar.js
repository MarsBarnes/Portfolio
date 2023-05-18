import React from "react";
import { useState } from "react";
//USED THIS WEBSITE TO HELP BUILD THE SearchBar COMPONENT  https://codingbeautydev.com/blog/react-get-input-value-on-enter/

const SearchBar = () => {
  const [messageBeingTyped, setmessageBeingTyped] = useState("");

  const [searchQuery, setsearchQuery] = useState("");

  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleSearchButtonClick = () => {
    setSearchButtonClicked(true);
    setsearchQuery(messageBeingTyped);
    setSearchButtonClicked(false); // Reset the search button state after update
  };

  const handleChange = (event) => {
    setmessageBeingTyped(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || searchButtonClicked) {
      // Get input value
      setsearchQuery(messageBeingTyped);
    }
  };

  return (
    <div>
      <input
        type="text"
        id="messageBeingTyped"
        name="messageBeingTyped"
        placeholder="Search"
        value={messageBeingTyped}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchButtonClick}>Search</button>
      {console.log(
        "Henlo. It's me. You found the search bar. My searchQuery is " +
          searchQuery
      )}
      <h2>You Searched For: {searchQuery}</h2>
    </div>
  );
};

export default SearchBar;
