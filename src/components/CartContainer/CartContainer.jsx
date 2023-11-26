import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import CartDetail from "../CartDetail/CartDetail";
import CartForm from "../CartForm/CartForm";

export const CartContainer = () => {
  const [isId, setisId] = useState("");

  const [formData, setformData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cartList, emptyCart, totalPrice, totalProductQuantity } =
    useContext(CartContext);

  const handleOrders = (evt) => {
    evt.preventDefault();
    const order = {};
    order.buyer = { formData };
    order.items = cartList.map((product) => ({
      id: product.id,
      price: product.price,
      name: product.name,
      quantity: product.cant,
    }));
    order.total = totalPrice();

    const db = getFirestore();
    const queryCollection = collection(db, "orders");

    //Agregar la orden de compra
    addDoc(queryCollection, order)
      .then((id) => setisId(id.id))
      .catch((err) => console.log(err))
      .finally(() =>
        setformData({
          name: "",
          phone: "",
          email: "",
        })
      );

    //Actualiza el stock de los productos
    cartList.forEach((product) => {
      const queryDoc = doc(db, "products", product.id);
      updateDoc(queryDoc, {
        stock: product.stock - product.cant,
      })
        .then(() => console.log("producto actualizado"))
        .catch((err) => console.log(err));
    });
  };

  const handleOnChange = (evt) => {
    setformData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <>
      {isId !== "" && (
        <div className="alert alert-success" role="alert">
          Gracias por su compra!
          <hr />
          <h5>
            El nro. de su orden es <strong>{isId}</strong>
          </h5>
        </div>
      )}

      {cartList.length === 0 ? (
        <div className="jumbotron jumbotron-fluid mt-5">
          <div className="container">
            <h1 className="display-4">No hay productos en el carrito</h1>
            <p className="lead text-center">
              Seleccione que quiere comprar y haga click en "Agragar al Carrito"
            </p>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col mt-5">
              {cartList.map((product) => (
                <CartDetail products={product} key={product.id} />
              ))}
              <br />
            </div>
            <div className="col mt-5">
              <br />
              <div className="row">
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display">Resumen de su compra</h1>
                    <p className="lead">
                      {totalProductQuantity() !== 0 && (
                        <p className="card-text">
                          Cantidad Total de Productos: {totalProductQuantity()}
                        </p>
                      )}

                      {totalPrice() !== 0 && (
                        <p className="card-text">
                          {" "}
                          Precio Total: $ {totalPrice()}
                        </p>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <button className="btn btn-dark" onClick={emptyCart}>
                  Vaciar Carrito
                </button>
              </div>
              <br />
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <CartForm
                    formData={formData}
                    handleOnChange={handleOnChange}
                    handleOrders={handleOrders}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
