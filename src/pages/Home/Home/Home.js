import React from "react";
import { Outlet } from "react-router-dom";
import Cosmetics from "../Cosmetics/Cosmetics";
import FeatureBox from "../FeatureBox/FeatureBox";
import HomeSlider from "../HomeSlider/HomeSlider";
import LuxuryFood from "../LuxuryFood/LuxuryFood";
import MancCothingSection from "../ManClothingSection/MancCothingSection";
import PromoProduct from "../PromoProduct/PromoProduct";
import HotDeal from "../ShopByCatagories/HotDeal";
import ShopByCatagories from "../ShopByCatagories/ShopByCatagories";
import TechnologySection from "../TechnologySection/TechnologySection";
import WatchSection from "../WatchSection/WatchSection";

const Home = ({ getDataFromLocalStorage }) => {
  return (
    <div className="">
      <section
        style={{ width: "1260px", margin: "0px auto", paddingBottom: "30px" }}
      >
        <HomeSlider />
      </section>
      {/* end home top slider an product view */}
      <section
        style={{ width: "1160px", margin: "0px auto", paddingBottom: "30px" }}
      >
        <ShopByCatagories />
        <Outlet />
        <HotDeal />
      </section>
      {/* end view by category section */}
      <section
        style={{ width: "1160px", margin: "20px auto", paddingBottom: "30px" }}
      >
        <PromoProduct />
      </section>
      {/* promo products */}
      <section
        style={{ width: "1160px", margin: "20px auto", paddingBottom: "30px" }}
      >
        <TechnologySection getDataFromLocalStorage={getDataFromLocalStorage} />
      </section>
      {/* end Technology Section*/}
      <section
        style={{ width: "1160px", margin: "20px auto", paddingBottom: "30px" }}
      >
        <WatchSection />
        {/* Watch data is not in api so the data of clothing has been placed there.   */}
      </section>
      {/* end Watch Section */}
      <section
        style={{ width: "1160px", margin: "20px auto", paddingBottom: "30px" }}
      >
        <Cosmetics />
      </section>
      {/* end Cosmetics Section */}
      <section
        style={{ width: "1160px", margin: "20px auto", paddingBottom: "30px" }}
      >
        <MancCothingSection />
      </section>
      {/* end manclothing Section */}
      <section
        style={{ width: "1160px", margin: "20px auto", paddingBottom: "30px" }}
      >
        <LuxuryFood />
      </section>
      {/* end Luxury Food Section */}
      <section
        style={{ width: "1160px", margin: "20px auto", paddingBottom: "30px" }}
      >
        <FeatureBox />
      </section>
      {/* end Luxury Food Section */}
    </div>
  );
};

export default Home;
