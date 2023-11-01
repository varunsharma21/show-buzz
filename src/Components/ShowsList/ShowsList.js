import React, { useContext } from "react";
import { showsContext } from "../../ShowFetcher";
import ShowCard from "./ShowCard";
import styles from "./ShowsList.module.css";

const ShowsList = () => {
  const ctx = useContext(showsContext);

  console.log(ctx);
  return (
    <div className={styles.container}>
      {ctx.shows.map((show) => (
        <ShowCard name={show.name} rating={show.rating} poster={show.poster} />
      ))}
    </div>
  );
};

export default ShowsList;
