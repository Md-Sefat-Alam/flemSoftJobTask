import React from "react";

const ShopByCaregoriesCart = ({ title, icon, categoryBoxSelected }) => {
  const handleClick = (e) => {
    // e.stopPropagation();
    // console.log(e.target.classList.add("categoryBoxSelected"));
  };
  return (
    <div
      style={{ height: "172px", width: "172px", boxSizing: "border-box" }}
      className={
        categoryBoxSelected
          ? "categoryFinding flex flex-col justify-evenly items-center rounded-md bg-gray-50 p-4 hover:bg-gray-100 cursor-pointer categoryBoxSelected"
          : "categoryFinding flex flex-col justify-evenly items-center rounded-md bg-gray-50 p-4 hover:bg-gray-100 cursor-pointer"
      }
      onClick={handleClick}
    >
      <div onClick={(e) => e.stopPropagation()} className="">
        {icon}
      </div>
      <p className=" text-xl font-bold text-center">{title}</p>
    </div>
  );
};

export default ShopByCaregoriesCart;
