import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo_atelier.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg" id="navBar">
      <div className="container-fluid">
        <img src={logo} id="logo"></img>
        <a className="navbar-brand" href="/">
          El Atelier
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle me-5"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hombre
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="text-link" to="/category/Zapatillas Hombre">
                    <a className="dropdown-item">Zapatillas Hombre</a>
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="/category/Remeras Hombre">
                    <a className="dropdown-item">Remeras Hombre</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle me-5"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mujer
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="text-link" to="/category/Zapatillas Mujer">
                    <a className="dropdown-item">Zapatillas Mujer</a>
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="/category/Remeras Mujer">
                    <a className="dropdown-item">Remeras Mujer</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
