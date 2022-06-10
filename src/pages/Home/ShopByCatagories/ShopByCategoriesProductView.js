import React from "react";

const ShopByCategoriesProductView = () => {
  return (
    <div>
      <div
        style={{ height: "172px", width: "172px" }}
        className="relative rounded-md bg-gray-100"
      >
        <span className="absolute bg-green-400 px-3 rounded-md text-white top-2 left-2 select-none">
          New
        </span>
        <img src="" alt="" />
      </div>
      <div style={{ width: "172px" }}>
        <h3 className="">Apple Macbook Pro 2019</h3>
        <p className="text-md">MWP42SA/A</p>
        <p className="text-xl font-bold mt-3">$ 2,013.54</p>
        <p className="text-gray-500 text-sm mt-5">
          by <span className="text-blue-500">Co. Ltd Minie Li</span>
        </p>
      </div>
    </div>
  );
};

export default ShopByCategoriesProductView;
