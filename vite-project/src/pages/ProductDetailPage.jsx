import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { ProductCard } from "../components/ProductCard";

const ProductDetailPage = ({ productListData }) => {
  const { productId } = useParams();

  const productDetail = productListData.find((product) => {
    if (product.id == productId) {
      return product;
    }
  });

  const [product, setOneProduct] = useState(productDetail);
  if (!product) {
    console.log("in the if");
    return <Navigate to="/" />;
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? product.images.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === product.images.length - 1 ? 0 : prevSlide + 1
    );
  };
  console.log(product.images[0]);

  return (
    <div className="product-detail">
      <div className="sliderImg">
        {product.images &&
          product.images.map((image, index) => (
            <div
              key={index}
              className={index === currentSlide ? "slide active" : "slide"}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        <button className="prev" onClick={handlePrevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={handleNextSlide}>
          &#10095;
        </button>
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}€</p>
        <p>Discount Percentage: {product.discountPercentage}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
