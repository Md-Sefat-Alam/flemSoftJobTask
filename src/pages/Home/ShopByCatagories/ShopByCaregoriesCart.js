import React from "react";

const ShopByCaregoriesCart = ({ title, icon, categoryBoxSelected }) => {
  return (
    <div
      style={{
        height: "172px",
        width: "172px",
        boxSizing: "border-box",
        zIndex: "9999999",
      }}
      className={
        categoryBoxSelected
          ? "categoryFinding flex flex-col justify-evenly items-center rounded-md bg-gray-100/20 p-4 hover:bg-gray-100/30 cursor-pointer categoryBoxSelected"
          : "categoryFinding flex flex-col justify-evenly items-center rounded-md bg-gray-100/20 p-4 hover:bg-gray-100/30 cursor-pointer"
      }
    >
      <div
        style={{ zIndex: "-11" }}
        onClick={(e) => e.stopPropagation()}
        className=""
      >
        {icon}
      </div>
      <p style={{ zIndex: "-11" }} className=" text-xl font-bold text-center">
        {title}
      </p>
    </div>
  );
};

export default ShopByCaregoriesCart;
