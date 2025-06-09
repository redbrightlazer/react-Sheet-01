import "./productS.css";
function Product({ name, price, desc }) {
  return (
    <div className="product">
      <h2 className="name">
        {name} • <span className="price">{price}</span>
      </h2>
      <p className="desc">{desc}</p>
    </div>
  );
}
export default Product;
