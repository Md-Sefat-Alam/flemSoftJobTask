import * as React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductView from "./pages/ProductView/ProductView";
import TopHeader from "./pages/Shared/TopHeader/TopHeader";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import Home from "./pages/Home/Home/Home";

function App() {
  // modal open or not
  const [open, setOpen] = React.useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
        <Header />
      </header>
      <div style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route
              path="product/:id"
              element={<ProductView open={open} setOpen={setOpen} />}
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
