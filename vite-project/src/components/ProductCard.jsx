import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  const deleteProduct = (productId) => {
    props.setProductList(
      props.dataList.filter((product) => productId !== product.id)
    );
  };

  return (
    <div key={props.oneProduct.id} className="card">
      <img src={props.oneProduct.thumbnail} alt={props.oneProduct.title} />

      <div className="card-info">
        <div>
          <h3>Title:</h3>
          <p>{props.oneProduct.title}</p>
        </div>
        <div>
          <h3>Description:</h3>
          <p>{props.oneProduct.description}</p>
        </div>
        <div>
          <h3>Price:</h3>
          <p>{props.oneProduct.price}€</p>
        </div>
        <div>
          <h3>Discount Percentage:</h3>
          <p>{props.oneProduct.discountPercentage}</p>
        </div>
        <div>
          <h3>Rating:</h3>
          <p>{props.oneProduct.rating}</p>
        </div>
        <div>
          <h3>Stock:</h3>
          <p>{props.oneProduct.stock}</p>
        </div>
        <div>
          <h3>Brand:</h3>
          <p>{props.oneProduct.brand}</p>
        </div>
        <div>
          <h3>Category:</h3>
          <p>{props.oneProduct.category}</p>
        </div>
      </div>

      <div className="card-rating">
        <p>Product Rate: {props.oneProduct.rating > 4.5 ? "😀" : "😥"}</p>

        <Link to={`/updateProduct/${props.oneProduct.id}`}>
          <button>Update Button</button>
        </Link>

        <button onClick={() => deleteProduct(props.oneProduct.id)}>
          Delete Button
        </button>
      </div>
    </div>
  );
};
