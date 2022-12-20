import React from "react";
import NavBar from "./components/NavBar/NavBar";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/services";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import RecentProject from "./components/RecentProject/RecentProject"
import Cources from "./components/Cources/Cources";



function App() {
  return (
    <div>
      <NavBar />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProject />
      <Cources />


    </div>
  );
}

export default App;
