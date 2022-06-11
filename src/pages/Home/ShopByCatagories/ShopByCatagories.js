import React, { useEffect, useRef, useState } from "react";
import * as ReactDOM from "react-dom";
import ShopByCaregoriesCart from "./ShopByCaregoriesCart";
import icon from "./icons";
import ShopByCategoriesProductView from "./ShopByCategoriesProductView";
import "./ShopByCategories.css";

const ShopByCatagories = () => {
  const categoryContainer = useRef();
  const handleElecSelected = useRef();
  const [products, setProducts] = useState([]);
  const [categoryWiseProducts, setCategoryWiseProducts] = useState([]);

  const handleCategoryShow = (e, category) => {
    if (e) {
      const classListFinding = [...e.target.classList];
      if (classListFinding.includes("categoryFinding")) {
        const previusActive = ReactDOM.findDOMNode(
          categoryContainer.current
        ).getElementsByClassName("categoryBoxSelected");
        for (const iterator of previusActive) {
          iterator.classList.remove("categoryBoxSelected");
        }
        e.target.classList.add("categoryBoxSelected");
      }
    }
    // end category selection

    // men's clothing
    // jewelery
    // electronics
    // women's clothing

    switch (category) {
      case "electronics":
        const electronicsProducts = [];
        products.forEach(
          (product) =>
            product.category === "electronics" &&
            electronicsProducts.push(product)
        );
        electronicsProducts[0]["productStatus"] = "new";
        electronicsProducts[1]["productStatus"] = "sold out";
        electronicsProducts[electronicsProducts.length - 1]["productStatus"] =
          "new";
        setCategoryWiseProducts(electronicsProducts);
        break;
      case "jewelery":
        const electronicsProducts1 = [];
        products.forEach(
          (product) =>
            product.category === "jewelery" &&
            electronicsProducts1.push(product)
        );
        electronicsProducts1[0]["productStatus"] = "new";
        electronicsProducts1[1]["productStatus"] = "sold out";
        electronicsProducts1[electronicsProducts1.length - 1]["productStatus"] =
          "new";
        setCategoryWiseProducts(electronicsProducts1);
        break;
      case "men's clothing":
        const electronicsProducts2 = [];
        products.forEach(
          (product) =>
            product.category === "men's clothing" &&
            electronicsProducts2.push(product)
        );
        electronicsProducts2[0]["productStatus"] = "new";
        electronicsProducts2[1]["productStatus"] = "sold out";
        electronicsProducts2[electronicsProducts2.length - 1]["productStatus"] =
          "new";
        setCategoryWiseProducts(electronicsProducts2);
        break;
      case "women's clothing":
        const electronicsProducts3 = [];
        products.forEach(
          (product) =>
            product.category === "women's clothing" &&
            electronicsProducts3.push(product)
        );
        electronicsProducts3[0]["productStatus"] = "new";
        electronicsProducts3[1]["productStatus"] = "sold out";
        electronicsProducts3[electronicsProducts3.length - 1]["productStatus"] =
          "new";
        setCategoryWiseProducts(electronicsProducts3);
        break;
      default:
        setCategoryWiseProducts([]);
        break;
    }
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => handleElecSelected.current.click());
  }, []);
  return (
    <div>
      <h3>Shop By Categories</h3>
      <div ref={categoryContainer} className="grid grid-cols-6 gap-10 my-10">
        <div
          onClick={(e) => handleCategoryShow(e, "men's clothing")}
          className="relative"
        >
          <ShopByCaregoriesCart title={"Real Estate"} icon={icon.icon1} />
        </div>
        <div
          onClick={(e) => handleCategoryShow(e, "electronics")}
          className="relative"
          ref={handleElecSelected}
        >
          <ShopByCaregoriesCart
            categoryBoxSelected={true}
            title={"Technology"}
            icon={icon.icon2}
          />
        </div>
        <div
          onClick={(e) => handleCategoryShow(e, "women's clothing")}
          className="relative"
        >
          <ShopByCaregoriesCart title={"Clothing"} icon={icon.icon3} />
        </div>
        <div
          onClick={(e) => handleCategoryShow(e, "glasses")}
          className="relative"
        >
          <ShopByCaregoriesCart title={"Glasses"} icon={icon.icon4} />
        </div>
        <div
          onClick={(e) => handleCategoryShow(e, "jewelery")}
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
        {categoryWiseProducts.length > 0 ? (
          categoryWiseProducts.map((productDetails) => (
            <ShopByCategoriesProductView
              key={productDetails.id}
              productDetails={productDetails}
            />
          ))
        ) : (
          <p className="text-center mt-10 text-red-500">NO DATA</p>
        )}
      </div>
      {/* end categories product view */}
    </div>
  );
};

export default ShopByCatagories;
