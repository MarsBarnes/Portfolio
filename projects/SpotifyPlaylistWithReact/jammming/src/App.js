import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
// import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";
import Track from "./components/Track";
import SaveToSpotifyButton from "./components/SaveToSpotifyButton";

function App() {
  return (
    <div className="App">
      <nav>
        <SearchBar />
        {/* <SearchResults /> */}
      </nav>
      <main>
        <Playlist />
        <Tracklist />
        <Track />
        <SaveToSpotifyButton />
      </main>
    </div>
  );
}

export default App;
