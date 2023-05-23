import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";
import Track from "./components/Track";
import SaveToSpotifyButton from "./components/SaveToSpotifyButton";
import SignInButton from "./util/getToken";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <nav>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </nav>
      <main className="main">
        <div className="left">
          <Tracklist searchQuery={searchQuery} />
        </div>
        <div className="right">
          <Playlist />
        </div>
      </main>
      <footer>
        <Track />
        <SaveToSpotifyButton />
        <SignInButton />
      </footer>
    </div>
  );
}

export default App;
