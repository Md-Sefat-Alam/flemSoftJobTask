import React, { useEffect, useState } from "react";
import "./TechnologySection.css";
import { Button } from "@mui/material";
import useAllAppData from "../../../hooks/useAllAppData";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { addToDb } from "../../utilities/useLocalStorage";

const TechnologySection = ({ getDataFromLocalStorage }) => {
  const { products, getCategoryWiseData } = useAllAppData();
  const [electronicProducts, setElectronicsProducts] = useState([]);
  useEffect(() => {
    setElectronicsProducts(getCategoryWiseData("electronics"));
  }, products);

  return (
    <div>
      <h3 className="text-2xl font-semibold py-5">Technology</h3>
      <div className="grid grid-cols-3 gap-7">
        {electronicProducts.length > 0 &&
          electronicProducts.map((product) => (
            <div
              key={product.id}
              className="technologyProductWrapper flex cursor-pointer"
            >
              <div
                style={{ height: "172px", width: "172px" }}
                className="relative rounded-md bg-gray-100 flex justify-center items-evenly cursor-pointer"
              >
                <img
                  style={{ maxHeight: "172px" }}
                  src={product.image}
                  alt=""
                />
                <div
                  style={{ height: "170px", width: "170px" }}
                  className="technologyHoverBtn absolute hidden top-0 flex-col justify-center items-center rounded-md bg-gray-900/25"
                >
                  <div className="flex justify-between mb-5">
                    <Button
                      sx={{
                        width: "40%",
                        height: 35,
                        backgroundColor: "#000",
                        color: "#68D237",
                        fontSize: "16px",
                        textTransform: "capitalize",
                        margin: "0px 10px",
                      }}
                      variant="contained"
                      className="hover:text-white"
                    >
                      <FavoriteBorderIcon />
                    </Button>
                    <Button
                      sx={{
                        width: "40%",
                        height: 35,
                        backgroundColor: "#000",
                        color: "#68D237",
                        fontSize: "16px",
                        textTransform: "capitalize",
                        margin: "0px 10px",
                      }}
                      variant="contained"
                      className="hover:text-white"
                    >
                      <VisibilityIcon />
                    </Button>
                  </div>
                  <Button
                    sx={{
                      width: "90%",
                      height: 35,
                      backgroundColor: "#68D237",
                      color: "white",
                      fontSize: "16px",
                      textTransform: "capitalize",
                    }}
                    variant="contained"
                    onClick={() => {
                      addToDb(product.id);
                      getDataFromLocalStorage();
                      alert("Added to cart");
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
              <div
                className="ml-4 flex flex-col justify-start"
                style={{ height: "172px", width: "172px" }}
              >
                <h3
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "35ch",
                  }}
                  className="font-semibold"
                >
                  {product.title}
                </h3>
                <p className="text-md">MWP42SA/A</p>
                <p className="text-xl font-bold mt-3">
                  $ {parseFloat(product.price).toFixed(2)}
                </p>
                <p className="text-gray-500 text-sm mt-5">
                  by <span className="text-blue-500">Co. Ltd Minie Li</span>
                </p>
              </div>
            </div>
          ))}
        {/* end product show */}
      </div>
    </div>
  );
};

export default TechnologySection;
