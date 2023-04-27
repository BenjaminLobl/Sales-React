import "./Header.css";
import Main1 from "../img/header/img1.png";
import Main2 from "../img/header/img2.png";
import Main3 from "../img/header/img3.png";
import Main4 from "../img/header/img4.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="/categories/all">
                <div id="img1" className="lil-overlay"></div>
                <img src={Main1} alt="img1" />
                <p className="main-description">New Releases</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="/categories/T-Shirts">
                <div id="img2" className="lil-overlay"></div>
                <img src={Main2} alt="img2" />
                <p className="main-description">T-Shirts</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="/categories/Sweaters">
                <div id="img3" className="lil-overlay"></div>
                <img src={Main3} alt="img3" />
                <p className="main-description">Sweaters</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="/categories/Accessories">
                <div id="img4" className="lil-overlay"></div>
                <img src={Main4} alt="img4" />
                <p className="main-description">Accessories</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
