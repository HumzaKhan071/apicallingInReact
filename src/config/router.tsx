import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import ApiHandlingScreen from "../pages/apiHandlingScren";
import Product from "../pages/product";
import SingleProduct from "../pages/SingleProduct";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ApiHandling" element={<ApiHandlingScreen />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Product/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
