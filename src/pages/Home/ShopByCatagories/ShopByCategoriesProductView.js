import React from "react";
import { Link } from "react-router-dom";

const ShopByCategoriesProductView = ({
  productDetails,
  widthHeight,
  productIdYesORNot,
}) => {
  const { id, image, title, price, rating, productStatus } = productDetails;

  return (
    <Link to={`/home/product/${id}`}>
      <div
        style={widthHeight ? widthHeight : { height: "172px", width: "172px" }}
        className={
          image
            ? "relative rounded-md flex justify-center items-evenly"
            : "relative rounded-md bg-gray-100 flex justify-center items-evenly"
        }
      >
        {parseFloat(rating?.rate) > 4.0 || productDetails?.discount ? (
          <>
            {rating?.rate > 4.0 && (
              <span className="absolute bg-yellow-500/60 px-3 rounded-md text-white top-2 left-2 select-none">
                Favorite
              </span>
            )}
            {productDetails?.discount && (
              <span
                className={
                  rating?.rate > 4.0
                    ? "absolute bg-red-500/60 px-3 rounded-md text-white top-2 right-2 select-none"
                    : "absolute bg-red-500/60 px-3 rounded-md text-white top-2 left-2 select-none"
                }
              >
                -{productDetails.discount}%
              </span>
            )}
          </>
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

        <img
          style={
            widthHeight
              ? { maxHeight: widthHeight.height }
              : { maxHeight: "172px" }
          }
          src={image}
          alt=""
        />
      </div>
      <div
        style={widthHeight ? { width: widthHeight.width } : { width: "172px" }}
      >
        <h3
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // maxWidth: "35ch",
          }}
          className="mt-3"
        >
          {title}
        </h3>
        {productIdYesORNot ? <p className="text-md">MWP42SA/A</p> : null}
        <p className="text-xl font-bold mt-3">
          $ {(price - (price * 15) / 100).toFixed(2)}
        </p>
        {productDetails?.discount && (
          <sapn className="text-sm line-through w-full">
            $ {parseFloat(price).toFixed(2)}
          </sapn>
        )}
        <p className="text-gray-500 text-sm mt-5">
          by <span className="text-blue-500">Co. Ltd Minie Li</span>
        </p>
      </div>
    </Link>
  );
};

export default ShopByCategoriesProductView;
