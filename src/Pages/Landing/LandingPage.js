import React from "react";
import styles from "./LandingPage.module.css";
import Sidebar from "../../Components/Sidebbar/Sidebar";
import ShowsList from "../../Components/ShowsList/ShowsList";

const LandingPage = () => {
  return (
    <div className={styles["landing-page"]}>
      <Sidebar />
      <ShowsList />
    </div>
  );
};

export default LandingPage;
