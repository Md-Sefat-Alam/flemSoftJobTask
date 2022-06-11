import React from "react";

const ShopByCategoriesProductView = ({ productDetails }) => {
  const { image, title, price, rating, productStatus } = productDetails;

  return (
    <div>
      <div
        style={{ height: "172px", width: "172px" }}
        className="relative rounded-md bg-gray-100 flex justify-center items-evenly"
      >
        {rating?.rate > 4.0 ? (
          <span className="absolute bg-yellow-500/60 px-3 rounded-md text-white top-2 left-2 select-none">
            Favorite
          </span>
        ) : productStatus && productStatus === "new" ? (
          <span className="absolute bg-green-500/60 px-3 rounded-md text-white top-2 left-2 select-none">
            New
          </span>
        ) : (
          productStatus === "sold out" && (
            <span className="absolute bg-gray-500/60 px-3 rounded-md text-white top-2 left-2 select-none">
              Sold Out
            </span>
          )
        )}

        <img style={{ maxHeight: "172px" }} src={image} alt="" />
      </div>
      <div style={{ width: "172px" }}>
        <h3
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "35ch",
          }}
          className="mt-3"
        >
          {title}
        </h3>
        <p className="text-md">MWP42SA/A</p>
        <p className="text-xl font-bold mt-3">$ {price}</p>
        <p className="text-gray-500 text-sm mt-5">
          by <span className="text-blue-500">Co. Ltd Minie Li</span>
        </p>
      </div>
    </div>
  );
};

export default ShopByCategoriesProductView;
