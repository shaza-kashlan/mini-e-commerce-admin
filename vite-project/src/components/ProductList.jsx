import React from "react";
import { ProductCard } from "./ProductCard";

const ProductList = ({ dataList, setProductList }) => {
  return (
    <div className="product-list">
      {dataList.map((oneProduct, index) => {
        return (
          <ProductCard
            oneProduct={oneProduct}
            key={oneProduct.id}
            dataList={dataList}
            setProductList={setProductList}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
