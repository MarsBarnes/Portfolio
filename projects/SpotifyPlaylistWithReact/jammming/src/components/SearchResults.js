//https://developer.spotify.com/documentation/web-api/tutorials/getting-started#request-an-access-token
//https://developer.spotify.com/documentation/web-api/reference/search

// import React, { useState, useEffect } from "react";

// const SearchResults = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [accessToken, setAccessToken] = useState("");

//   useEffect(() => {
//     // Fetch access token
//     fetch("https://accounts.spotify.com/api/token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: "grant_type=client_credentials&client_id=8a925bdbdc514eb3bc6c8f1223aaa83f&client_secret=979db386b5b6440ca27feeb7cd42efd4",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         const token = data.access_token;
//         setAccessToken(token);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

// useEffect(() => {
//   if (accessToken) {
//     const searchQuery = "peaches"; // Replace with your actual search query

//     // Make the API request with the access token
//     fetch(
//       `https://api.spotify.com/v1/search?q=${encodeURIComponent(
//         searchQuery
//       )}&type=album,track`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         // Update the search results state with the received data
//         setSearchResults(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }
// }, [accessToken]);

// return (
//   <div>
//     {/* Render the search results */}
//     <div>
//       {searchResults.map((result) => (
//         <div key={result.id}>
//           <h2>{result.name}</h2>
//           {/* Render other relevant information from the search results */}
//         </div>
//       ))}
//     </div>
//   </div>
//   // );
// };

// export default SearchResults;
