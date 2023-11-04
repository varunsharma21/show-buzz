import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import { showsContext } from "../../ShowFetcher";

const Sidebar = () => {
  const ctx = useContext(showsContext);

  const chooseFilterHandler = (event) => {
    if (event.target.innerText === "Action") {
      ctx.setFilter("Action");
    } else if (event.target.innerText === "Romance") {
      ctx.setFilter("Romance");
    } else if (event.target.innerText === "Drama") {
      ctx.setFilter("Drama");
    } else if (event.target.innerText === "Horror") {
      ctx.setFilter("Horror");
    } else if (event.target.innerText === "Science Fiction") {
      ctx.setFilter("Science-Fiction");
    } else {
      ctx.setFilter("");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles["app-name"]}>Show Buzz</h1>
      <div className={styles.filters}>
        <h2>Filters</h2>
        <p onClick={chooseFilterHandler}>Action</p>
        <p onClick={chooseFilterHandler}>Romance</p>
        <p onClick={chooseFilterHandler}>Drama</p>
        <p onClick={chooseFilterHandler}>Horror</p>
        <p onClick={chooseFilterHandler}>Science Fiction</p>
        <p onClick={chooseFilterHandler}>All shows</p>
      </div>
    </div>
  );
};

export default Sidebar;
