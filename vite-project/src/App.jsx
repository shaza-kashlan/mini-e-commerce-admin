import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import products from "./assets/products.json";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AboutPage } from "./pages/AboutPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const onSidebarToggle = () => {
    console.log("image clicked");
    setIsImageClicked(!isImageClicked);
  };

  const [productList, setProductList] = useState(products);

  return (
    <>
      <Navbar onSidebarToggle={onSidebarToggle} />
      {isImageClicked && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={
            <DashboardPage
              productList={productList}
              setProductList={setProductList}
            />
          }
        />
        <Route path="/About-Us" element={<AboutPage />} />
        <Route path="/NotFound" element={<NotFoundPage />} />
        <Route
          path="/products/:productId"
          element={<ProductDetailPage productListData={productList} />}
        />
      </Routes>

      {/* <ProductList dataList={productList} setProductList={setProductList} /> */}
      <Footer />
    </>
  );
}

export default App;
