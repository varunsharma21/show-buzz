import React from "react";
import styles from "./DescriptionPage.module.css";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import Genres from "./Genres";

const DescriptionPage = () => {
  const location = useLocation();

  const { state } = location;

  return (
    <div className={styles["desc-page"]}>
      <div className={styles.container}>
        <img src={state.posterLarge} alt="poster" />
        <div className={styles["show-info"]}>
          <p className={styles.name}>{state && state.name}</p>
          <p className={styles.rating}>Rating: {state && state.rating}/10</p>
          <Genres genres={state.genres} />
          <p className={styles.summary}>Summary:</p>
          <p className={styles.desc}>{state && parse(state.description)}</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
