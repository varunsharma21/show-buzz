import React, { useState, useEffect } from "react";
import { showsContext } from "./store";

function ShowFetcher(props) {
  const [shows, setShows] = useState([]);
  const [filter, setFilter] = useState("");

  const ShowFetcherHandler = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/shows");
      if (!response.ok) {
        throw Error("Something went wrong :/");
      }
      const data = await response.json();
      const transformedShows = data.map((show) => {
        return {
          id: show.id,
          name: show.name,
          rating: show.rating.average,
          genres: show.genres,
          poster: show.image.medium,
          description: show.summary,
        };
      });
      setShows(transformedShows);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    ShowFetcherHandler();
  }, []);

  const contextInfo = { shows, setShows, filter, setFilter };

  return (
    <showsContext.Provider value={contextInfo}>
      {props.children}
    </showsContext.Provider>
  );
}

export default ShowFetcher;
