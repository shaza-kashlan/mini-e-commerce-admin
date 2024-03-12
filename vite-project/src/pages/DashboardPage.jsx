import React from "react";
import ProductList from "../components/ProductList";
import { Loading } from "../components/Loading";

function mimicInterval({ productList, setProductList }) {
  return <ProductList dataList={productList} setProductList={setProductList} />;
}

const DashboardPage = ({ productList, setProductList }) => {
  // setTimeout(mimicInterval({ productList, setProductList }), 1000);
  return <ProductList dataList={productList} setProductList={setProductList} />;
};

export default DashboardPage;
