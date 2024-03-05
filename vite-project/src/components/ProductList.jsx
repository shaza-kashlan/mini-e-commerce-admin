import React from "react";
import { ProductCard } from "./ProductCard";

const ProductList = ({ dataList, setProductList }) => {
  //   const deleteProduct = (productId) => {
  //     setProductList(dataList.filter((product) => productId !== product.id));
  //   };

  return (
    <div>
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
