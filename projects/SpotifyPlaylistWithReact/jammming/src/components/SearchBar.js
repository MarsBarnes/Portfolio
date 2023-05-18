import React from "react";
import { useState } from "react";
//USED THIS WEBSITE TO HELP BUILD THE PRESSENTERTOSEARCH COMPONENT  https://codingbeautydev.com/blog/react-get-input-value-on-enter/

const PressEnterToSearch = () => {
  const [message, setMessage] = useState("");

  const [updated, setUpdated] = useState("");

  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleSearchButtonClick = () => {
    setSearchButtonClicked(true);
    setUpdated(message);
    setSearchButtonClicked(false); // Reset the search button state after update
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || searchButtonClicked) {
      // Get input value
      setUpdated(message);
    }
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Search"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchButtonClick}>Search</button>
      {console.log(
        "Henlo. It's me. You found the search bar. My updated message is" +
          updated
      )}
      {/* <h2>Message: {message}</h2> */}
      {/* <h2>Updated: {updated}</h2> */}
      <h2>You Searched For: {updated}</h2>
    </div>
  );
};

export { PressEnterToSearch };
