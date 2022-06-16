import React from "react";
import icon from "../ShopByCatagories/icons";

const FeatureBox = () => {
  return (
    <div className="flex justify-evenly items-center">
      {[
        {
          icon: icon.delivery,
          title: "Free Shipping",
          msg: ["For invoices", "Over $1.500"],
        },
        {
          icon: icon.monyBack,
          title: "Cash Back",
          msg: ["When paying for products via Dasun Wallet"],
        },
        {
          icon: icon.support,
          title: "24/7 Support",
          msg: ["When something goes"],
        },
      ].map((single) => (
        <div
          style={{ width: "180px" }}
          className="flex flex-col justify-center items-center text-center"
        >
          <div className="py-3">{single.icon}</div>
          <h3 className="text-xl font-bold pb-3">{single.title}</h3>
          {single.msg.map((msg) => (
            <span className="block text-sm">{msg}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FeatureBox;
