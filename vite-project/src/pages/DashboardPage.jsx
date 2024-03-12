import { useEffect } from "react";
import React from "react";
import ProductList from "../components/ProductList";
import { Loading } from "../components/Loading";

const DashboardPage = ({ productList, setProductList }) => {
  return <ProductList dataList={productList} setProductList={setProductList} />;
};

export default DashboardPage;
