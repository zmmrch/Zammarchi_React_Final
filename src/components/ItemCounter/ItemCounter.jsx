import { useState } from "react";
import { useCounter } from "../Hooks/useCounter";
import { Link } from "react-router-dom";

export const ItemCounter = ({ initial = 1, stock = 10, onAdd = 0 }) => {
  const { count, handleResta, handleSuma } = useCounter(initial, stock);

  const handleOnAdd = () => {
    onAdd(count);
    setInputType("input");
  };

  const [inputType, setInputType] = useState("button");

  const InputCount = () => {
    return (
      <>
        <Link to="/cart">
          <button
            className="btn btn-outline-dark"
            onClick={() => console.log("ir a cart")}
          >
            Ir al Cart
          </button>
        </Link>
        <Link to="/">
          <button
            className="btn btn-outline-dark"
            onClick={() => console.log("ir al home")}
          >
            Seguir comprando
          </button>
        </Link>
      </>
    );
  };

  return (
    <center>
      {inputType === "button" ? (
        <div className="container-fluid">
          <div>
            <p>{count}</p>
          </div>
          <div className="btn-group btn-group-mb" role="group">
            <button type="button" className="btn btn-dark" onClick={handleSuma}>
              {" "}
              +{" "}
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleResta}
            >
              {" "}
              -{" "}
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleOnAdd}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      ) : (
        <InputCount />
      )}
    </center>
  );
};
