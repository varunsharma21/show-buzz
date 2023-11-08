import React from "react";
import styles from "./ShowCard.module.css";

const ShowCard = (props) => {
  const { id, poster, name, rating, description } = props;

  return (
    <div className={styles.container}>
      <img src={poster} alt="poster" />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.rating}>Rating: {rating} / 5</p>
    </div>
  );
};

export default ShowCard;
