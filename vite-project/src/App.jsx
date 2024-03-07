import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Sidebar from "./components/Sidebar";
import products from "./assets/products.json";

import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AboutPage } from "./pages/AboutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AddProductForm from "./components/AddProductForm";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [productList, setProductList] = useState(products);

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      {isSidebarOpen && <Sidebar />}
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
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/products/:productId"
          element={<ProductDetailPage productListData={productList} />}
        />
        <Route
          path="/addProduct"
          element={
            <AddProductForm
              productList={productList}
              setProductList={setProductList}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
