import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import rubbish from "../../assets/rubbish.png";
import "../CartDetail/CartDetail.css";

const CartDetail = ({ products }) => {
  const { deleteProduct } = useContext(CartContext);

  return (
    <>
      <div className="card">
        <div className="card" id="cardCart" key={products.id}>
          <h5 className="card-title">{products.name} </h5>
          <div className="card-body">
            <img className="card-img-top" src={products.imageUrl}></img>
            <p className="card-text"> Precio: $ {products.price} </p>
            <p className="card-text"> Cantidad Seleccionada: {products.cant}</p>
          </div>
          <button
            className="btn btn-outline-dark"
            onClick={() => deleteProduct(products.id)}
          >
            <img src={rubbish} />
          </button>
          <br />
        </div>
      </div>
    </>
  );
};

export default CartDetail;
