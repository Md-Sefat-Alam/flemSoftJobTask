import { useEffect, useState } from "react";
import { getStoredCart } from "../pages/utilities/useLocalStorage";
import { luxuryFoodData } from "./data";

const useAllAppData = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartData, setCartData] = useState(0);

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
          electronicsProducts[2]["discount"] = 15;
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
          electronicsProducts1[2]["discount"] = 10;
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
          electronicsProducts2[2]["discount"] = 5;
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
          electronicsProducts3[2]["discount"] = 15;
          electronicsProducts3[electronicsProducts3.length - 1][
            "productStatus"
          ] = "new";
        }
        return electronicsProducts3;
      case "luxury food":
        const electronicsProducts4 = [];
        products.forEach(
          (product) =>
            product.category === "luxury food" &&
            electronicsProducts4.push(product)
        );
        return electronicsProducts4;
      default:
        return [];
    }
  };

  const getDataFromLocalStorage = () => {
    const cartData = getStoredCart();
    let tempCartData = [];
    for (const key in cartData) {
      products.forEach((product) => {
        if (product.id === parseInt(key)) {
          product["quantity"] = cartData[key];
          tempCartData.push(product);
        }
      });
    }
    setCartData(tempCartData);
  };

  useEffect(() => {
    if (products.length > 0) {
      const cartData = getStoredCart();
      let tempCartData = [];
      for (const key in cartData) {
        products.forEach((product) => {
          if (product.id === parseInt(key)) {
            product["quantity"] = cartData[key];
            tempCartData.push(product);
          }
        });
      }
      setCartData(tempCartData);
    }
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        data.push(...luxuryFoodData);
        setProducts(data);
      });
  }, []);
  return {
    products,
    setProducts,
    getCategoryWiseData,
    getDataFromLocalStorage,
    cartCount,
    cartData,
  };
};

export default useAllAppData;
