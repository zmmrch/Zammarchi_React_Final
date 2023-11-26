const CartForm = ({ formData, handleOnChange, handleOrders }) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display">Complete sus datos para finalizar la compra</h1>
        <form onSubmit={handleOrders}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Nombre y Apellido</label>
            <input
              className="form-control item"
              type="text"
              name="name"
              placeholder="Ingrese Nombre y Apellido"
              required
              onChange={handleOnChange}
              value={formData.name}
            />
            <label htmlFor="exampleInputName">Teléfono</label>
            <input
              className="form-control item"
              type="text"
              name="phone"
              placeholder="Ingrese un teléfono"
              required
              onChange={handleOnChange}
              value={formData.phone}
            />
            <label htmlFor="exampleInputName">Mail</label>
            <input
              className="form-control item"
              type="email"
              name="email"
              placeholder="Ingrese su email"
              required
              onChange={handleOnChange}
              value={formData.email}
            />
          </div>
          <br />
          <button className="btn btn-dark">Terminar Compra</button>
        </form>
      </div>
    </div>
  );
};

export default CartForm;
