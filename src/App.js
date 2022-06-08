import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductView from "./pages/ProductView/ProductView";
import TopHeader from "./pages/Home/Shared/TopHeader/TopHeader";
import Header from "./pages/Home/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
        <Header />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
