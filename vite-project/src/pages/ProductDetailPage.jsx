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

  function getRating() {
    const fullStar = Math.round(product.rating);
    const rating = [];
    for (let i = 0; i < 5; i++) {
      if (i < fullStar) {
        rating.push("⭐");
      } else {
        rating.push("☆");
      }
    }
    return (
      <div className="rating">
        {rating.map((star, index) => {
          return <div key={index}>{`${star}`}</div>;
        })}
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="sliderImg">
        {product.images && product.images.length > 0 ? (
          product.images.map((image, index) => (
            <div
              key={index}
              className={index === currentSlide ? "slide active" : "slide"}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))
        ) : (
          <div className="slide active">
            <img src={product.thumbnail} alt="Thumbnail" />
          </div>
        )}
        <button className="prev" onClick={handlePrevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={handleNextSlide}>
          &#10095;
        </button>
      </div>
      <div className="product-info">
        <div>
          <h3>Title:</h3>
          <p>{product.title}</p>
        </div>
        <div>
          <h3>Description:</h3>
          <p>{product.description}</p>
        </div>
        <div>
          <h3>Price:</h3>
          <p>{product.price}€</p>
        </div>
        <div>
          <h3>Discount Percentage:</h3>
          <p>{product.discountPercentage}%</p>
        </div>
        <div>
          <h3>Rating</h3>
          <p>{getRating()}</p>
        </div>
        <div>
          <h3>Stock:</h3>
          <p>{product.stock}</p>
        </div>
        <div>
          <h3>Brand:</h3>
          <p>{product.brand}</p>
        </div>
        <div>
          <h3>Category:</h3>
          <p>{product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
