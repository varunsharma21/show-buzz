import React from "react";
import styles from "./DescriptionPage.module.css";
import { useLocation } from "react-router-dom";

const DescriptionPage = () => {
  const location = useLocation();

  const { state } = location;

  return (
    <div className={styles.container}>
      <h3>{state && state.id}</h3>
      <h3>{state && state.name}</h3>
      <h3>{state && state.rating}</h3>
      <h3>{state && state.description}</h3>
      {state && state.genres.map((genre) => <h3>{genre}</h3>)}
      <img src={state.posterLarge} alt="poster" />
      <img src={state.poster} alt="poster" />
    </div>
  );
};

export default DescriptionPage;
