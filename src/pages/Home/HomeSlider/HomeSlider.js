import { Button } from "@mui/material";
import React from "react";
import "./HomeSlider.css";
import SliderItemShow from "./SliderItemShow";

const HomeSlider = () => {
  return (
    <div>
      <div className="sliderContainer">
        <div className="bg-gray-200 slider_item_1">
          <div className="p-11 h-full flex flex-col justify-between items-center">
            <div className="text-center">
              <span>Asus</span>
              <p className="text-2xl">Supper Sale</p>
              <p className="text-2xl">Laptop Gaming</p>
            </div>
            <div>
              <Button
                sx={{
                  width: 140,
                  height: 40,
                  backgroundColor: "#68D237",
                }}
                variant="contained"
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
        {/* end 01 */}
        <div className="bg-gray-300 slider_item_2"></div>
        {/* end 02 */}
        <div className="bg-gray-400 slider_item_3">
          <SliderItemShow
            productType={"Big deal"}
            brandNames={["Black Friday", "Buy 1 Get 1"]}
          />
        </div>
        {/* end 03 */}
        <div className="bg-gray-500 slider_item_4">
          <SliderItemShow
            productType={"Fujiwa"}
            brandNames={["ION Alkaline", "Micronutrient", "Supplements"]}
          />
        </div>
        {/* end 04 */}
        <div className="bg-gray-600 slider_item_5">
          <SliderItemShow
            productType={"Wine"}
            brandNames={["Drunkenness", "Deep Flavor"]}
          />
        </div>
        {/* end 05 */}
        <div className="bg-gray-700 slider_item_6">
          <SliderItemShow
            productType={"Cosmetic"}
            brandNames={["MAXIMI", "Sale 50%"]}
          />
        </div>
        {/* end 06 */}
        <div className="bg-gray-800 slider_item_7">
          <SliderItemShow
            productType={"Sunglasses"}
            brandNames={["Authentic", "Sale off 50%"]}
          />
        </div>
        {/* end 07 */}
        <div className="bg-gray-900 slider_item_8">
          <SliderItemShow
            productType={"Hand Wash"}
            brandNames={["Clean hands", "Clean bacteria"]}
          />
        </div>
        {/* end 08 */}
        <div className="bg-gray-100 slider_item_9">
          <SliderItemShow
            productType={"Fashion"}
            brandNames={["Nice bag", "Nice style"]}
          />
        </div>
        {/* end 09 */}
      </div>
    </div>
  );
};

export default HomeSlider;
