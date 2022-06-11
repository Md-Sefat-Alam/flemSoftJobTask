import React from "react";
import { Outlet } from "react-router-dom";
import HomeSlider from "../HomeSlider/HomeSlider";
import ShopByCatagories from "../ShopByCatagories/ShopByCatagories";

const Home = () => {
  return (
    <div className="">
      <section style={{ width: "1260px", margin: "0px auto" }}>
        <HomeSlider />
      </section>
      <section style={{ width: "1160px", margin: "0px auto" }}>
        <ShopByCatagories />
      </section>
      <Outlet />
    </div>
  );
};

export default Home;
