import React from "react";
import styles from "./ShowCard.module.css";
import { useNavigate } from "react-router-dom";

const ShowCard = (props) => {
  const { id, name, poster, rating, description, posterLarge, genres } = props;
  const navigate = useNavigate();

  const toShowDescription = () => {
    navigate("/description", {
      state: {
        id: id,
        name: name,
        rating: rating,
        description: description,
        poster: poster,
        genres: genres,
        posterLarge: posterLarge,
      },
    });
  };

  return (
    <div className={styles.container} onClick={toShowDescription}>
      <img src={poster} alt="poster" />
      <h3 className={styles.name}>{name}</h3>
      {/* <p className={styles.rating}>Rating: {rating} / 10</p> */}
    </div>
  );
};

export default ShowCard;
