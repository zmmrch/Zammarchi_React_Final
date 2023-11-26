import "../Footer/Footer.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import tiktok from "../../assets/tiktok.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="mb-4">
            <a
              className="btn btn-outline btn-floating m-1"
              href=""
              role="button"
            >
              <img src={facebook} />
            </a>
            <a
              className="btn btn-outline btn-floating m-1"
              href=""
              role="button"
            >
              <img src={tiktok} />
            </a>
            <a
              className="btn btn-outline btn-floating m-1"
              href=""
              role="button"
            >
              <img src={instagram} />
            </a>
            <div>
              <p>
                © 2023 Copyright EL ATELIER - Indumentaria Urbana para Hombres y
                Mujeres
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
