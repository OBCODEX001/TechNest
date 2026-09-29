import "./ProductCard.css"
const ProductCard = ({product}) => {
  return (
    <>
      <div className="productCardContainer">
        <div className="productImage">
            <img src={product.image} alt="" />
        </div>
        <div className="productCardText">
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
        <div className="productCardButton">
        <button>Shop Now</button>
        </div>
      </div>
    </>
  )
}

export default ProductCard
