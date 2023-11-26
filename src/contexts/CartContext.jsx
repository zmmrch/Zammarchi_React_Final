import { createContext, useState } from "react";

export const CartContext = createContext([]);

//crear un componente para vincularlo con contexto

export const CartContextProvider = ({ children }) => {
  //Acá es donde se definen los estados y funciones globales
  const [cartList, setCartList] = useState([]); //le pasamos array vacío. acá van a estar todos los prod que yo seleccione en agregar al carrito

  const addToCart = (product) => {
    const index = cartList.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      cartList[index].cant = cartList[index].cant + product.cant;
    } else {
      setCartList([...cartList, product]);
    }
  };

  //crear una funcion para cant total de prod
  const totalProductQuantity = () => {
    return cartList.reduce((total, product) => {
      return total + product.cant;
    }, 0);
  };

  //Funcion para precio total de prod
  const totalPrice = () =>
    cartList.reduce(
      (total, productObject) =>
        (total = total + productObject.price * productObject.cant),
      0
    );

  //Funcion para eliminar por prod
  const deleteProduct = (productId) => {
    const index = cartList.findIndex((product) => product.id === productId);
    if (index !== -1) {
      setCartList(cartList.slice(0, index).concat(cartList.slice(index + 1)));
    }
  };

  const emptyCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        totalPrice,
        deleteProduct,
        totalProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
