export const ProductCard = (props) => {
  const deleteProduct = (productId) => {
    props.setProductList(
      props.dataList.filter((product) => productId !== product.id)
    );
  };

  return (
    <div key={props.oneProduct.id}>
      <h3>{props.oneProduct.title}</h3>
      <p>{props.oneProduct.description}</p>
      <p>{props.oneProduct.price}</p>
      <p>{props.oneProduct.discountPercentage}</p>
      <p>{props.oneProduct.rating}</p>
      <p>{props.oneProduct.stock}</p>
      <p>{props.oneProduct.brand}</p>
      <p>{props.oneProduct.category}</p>
      <img src={props.oneProduct.thumbnail} />
      {/* <img src={oneProduct.images} /> */}
      {props.oneProduct.rating > 4.5 ? "😀" : "😥"}
      <button
        onClick={() => {
          deleteProduct(props.oneProduct.id);
        }}
      >
        DeleteButton
      </button>
    </div>
  );
};
