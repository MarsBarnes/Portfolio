import logo from "./logo.svg";
import "./App.css";
import {SearchBar} from "./components/SearchBar";
import {PressEnterToSearch} from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <nav>
        <PressEnterToSearch />
      </nav>
    </div>
  );
}

export default App;
