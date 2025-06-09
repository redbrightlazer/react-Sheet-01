import Product from "./product.jsx";
import "./productS.css";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          desc={product.desc}
        />
      ))}
    </div>
  );
}

export default ProductList;
