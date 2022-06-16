import { Button } from "@mui/material";
import React from "react";
import BorderLinearProgress from "../BorderLinearProgress/BorderLinearProgress";

const CartView = () => {
  return (
    <div
      style={{
        width: "368px",
        left: "",
      }}
      className="cartViewOrNot bg-white text-black p-2 rounded-md shadow-2xl"
    >
      <div>
        <div className="flex py-2">
          <div
            style={{ width: "124px", height: "124px" }}
            className="bg-gray-100 relative mr-2"
          >
            <div className="absolute top-1 left-2 text-black cursor-pointer hover:text-red-500">
              X
            </div>
          </div>
          <div className="">
            <h3>Fashion Glasses Sunny Premium</h3>
            <p className="text-xl font-bold">$25</p>
            <div className="flex justify-between ">
              <span className="block pt-2">Qty</span>
              <div className="flex">
                <div>
                  <input
                    className="p-1 mx-1 border-2 w-12 h-9 rounded-md text-center text-xl"
                    type="number"
                    defaultValue={1}
                    min={0}
                  />
                </div>
                <Button
                  sx={{
                    height: 35,
                    backgroundColor: "#68D237",
                    color: "#fff",
                    fontSize: "16px",
                    textTransform: "capitalize",
                    marginBottom: "15px",
                    borderRadius: "10px",
                  }}
                  variant="contained"
                  className="hover:text-white"
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl text-center py-1">
            Sub Total:{" "}
            <span style={{ color: "#68D237" }} className="font-semibold">
              $542.79
            </span>
          </p>
        </div>
      </div>
      {/* end cart data view */}
      <div>
        <Button
          sx={{
            width: "100%",
            height: 35,
            backgroundColor: "#000",
            color: "#68D237",
            fontSize: "16px",
            textTransform: "capitalize",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
          variant="contained"
          className="hover:text-white"
        >
          View and Edit Shopping Cart
        </Button>
        <Button
          sx={{
            width: "100%",
            height: 35,
            backgroundColor: "#68D237",
            color: "white",
            fontSize: "16px",
            textTransform: "capitalize",
            borderRadius: "10px",
          }}
          variant="contained"
        >
          Payment Process
        </Button>
      </div>
      {/* end cart button */}
      <div className="py-2">
        <div className="flex justify-between text-gray-400 text-sm">
          <p>Free Shipping</p>
          <p>$ /$</p>
        </div>
        <BorderLinearProgress
          variant="determinate"
          value={(700 / (700 + 300)) * 100}
        />
        {/* percentage calculate */}
      </div>
      {/* end free shipping */}
    </div>
  );
};

export default CartView;
