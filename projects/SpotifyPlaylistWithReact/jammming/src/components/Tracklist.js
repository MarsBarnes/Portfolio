import React from "react";
import { useSearchResults } from "../hooks/useSearchResults";

const Tracklist = ({ searchQuery }) => {
  const { error, fetching, json } = useSearchResults(searchQuery);
  console.log(json, fetching, error);

  if (error) {
    return <div>{error}</div>;
  }

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (!json) {
    return <div>no data for some reason</div>;
  }

  let list = [];

  for (const item of json.tracks.items) {
    let trackName = JSON.stringify(item.name);
    let artistName = JSON.stringify(item.artists[0].name);
    let albumName = JSON.stringify(item.album.name);
    let id = JSON.stringify(item.id);
    list.push({ trackName, artistName, albumName, id });
    // console.log(list)
  }
  const resultList = list.map((item) => (
    <tr key={item.id}>
      <td>{item.trackName}</td>
      <td>{item.artistName}</td>
      <td>{item.albumName}</td>
      <td>{item.id}</td>
      <button>Add</button>
    </tr>
  ));

  return (
    <div>
      <h1>Tracklist (searching for {searchQuery})</h1>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>{resultList};</tbody>
      </table>
    </div>
  );
};

export default Tracklist;
