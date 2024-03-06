import React from 'react'

const ProductDetailPage = ({productListData}) => {
  
  const { productId } = useParams();
  const productDetail = productListData.find(
    (product) => product.id === productId
  );
  const [oneProduct, setOneProduct] = useState(productDetail);
  //just to check if we have one pet, if no... navigate back to home page
  if (!oneProduct) {
    console.log("in the if");
    return <Navigate to="/" />;
  }

  return (
    <div>
       <p>{oneProduct.title} </p>
      </div>
  );
}

export default ProductDetailPage