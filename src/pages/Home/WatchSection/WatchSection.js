import React, { useEffect, useState } from "react";
import useAllAppData from "../../../hooks/useAllAppData";
import CategoriesView from "../../Shared/CategoriesView/CategoriesView";
import ShopByCategoriesProductView from "../ShopByCatagories/ShopByCategoriesProductView";

const WatchSection = () => {
  const [categoryWiseProducts, setCategoryWiseProducts] = useState([]);
  const { products, getCategoryWiseData } = useAllAppData();

  useEffect(() => {
    if (products.length > 0) {
      setCategoryWiseProducts(getCategoryWiseData("women's clothing"));
    }
  }, [products]);

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Clothing</h3>
        <CategoriesView
          categories={[
            "All",
            "Men's Clothing",
            "Women's Clothing",
            "Smart Clothing",
          ]}
        />
      </div>
      <div className="my-10 grid grid-cols-6 gap-10">
        {categoryWiseProducts.length > 0 ? (
          categoryWiseProducts.map((productDetails) => (
            <ShopByCategoriesProductView
              key={productDetails.id}
              productDetails={productDetails}
              productIdYesORNot={true}
            ></ShopByCategoriesProductView>
          ))
        ) : (
          <p className="text-center mt-10 text-red-500">NO DATA</p>
        )}
      </div>
    </div>
  );
};

export default WatchSection;
