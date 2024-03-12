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
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
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
      thumbnail: selectedThumbnail || thumbnail,
      images:
        selectedImages.length > 0
          ? selectedImages
          : images.split(",").filter(Boolean),
    };

    console.log(`product ${newProduct.images[0]}`);
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
    setSelectedThumbnail(null);
    setSelectedImages([]);
    nav(`/products/${newProduct.id}`);
  };
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    console.log(`file thumb  ${file}`);
    setSelectedThumbnail(URL.createObjectURL(file));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    console.log("Selected files:", files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    console.log("Selected image URLs:", imageUrls);
    setSelectedImages(imageUrls); // Set selectedImages state to array of image URLs
  };

  return (
    <form>
      <div className="form-boxes">
        <h2>Add a New Product</h2>
        <div>
          <label>
            Title :
            <input
              placeholder="Product's title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Description :
            <textarea
              placeholder="Put a description here"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Price :
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
            Discount % :
            <input
              name="discountPercentage"
              type="number"
              value={discountPercentage}
              onChange={(e) =>
                setDiscountPercentage(parseFloat(e.target.value))
              }
            />
          </label>
        </div>

        <div>
          <label>
            Rating :
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
            Stock :
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
            Category :
            <select
              name="category"
              type="text"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">---None---</option>
              <option value="smartphones">Smartphones</option>
              <option value="laptops">Laptops</option>
              <option value="fragrances">Fragrances</option>
              <option value="skincare">Skincare</option>
              <option value="groceries">Groceries</option>
              <option value="home-decoration">Home decoration</option>
              <option value="furniture">Furniture</option>
              <option value="tops">Tops</option>
              <option value="womens-dresses">Women's dresses</option>
              <option value="womens-shoes">Women's shoes</option>
              <option value="mens-shirt">Men's shirt</option>
              <option value="mens-shoes">Men's shoes</option>
              <option value="mens-watches">Men's watches</option>
              <option value="womens-watches">Women's watches</option>
              <option value="womens-bags">Women's bags</option>
              <option value="womens-jewellery">Women's jewellery</option>
              <option value="sunglasses">Sunglasses</option>
              <option value="automotive">Automotive</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="lighting">Lighting</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Brand :
            <input
              placeholder="Product's brand"
              name="brand"
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Thumbnail URL:
            <input
              type="text"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </label>
          <label>
            Or Select from Computer:
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
            />
          </label>
          {selectedThumbnail && (
            <img
              src={selectedThumbnail}
              alt="Thumbnail"
              style={{ maxWidth: "100px", maxHeight: "100px", margin: "5px" }}
            />
          )}
        </div>

        <div>
          <label>
            Images URL(s):
            <input
              type="text"
              placeholder="Separate URLs by commas"
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
          </label>
          <label>
            Or Select from Computer:
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImagesChange}
            />
          </label>
          <div>
            {selectedImages &&
              selectedImages.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Image ${index}`}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    marginRight: "5px",
                  }}
                />
              ))}
          </div>
        </div>
      </div>
      <button type="submit" onClick={handleSubmitProduct}>
        Add Product
      </button>
    </form>
  );
}

export default AddProductForm;
