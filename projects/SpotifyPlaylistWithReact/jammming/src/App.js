import React from "react";
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";
import Track from "./components/Track";
import SaveToSpotifyButton from "./components/SaveToSpotifyButton";
import SignInButton from "./util/getToken";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tracks, setTracks] = useState([]);

  const addToPlaylist = (track) => {
    console.log("addToPlaylist", track);
    // tracks.push(track);
    setTracks((prevTracks) => [...prevTracks, track]);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <h3 className="p-2 flex-grow-1 bd-highlight leftaligntext">Jammming</h3>
        <SignInButton />
        <SaveToSpotifyButton />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </nav>
      <main className="main">
        <div className="left">
          <Tracklist searchQuery={searchQuery} addToPlaylist={addToPlaylist} />
        </div>
        <div className="right">
          <Playlist tracks={tracks} />
        </div>
      </main>
      <footer>{/* <Track /> */}</footer>
    </div>
  );
}

export default App;
