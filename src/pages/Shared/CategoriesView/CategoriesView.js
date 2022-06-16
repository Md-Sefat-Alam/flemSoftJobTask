import React from "react";
import "./CategoriesView.css";

const CategoriesView = ({ categories }) => {
  return (
    <div className="flex">
      <ul className="flex items-center">
        {categories.map((category, index) => {
          return (
            <li
              className={
                index === 0
                  ? "productCategorySelected mx-2 cursor-pointer"
                  : "mx-2 cursor-pointer"
              }
            >
              {category}
            </li>
          );
        })}
      </ul>
      <div className="flex mx-2">
        <button className="text-gray-300 px-1 font-bolder hover:bg-gray-200 rounded">
          {"<"}
        </button>
        <button className="text-gray-600 px-1 font-bolder hover:bg-gray-200 rounded">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CategoriesView;
