import React, { useState, useEffect } from "react";
import { showsContext } from "./store";

function ShowFetcher(props) {
  const [shows, setShows] = useState([]);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchShows = async () => {
    setIsLoading(true);
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
          posterLarge: show.image.original,
          description: show.summary,
        };
      });
      setShows(transformedShows);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  const contextInfo = { shows, setShows, filter, setFilter, error, isLoading };

  return (
    <showsContext.Provider value={contextInfo}>
      {props.children}
    </showsContext.Provider>
  );
}

export default ShowFetcher;
