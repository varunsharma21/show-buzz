import React, { useContext } from "react";
import { showsContext } from "../../ShowFetcher";
import ShowCard from "./ShowCard";
import styles from "./ShowsList.module.css";

const ShowsList = () => {
  const ctx = useContext(showsContext);

  const { shows, filter } = ctx;

  const filteredShows = shows.filter((show) => show.genres.includes(filter));

  return (
    <div className={styles.container}>
      {filter === "" &&
        shows.map((show) => (
          <ShowCard
            key={show.id}
            name={show.name}
            rating={show.rating}
            poster={show.poster}
          />
        ))}
      {filter !== "" &&
        filteredShows.map((show) => (
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
