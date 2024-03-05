import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import products from "./assets/products.json";
import ProductList from "./components/ProductList";

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
      <ProductList dataList={productList} setProductList={setProductList} />
      <Footer />
    </>
  );
}

export default App;
