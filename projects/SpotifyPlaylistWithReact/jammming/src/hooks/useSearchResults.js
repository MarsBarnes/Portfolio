import React from "react";
import { findAccessToken } from "../util/getToken";

export const useSearchResults = (searchQuery) => {
  const [fetching, setFetching] = React.useState(false);
  const [json, setJson] = React.useState();
  const [error, setError] = React.useState();
  const token = findAccessToken();

  React.useEffect(() => {
    setFetching(true);
    setError();
    setJson();
    fetch(
      `https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=5`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Replace with your actual access token
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          setError(response.status);
          setFetching(false);
        } else {
          response.json().then((json) => {
            setJson(json);
            setFetching(false);
          });
        }
      })
      .catch((e) => {
        setJson();
        setFetching(false);
        setError(e.message);
      });
  }, [searchQuery, token]);

  return { json, fetching, error };
};
