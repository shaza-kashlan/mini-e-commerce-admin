import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { ProductCard } from "../components/ProductCard";

const ProductDetailPage = ({ productListData }) => {
  const { productId } = useParams();

  const productDetail = productListData.find(
    (product) => product.id == productId
  );

  const [oneProduct, setOneProduct] = useState(productDetail);
  if (!oneProduct) {
    console.log("in the if");
    return <Navigate to="/" />;
  }
  return (
    <div>
      <ProductCard
        oneProduct={oneProduct}
        key={oneProduct.id}
        dataList={productListData}
        setProductList={setOneProduct}
      />
    </div>
  );
};

export default ProductDetailPage;
