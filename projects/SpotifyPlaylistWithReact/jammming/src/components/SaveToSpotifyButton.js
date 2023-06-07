import React from "react";
import useUserId from "../hooks/useUserId";

function SaveToSpotifyButton() {
  const { error, fetching, json } = useUserId();
  console.log(json, fetching, error);

  function handleClick() {
    console.log("butts");
    
  }

  return (
    <button
      type="button"
      className="saveButton btn btn-outline-success my-2 my-sm-0"
      onClick={handleClick}
    >
      Save To Spotify
    </button>
  );
};


export default SaveToSpotifyButton;
