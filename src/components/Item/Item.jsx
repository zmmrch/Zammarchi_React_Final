import { memo } from "react";
import { Link } from "react-router-dom";

export const Item = memo(({ product }) => {
  return (
    <div className="card w-25">
      <img src={product.imageUrl} className="card-img-top" />
      <div className="card-body">
        <p>Producto: {product.name}</p>
        <p>Categoría: {product.category}</p>
      </div>
      <div className="card-footer">
        <Link to={`/detail/${product.id}`}>
          <button className="btn btn-dark w-100">detalle</button>
        </Link>
      </div>
    </div>
  );
});
