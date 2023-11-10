import React from "react";
import styles from "./Genres.module.css";
import Genre from "./Genre";

const Genres = ({ genres }) => {
  return (
    <div className={styles.genres}>
      {genres.map((genre) => (
        <Genre genre={genre} />
      ))}
    </div>
  );
};

export default Genres;
