import React from "react";
import { Outlet } from "react-router-dom";
import HomeSlider from "../HomeSlider/HomeSlider";
import PromoProduct from "../PromoProduct/PromoProduct";
import HotDeal from "../ShopByCatagories/HotDeal";
import ShopByCatagories from "../ShopByCatagories/ShopByCatagories";

const Home = () => {
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
        style={{ width: "1160px", margin: "0px auto", paddingBottom: "30px" }}
      >
        <PromoProduct />
      </section>
      {/* promo products */}
    </div>
  );
};

export default Home;
