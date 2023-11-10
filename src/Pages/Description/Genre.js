import React from "react";
import styles from "./Genre.module.css";

const Genre = ({ genre }) => {
  return (
    <div className={styles.genre}>
      <p>{genre}</p>
    </div>
  );
};

export default Genre;
