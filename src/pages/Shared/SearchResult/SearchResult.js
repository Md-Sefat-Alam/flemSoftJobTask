import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAllAppData from "../../../hooks/useAllAppData";

const SearchResult = ({ searchFocusOrNot, searchText }) => {
  const [filterProducts, setFilterProducts] = useState([]);
  const { products } = useAllAppData();
  useEffect(() => {
    const tempFilterData = [];
    if (products.length > 0 && searchText.length > 0) {
      products.forEach((product) => {
        if (product.title.toLowerCase().includes(searchText.toLowerCase())) {
          tempFilterData.push(product);
        }
      });
    }
    setFilterProducts(tempFilterData);
  }, [searchText]);
  return (
    <div
      style={
        !searchText || !searchFocusOrNot
          ? { display: "none" }
          : { display: "block", width: "400px", zIndex: -1 }
      }
      className="bg-white absolute top-0 left-0 rounded-tl-md shadow-2xl pl-3"
    >
      <div style={{ height: "50px", width: "100%" }}></div>
      <div
        style={{
          maxHeight: "450px",
          width: "100%",
          overflowY: "scroll",
        }}
        className="pr-2"
      >
        {/* end offer show */}
        <div>
          <div>
            <p className="text-gray-500 text-sm">Offer</p>
          </div>
        </div>
        {/* end offer show */}
        <div>
          <div>
            <p className="font-semibold py-2">
              {searchText} ({filterProducts.length})
            </p>
          </div>
          <div className="flex justify-between ml-2">
            <p className="text-gray-500 text-sm">Product</p>
            <p style={{ color: "#68D237" }} className="text-sm cursor-pointer">
              See All
            </p>
          </div>
          <div className="ml-2">
            <div>
              {filterProducts.length > 0 &&
                filterProducts.map((product) => (
                  <Link to={`home/product/${product.id}`}>
                    <div
                      key={product.id}
                      className="flex justify-start py-2 cursor-pointer ml-1 rounded-md hover:bg-green-50"
                    >
                      {product.image ? (
                        <div
                          style={{
                            width: "124px",
                            height: "124px",
                          }}
                          className="flex justify-center items-center"
                        >
                          <img
                            style={{ height: "124px" }}
                            src={product.image}
                            alt=""
                          />
                        </div>
                      ) : (
                        <div
                          style={{
                            width: "124px",
                            height: "124px",
                          }}
                          className="bg-gray-100 flex justify-center items-center"
                        ></div>
                      )}
                      {/* end img */}
                      <div
                        style={{ width: "270px" }}
                        className="ml-2 flex flex-col justify-between"
                      >
                        <p>{product.title}</p>
                        <p className="text-xl font-bold">
                          ${parseFloat(product.price).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-400">
                          by{" "}
                          <span className="text-green-500">
                            Kimpine Calculator
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        {/* end search result show */}
      </div>
    </div>
  );
};

export default SearchResult;
