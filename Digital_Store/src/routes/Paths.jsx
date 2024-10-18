import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductList from "../pages/ProductListingPage";
import ProductView from "../pages/ProductViewPage";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductList />} />
          <Route path="/produto/" element={<ProductView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
