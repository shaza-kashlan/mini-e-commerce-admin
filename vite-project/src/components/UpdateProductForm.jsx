import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function UpdateProductForm({ productList, setProductList }) {
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
  const { productId } = useParams();

  useEffect(() => {
    const foundProduct = productList.find((oneProduct) => {
      if (oneProduct.id == productId) {
        return true;
      }
    });
    console.log("here is the found ", productList);

    setTitle(foundProduct.title);
    setDescription(foundProduct.description);
    setPrice(foundProduct.price);
    setDiscountPercentage(foundProduct.discountPercentage);
    setRating(foundProduct.rating);
    setStock(foundProduct.stock);
    setBrand(foundProduct.brand);
    setCategory(foundProduct.category);
    setThumbnail(foundProduct.thumbnail);
    setImages(foundProduct.images);
  }, []);

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const mappedProduct = productList.map((product) => {
      if (product.id == productId) {
        const updatedProduct = {
          title,
          description,
          price,
          discountPercentage,
          rating,
          stock,
          brand,
          category,
          thumbnail,
          images,
          id: product.id,
        };
        return updatedProduct;
      } else {
        return product;
      }
    });

    setProductList(mappedProduct);

    nav("/");
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "smartphones") {
      setCategory("");
    } else {
      setCategory(selectedCategory);
    }
  };

  return (
    <form onSubmit={handleUpdateProduct}>
      <h2>Update Product</h2>
      <div className="form-boxes">
        <div>
          <label>
            Title :
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
            Description :
            <textarea
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
            Brand :
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
            Category :
            <select
              name="category"
              type="text"
              onChange={(e) => handleCategoryChange}
            >
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
              <option value="">---None---</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Thumbnail :
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
            Images :
            <input
              name="images"
              type="text"
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
          </label>
        </div>
      </div>
      <button type="submit">Update Product</button>
    </form>
  );
}

export default UpdateProductForm;
