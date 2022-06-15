import { useEffect, useState } from "react";

const useAllAppData = () => {
  const [products, setProducts] = useState([]);

  const getCategoryWiseData = (category) => {
    switch (category) {
      case "electronics":
        const electronicsProducts = [];
        products.forEach(
          (product) =>
            product.category === "electronics" &&
            electronicsProducts.push(product)
        );
        if (electronicsProducts.length > 0) {
          electronicsProducts[0]["productStatus"] = "new";
          electronicsProducts[1]["productStatus"] = "sold out";
          electronicsProducts[electronicsProducts.length - 1]["productStatus"] =
            "new";
        }
        return electronicsProducts;
      case "jewelery":
        const electronicsProducts1 = [];
        products.forEach(
          (product) =>
            product.category === "jewelery" &&
            electronicsProducts1.push(product)
        );
        if (electronicsProducts1.length > 0) {
          electronicsProducts1[0]["productStatus"] = "new";
          electronicsProducts1[1]["productStatus"] = "sold out";
          electronicsProducts1[electronicsProducts1.length - 1][
            "productStatus"
          ] = "new";
        }
        return electronicsProducts1;
      case "men's clothing":
        const electronicsProducts2 = [];
        products.forEach(
          (product) =>
            product.category === "men's clothing" &&
            electronicsProducts2.push(product)
        );
        if (electronicsProducts2.length > 0) {
          electronicsProducts2[0]["productStatus"] = "new";
          electronicsProducts2[1]["productStatus"] = "sold out";
          electronicsProducts2[electronicsProducts2.length - 1][
            "productStatus"
          ] = "new";
        }
        return electronicsProducts2;
      case "women's clothing":
        const electronicsProducts3 = [];
        products.forEach(
          (product) =>
            product.category === "women's clothing" &&
            electronicsProducts3.push(product)
        );
        if (electronicsProducts3.length > 0) {
          electronicsProducts3[0]["productStatus"] = "new";
          electronicsProducts3[1]["productStatus"] = "sold out";
          electronicsProducts3[electronicsProducts3.length - 1][
            "productStatus"
          ] = "new";
        }
        return electronicsProducts3;
      default:
        return [];
    }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return {
    products,
    setProducts,
    getCategoryWiseData,
  };
};

export default useAllAppData;
