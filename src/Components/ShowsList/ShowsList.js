import React, { useContext, useState, useEffect } from "react";
import { showsContext } from "./../../store";
import ShowCard from "./ShowCard";
import styles from "./ShowsList.module.css";

const ShowsList = () => {
  const ctx = useContext(showsContext);
  const { shows, filter } = ctx;
  const filteredShows = shows.filter((show) => show.genres.includes(filter));

  const [visibleShows, setVisibleShows] = useState(12);
  console.log(shows.length);

  useEffect(() => {
    const onScroll = () => {
      if (
        // It is working only if I subtract some pixels(-50 here) otherwise it is not able to recognise that scroll bar
        // has touched the bottom. MAYBE.
        window.innerHeight + window.scrollY >=
          window.document.body.offsetHeight - 50 &&
        visibleShows < shows.length
      ) {
        console.log("Scroll event triggered!");
        setVisibleShows((prev) => prev + 12);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [visibleShows, shows]);

  return (
    <div className={styles.container}>
      {filter === "" &&
        shows
          .slice(0, visibleShows)
          .map((show) => (
            <ShowCard
              key={show.id}
              name={show.name}
              rating={show.rating}
              poster={show.poster}
            />
          ))}
      {filter !== "" &&
        filteredShows
          .slice(0, visibleShows)
          .map((show) => (
            <ShowCard
              key={show.id}
              name={show.name}
              rating={show.rating}
              poster={show.poster}
            />
          ))}
    </div>
  );
};

export default ShowsList;
