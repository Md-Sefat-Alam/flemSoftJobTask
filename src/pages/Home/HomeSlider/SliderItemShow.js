import React from "react";

const SliderItemShow = ({ productType, brandNames }) => {
  return (
    <div className="p-4 flex flex-col h-full justify-evenly items-start">
      <span className="text-sm">{productType}</span>
      <div>
        {brandNames.map((brandAndOption) => (
          <p className="text-xl font-semibold">{brandAndOption}</p>
        ))}
      </div>
    </div>
  );
};

export default SliderItemShow;
