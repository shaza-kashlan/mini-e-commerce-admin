import React from "react";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";

const ProductList = ({ dataList, setProductList }) => {
  return (
    <div className="product-list">
      {dataList.map((oneProduct, index) => {
        return (
          <Link to={`products/${oneProduct.id}`} key={oneProduct.id}>
            <ProductCard
              oneProduct={oneProduct}
              key={oneProduct.id}
              dataList={dataList}
              setProductList={setProductList}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
