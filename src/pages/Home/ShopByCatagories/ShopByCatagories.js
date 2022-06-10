import React, { useRef } from "react";
import * as ReactDOM from "react-dom";
import ShopByCaregoriesCart from "./ShopByCaregoriesCart";
import icon from "./icons";
import ShopByCategoriesProductView from "./ShopByCategoriesProductView";
import "./ShopByCategories.css";

const ShopByCatagories = () => {
  const categoryContainer = useRef();
  const handleCategoryShow = (e, category) => {
    const classListFinding = [...e.target.classList];
    if (classListFinding.includes("categoryFinding")) {
      //   e.target.classList.add = "categoryBoxSelected";
      const previusActive = ReactDOM.findDOMNode(
        categoryContainer.current
      ).getElementsByClassName("categoryBoxSelected");
      //   if (previusActive.length > 0) {
      //     previusActive.forEach((element) => {
      //       //   element.classList.remove("categoryBoxSelected");
      //       console.log(element);
      //     });
      //   }
      for (const iterator of previusActive) {
        console.log(iterator.classList.remove("categoryBoxSelected"));
      }

      e.target.classList.add("categoryBoxSelected");
    }
  };
  return (
    <div>
      <h3>Shop By Categories</h3>
      <div ref={categoryContainer} className="grid grid-cols-6 gap-10 my-10">
        <div
          onClick={(e) => handleCategoryShow(e, "real estate")}
          className="relative"
        >
          <ShopByCaregoriesCart title={"Real Estate"} icon={icon.icon1} />
        </div>
        <div
          onClick={(e) => handleCategoryShow(e, "technology")}
          className="relative"
        >
          <ShopByCaregoriesCart title={"Technology"} icon={icon.icon2} />
        </div>
        <div
          onClick={(e) => handleCategoryShow(e, "watch")}
          className="relative"
        >
          <ShopByCaregoriesCart title={"Watch"} icon={icon.icon3} />
        </div>
        <div
          onClick={(e) => handleCategoryShow(e, "glasses")}
          className="relative"
        >
          <ShopByCaregoriesCart title={"Glasses"} icon={icon.icon4} />
        </div>
        <div
          onClick={(e) => handleCategoryShow(e, "cosmetic")}
          className="relative"
        >
          <ShopByCaregoriesCart title={"Cosmetic"} icon={icon.icon5} />
        </div>
        <div
          onClick={(e) => handleCategoryShow(e, "food high grade")}
          className="relative"
        >
          <ShopByCaregoriesCart title={"Food High Grade"} icon={icon.icon6} />
        </div>
      </div>
      {/* end categories */}
      <div className="my-10 grid grid-cols-6 gap-10">
        <ShopByCategoriesProductView />
      </div>
      {/* end categories product view */}
    </div>
  );
};

export default ShopByCatagories;
