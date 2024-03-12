export const ProductCard = (props) => {
  function getRating() {
    const fullStar = Math.round(props.oneProduct.rating);
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
    <div key={props.oneProduct.id} className="card">
      <img src={props.oneProduct.thumbnail} alt={props.oneProduct.title} />

      <div className="card-info">
        <div>
          <h3>Title:</h3>
          <p>{props.oneProduct.title}</p>
        </div>
        <div>
          <h3>Description:</h3>
          <p>{props.oneProduct.description.substring(0, 50)}...</p>
        </div>
        <div>
          <h3>Price:</h3>
          <p>{props.oneProduct.price}€</p>
        </div>
        {/* <div>
          <h3>Discount Percentage:</h3>
          <p>{props.oneProduct.discountPercentage}%</p>
        </div> */}
        <div>
          <h3>Rating:</h3>
          <p>{getRating()}</p>
        </div>
        {/* <div>
          <h3>Stock:</h3>
          <p>{props.oneProduct.stock}</p>
        </div> */}
        {/* <div>
          <h3>Category:</h3>
          <p>{props.oneProduct.category}</p>
        </div> */}
        <div>
          <h3>Brand:</h3>
          <p>{props.oneProduct.brand}</p>
        </div>
      </div>

      <div className="card-rating">
        <p>Product Rate: {props.oneProduct.rating > 3 ? "👍" : "👎"}</p>
      </div>
    </div>
  );
};
