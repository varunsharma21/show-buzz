import React from "react";
import ShowFetcher from "./ShowFetcher";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage";
import DescriptionPage from "./Pages/Description/DescriptionPage";

function App() {
  return (
    <ShowFetcher>
      <Router>
        <Routes>
          <Route path="/shows" Component={LandingPage} />
          <Route path="/description" Component={DescriptionPage} />
        </Routes>
      </Router>
    </ShowFetcher>
  );
}

export default App;
