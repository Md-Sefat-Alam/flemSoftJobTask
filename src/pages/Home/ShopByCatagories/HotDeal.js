import { Button } from "@mui/material";
import React from "react";

const HotDeal = () => {
  return (
    <div className="flex justify-between">
      {[
        {
          deal: "Hot Deal",
          titleFirst: "Tours Safe",
          titleSecond: "Tours Discount",
        },
        {
          deal: "New Product",
          titleFirst: "Experience Technology",
          titleSecond: "relax Hightly",
        },
      ].map((single) => (
        <div
          style={{ width: "564px", height: "317px" }}
          className="flex flex-col justify-center items-start rounded-md bg-gray-100 p-10"
        >
          <span className="pb-1 text-gray-400">{single.deal}</span>
          <p className="pt-2 text-2xl font-bold uppercase">
            {single.titleFirst}
          </p>
          <p className="py-2 text-2xl font-bold uppercase">
            {single.titleSecond}
          </p>
          <Button
            sx={{
              width: 140,
              height: 40,
              backgroundColor: "#68D237",
              marginTop: "15px",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            Order Now
          </Button>
        </div>
      ))}
    </div>
  );
};

export default HotDeal;
