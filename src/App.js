import React from "react";
import NavBar from "./components/NavBar/NavBar";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/services";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import RecentProject from "./components/RecentProject/RecentProject"
import Cources from "./components/Cources/Cources";
import Video from "./components/Video/Video";
import ClientReview from "./components/ClietReview/ClientReview";
import AboutMe from './components/AboutMe/AboutMe';


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
      <Video />
      <ClientReview />
      <AboutMe />
      <Services />

    </div>
  );
}

export default App;
