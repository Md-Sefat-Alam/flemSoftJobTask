import { Button } from "@mui/material";
import React from "react";
import BorderLinearProgress from "../../Shared/BorderLinearProgress/BorderLinearProgress";

const PromoProduct = () => {
  const calculatingInMilisecond = (
    day = 0,
    hour = 0,
    minute = 0,
    second = 0
  ) => {
    const dayTemp = day * 86400000;
    const hourTemp = hour * 3600000;
    const minuteTemp = minute * 60000;
    const secondTemp = second * 1000;
    return dayTemp + hourTemp + minuteTemp + secondTemp;
  };
  return (
    <div>
      <h3 className="text-2xl font-semibold py-5">Promo Product</h3>
      <div className="flex justify-between">
        {[1, 2].map((single) => (
          <div className="flex">
            <div
              style={{ width: "270px", height: "270px" }}
              className="bg-gray-100 relative rounded"
            >
              {/* <img src="" alt="" /> */}
              <div className="bg-orange-500/75 rounded-md px-2 py-1 text-white absolute top-2 left-2 select-none">
                -15%
              </div>
            </div>
            {/* end img section */}
            <div style={{ width: "300px" }} className="pl-3">
              <h3 className="text-xl mb-2">
                Apple Macbook Air MWTJ2SA/A Space Grey (2020)
              </h3>
              <p className="my-2 text-xl font-extrabold">
                $1,099{" "}
                <span className="pl-4 line-through text-sm font-normal text-gray-400">
                  $1193.71{" "}
                </span>
              </p>
              <div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <p>Sold: 700</p>
                  <p>In Stock: 300</p>
                </div>
                <BorderLinearProgress
                  variant="determinate"
                  value={(700 / (700 + 300)) * 100}
                />
                {/* percentage calculate */}
              </div>
              <div className="py-3">
                <div className="flex justify-start items-center select-none">
                  <div className="h-12 w-12 bg-gray-100 text-xl font-semibold rounded-md flex justify-center items-center">
                    123
                  </div>
                  <span className="px-2 font-semibold">:</span>
                  {/* end day */}
                  <div className="h-12 w-12 bg-gray-100 text-xl font-semibold rounded-md flex justify-center items-center">
                    42
                  </div>
                  <span className="px-2 text-xl font-semibold">:</span>
                  {/* end hour */}
                  <div className="h-12 w-12 bg-gray-100 text-xl font-semibold rounded-md flex justify-center items-center">
                    00
                  </div>
                  <span className="px-2 text-xl font-semibold">:</span>
                  {/* end minute */}
                  <div className="h-12 w-12 bg-gray-100 text-xl font-semibold rounded-md flex justify-center items-center">
                    08
                  </div>
                  {/* end Second */}
                </div>
                <div className=" pt-2 flex justify-start select-none">
                  <div className="w-12 text-gray-400 text-center">Day</div>
                  <span className="px-2"> </span>
                  {/* end day */}
                  <div className="w-12 text-gray-400 text-center">Hour</div>
                  <span className="px-3"> </span>
                  {/* end hour */}
                  <div className="w-12 text-gray-400 text-center">Min</div>
                  <span className="px-3"> </span>
                  {/* end minute */}
                  <div className="w-12 text-gray-400 text-center">Sec</div>
                  {/* <span className="px-2"> </span>
                <span className="px-2"> </span> */}
                  {/* end second */}
                </div>
              </div>
              <Button
                sx={{
                  width: "100%",
                  height: 35,
                  backgroundColor: "#68D237",
                  color: "white",
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
                variant="contained"
              >
                Add To Cart
              </Button>
            </div>
            {/* end text section */}
          </div>
        ))}
      </div>
      {/* <div>
        <Countdown date={Date.now() + calculatingInMilisecond(123, 42, 0, 8)} />
      </div> */}
    </div>
  );
};

export default PromoProduct;
