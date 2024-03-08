import { Link } from "react-router-dom";
// import { UpdateProductForm } from "./UpdateProductForm";

export const ProductCard = (props) => {
  const deleteProduct = (productId) => {
    props.setProductList(
      props.dataList.filter((product) => productId !== product.id)
    );
  };

  return (
    <div key={props.oneProduct.id} className="card">
      <img src={props.oneProduct.thumbnail} />

      <div className="card-info">
        <h3>Title: {props.oneProduct.title}</h3>
        <p>Description: {props.oneProduct.description}</p>
        <p>Price: {props.oneProduct.price}€</p>
        <p>DiscountPercentage: {props.oneProduct.discountPercentage}</p>
        <p>Rating: {props.oneProduct.rating}</p>
        <p>Stock: {props.oneProduct.stock}</p>
        <p>Brand: {props.oneProduct.brand}</p>
        <p>Category: {props.oneProduct.category}</p>
      </div>
      <div className="card-rating">
        <p> Product Rate :{props.oneProduct.rating > 4.5 ? "😀" : "😥"}</p>

        <Link to={`/updateProduct/${props.oneProduct.id}`}>
          <button>Update Button</button>
        </Link>

        <button
          onClick={() => {
            deleteProduct(props.oneProduct.id);
          }}
        >
          DeleteButton
        </button>
      </div>
      {/* <img src={oneProduct.images} /> */}
    </div>
  );
};
