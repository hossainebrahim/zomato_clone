import React, { useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import TabOption from "../../components/common/tabOption";
import Delivery from "../../components/Delivery/index";
import DiningOut from "../../components/DiningOut/index";
import Nightlife from "../../components/NightLife/index";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <>
      <Header />
      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* di */}
      {getCorrectScreen(activeTab)}
      <Footer />
    </>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
