import React, { useEffect, useState } from "react";
import { showsContext } from "./ShowFetcher";
import ShowsList from "./Components/ShowsList/ShowsList";
import Sidebar from "./Components/Sidebbar/Sidebar";
import LandingPage from "./Pages/Landing/LandingPage";

function App() {
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

  const contextInfo = { shows: shows };

  return (
    <showsContext.Provider value={contextInfo}>
      {/* <ShowsList /> */}
      {/* <Sidebar /> */}
      <LandingPage />
    </showsContext.Provider>
  );
}

export default App;
