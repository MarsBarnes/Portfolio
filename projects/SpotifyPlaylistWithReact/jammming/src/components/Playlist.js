import React from "react";
import NamePlaylist from "./NamePlaylist";

const Playlist = ({ tracks, removeFromPlaylist }) => {
  console.log({ tracks });

  const resultList = tracks.map((item) => (
    <tr key={item.id}>
      <td>{item.trackName}</td>
      <td>{item.artistName}</td>
      <td>{item.albumName}</td>
      <td>{item.id}</td>
      <td>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          //need to make the removeFromPlaylist function
          onClick={() => removeFromPlaylist(item)}
        >
          Remove
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      {/* <h1>Playlist</h1> */}
      <NamePlaylist />
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>id</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{resultList}</tbody>
      </table>
    </div>
  );
};

export default Playlist;
