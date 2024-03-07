import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AddProductForm({ productList, setProductList }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState(0);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState("");
  const nav = useNavigate();

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: productList.length + 1,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images: images.split(","), // Split images by comma to get an array ?? need to check}
    };
    setProductList([newProduct, ...productList]);

    // Reset form fields
    setTitle("");
    setDescription("");
    setPrice(0);
    setDiscountPercentage(0);
    setRating(0);
    setStock(0);
    setBrand("");
    setCategory("");
    setThumbnail("");
    setImages("");
    nav("/");
  };

  return (
    <form>
      <h2>Add a New Product</h2>
      <div>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Discount Percentage:
          <input
            name="discountPercentage"
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Rating:
          <input
            name="rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Stock:
          <input
            name="stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Brand:
          <input
            name="brand"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Category:
          <input
            name="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Thumbnail URL:
          <input
            name="thumbnail"
            type="url"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Images (separate URLs by comma):
          <input
            name="images"
            type="text"
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" on onClick={handleSubmitProduct}>
        Add Product
      </button>
    </form>
  );
}

export default AddProductForm;
