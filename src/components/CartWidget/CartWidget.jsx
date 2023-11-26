import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import carrito from "../CartWidget/carrito-de-compras.png";

const CartWidget = () => {
  const { totalProductQuantity } = useContext(CartContext);
  return (
    <button type="button" className="btn btn-light position-relative">
      <img src={carrito} alt="" className="imagenCarrito" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
        {totalProductQuantity()}
        <span className="visually-hidden">unread messages</span>
      </span>
    </button>
  );
};

export default CartWidget;
