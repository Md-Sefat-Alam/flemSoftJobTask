import React, { useEffect, useState } from "react";
import useAllAppData from "../../../hooks/useAllAppData";
import CategoriesView from "../../Shared/CategoriesView/CategoriesView";
import ShopByCategoriesProductView from "../ShopByCatagories/ShopByCategoriesProductView";

const Cosmetics = () => {
  const [categoryWiseProducts, setCategoryWiseProducts] = useState([]);
  const { products, getCategoryWiseData } = useAllAppData();

  useEffect(() => {
    if (products.length > 0) {
      setCategoryWiseProducts(getCategoryWiseData("jewelery"));
    }
  }, [products]);

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Cosmetics</h3>
        <CategoriesView categories={["All", "Lotion", "Mask", "PerFume"]} />
      </div>
      <div className="my-10 grid grid-cols-4 gap-10">
        {categoryWiseProducts.length > 0 ? (
          categoryWiseProducts.map((productDetails) => (
            <ShopByCategoriesProductView
              key={productDetails.id}
              widthHeight={{ width: "270px", height: "270px" }}
              productDetails={productDetails}
            />
          ))
        ) : (
          <p className="text-center mt-10 text-red-500">NO DATA</p>
        )}
      </div>
    </div>
  );
};

export default Cosmetics;
