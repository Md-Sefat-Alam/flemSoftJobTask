import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductView from "./pages/ProductView/ProductView";
import TopHeader from "./pages/Home/Shared/TopHeader/TopHeader";
import Header from "./pages/Home/Shared/Header/Header";
import Footer from "./pages/Home/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
        <Header />
      </header>
      <div style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductView />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
