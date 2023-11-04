import React, { Children, createContext, useEffect, useState } from "react";

export const showsContext = createContext();

const ShowFetcher = () => {
  const [shows, setShows] = useState([]);

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

  useEffect(() => {
    console.log(shows);
  });

  return (
    <showsContext.Provider value={shows}>{Children}</showsContext.Provider>
  );
};

export default ShowFetcher;
