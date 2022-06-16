import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { removeFromDb } from "../../utilities/useLocalStorage";
import BorderLinearProgress from "../BorderLinearProgress/BorderLinearProgress";

const CartView = ({ allCartData, getDataFromLocalStorage }) => {
  return (
    <div
      style={{
        width: "368px",
        left: "",
        zIndex: 555,
      }}
      className="cartViewOrNot bg-white text-black p-2 rounded-md shadow-2xl"
    >
      <div
        className="my-3 bg-gray-50 pr-2"
        style={{ maxHeight: "300px", overflowY: "scroll" }}
      >
        {allCartData.length > 0 &&
          allCartData.map((cart) => (
            <div className="flex py-2">
              <div
                style={{ width: "124px", height: "124px" }}
                className="bg-gray-100 relative mr-2 flex justify-center items-center"
              >
                <div
                  onClick={() => {
                    removeFromDb(cart.id);
                    getDataFromLocalStorage();
                  }}
                  className="absolute font-bold top-1 left-2 cursor-pointer text-red-500"
                >
                  X
                </div>
                <img style={{ maxHeight: "124px" }} src={cart.image} alt="" />
              </div>
              <div className="">
                <h3 style={{ maxWidth: "240px" }}>{cart.title}</h3>
                <p className="text-xl font-bold">${cart.price}</p>
                <div className="flex justify-between ">
                  <span className="block pt-2">Qty</span>
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                      <input
                        className="p-1 mx-1 border-2 w-12 h-9 rounded-md text-center text-xl"
                        type="number"
                        defaultValue={parseInt(cart.quantity)}
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
                        marginBottom: "0px",
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
          ))}
      </div>
      {/* end cart data view */}
      <div>
        <p className="text-xl text-center py-1">
          Sub Total:{" "}
          <span style={{ color: "#68D237" }} className="font-semibold">
            $ 00.00
          </span>
        </p>
      </div>
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
