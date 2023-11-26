import { ItemCounter } from "../ItemCounter/ItemCounter";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const onAdd = (cant) => {
    addToCart({ ...product, cant });
  };
  return (
    <div className="row" key={product.id}>
      <div className="col-1"></div>
      <div className="col-6 mt-5 mb-5">
        <img src={product.imageUrl} alt="" className="img-thumbnail" />
      </div>
      <div className="col-3 text-center mt-5 mb-5">
        <p className="lead">Producto: {product.name}</p>
        <p className="lead">Categoría: {product.category}</p>
        <p className="lead">Precio: ${product.price}</p>
        <ItemCounter initial={1} stock={product.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
