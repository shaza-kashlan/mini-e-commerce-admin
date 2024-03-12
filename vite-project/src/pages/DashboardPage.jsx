import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import ProductList from "../components/ProductList";
import { Loading } from "../components/Loading";

const DashboardPage = ({ productList, setProductList }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ProductList dataList={productList} setProductList={setProductList} />
      )}
    </>
  );
};

export default DashboardPage;
