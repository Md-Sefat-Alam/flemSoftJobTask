import * as React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductView from "./pages/ProductView/ProductView";
import TopHeader from "./pages/Shared/TopHeader/TopHeader";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import useAllAppData from "./hooks/useAllAppData";

function App() {
  const { products, getDataFromLocalStorage, cartData } = useAllAppData();
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
        <Header
          getDataFromLocalStorage={getDataFromLocalStorage}
          cartData={cartData}
          products={products}
        />
      </header>
      <div style={{ minHeight: "70vh" }}>
        <Routes>
          <Route
            path="/home"
            element={<Home getDataFromLocalStorage={getDataFromLocalStorage} />}
          >
            <Route
              path="product/:productId"
              element={
                <ProductView
                  getDataFromLocalStorage={getDataFromLocalStorage}
                  cartData={cartData}
                  products={products}
                />
              }
            />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
