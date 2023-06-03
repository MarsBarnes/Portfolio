import React from "react";

const Playlist = ({ tracks }) => {
  console.log({tracks})

    const resultList = tracks.map((item) => (
      <tr key={item.id}>
        <td>{item.trackName}</td>
        <td>{item.artistName}</td>
        <td>{item.albumName}</td>
        <td>{item.id}</td>
      </tr>
    ));

  return (
    <div>
      <h1>Playlist</h1>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>{resultList}</tbody>
      </table>
    </div>
  );
};

export default Playlist;
