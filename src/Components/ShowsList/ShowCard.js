import React from "react";
import styles from "./ShowCard.module.css";

const ShowCard = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.poster} alt="poster" />
      <h3 className={styles.name}>{props.name}</h3>
      <p>Rating: {props.rating} / 5</p>
    </div>
  );
};

export default ShowCard;
