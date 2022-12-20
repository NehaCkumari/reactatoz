import React from "react";
import NavBar from "./components/NavBar/NavBar";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/services";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";



function App() {
  return (
    <div>
      <NavBar />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />


    </div>
  );
}

export default App;
