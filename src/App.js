import React from "react";
import LandingPage from "./Pages/Landing/LandingPage";
import ShowFetcher from "./ShowFetcher";

function App() {
  return (
    <ShowFetcher>
      <LandingPage />
    </ShowFetcher>
  );
}

export default App;
