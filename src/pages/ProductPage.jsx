import React, { createContext, useContext, useState } from "react";
import { useParams } from "react-router";
import "../components/ProductPage.css";
import { items } from "../components/AllData";
import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity, size) => {
    setCartItems((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.size === size
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity,
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity, size }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

function ProductPage() {
  const { id } = useParams();
  const item = items.filter(item => {

    return item.id === parseInt(item.id)
  });

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(
    item[0].img
  );
  console.log("items", items);
  console.log("item", item[0].description);
  console.log("id", id);
  const [notify, setNotify] = useState(false);
  const [selectedSize, setSelectedSize] = useState("S");

  const { addToCart } = useContext(CartContext);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity) => {
    return quantity * item[0].price;
  };

  const showNotify = () => {
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 3000);
  };


  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div>

      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{item[0].description}</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
              <div className="small-imgs">
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product"
                />
              </div>
            </div>
            <div className="product-right">
              <p className="product-spec">{item[0].specs}</p>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <p className="product-price">{calcPrice(quantity)}.00$</p>
              </div>

              <div className="atc-buy">
                <button
                  onClick={() => {
                    addToCart(item[0], quantity, selectedSize);
                    showNotify();
                  }}
                  className="atc-btn"
                >
                  add to cart
                </button>

                <button className="buy-btn">buy now</button>
              </div>
              <div className="spec-size">
                <p className="spec-title">Size:</p>
                <div className="size-buttons">
                  <button
                    className={`size-btn ${selectedSize === "S" ? "selected" : ""
                      }`}
                    onClick={() => setSelectedSize("S")}
                  >
                    S
                  </button>
                  <button
                    className={`size-btn ${selectedSize === "M" ? "selected" : ""
                      }`}
                    onClick={() => setSelectedSize("M")}
                  >
                    M
                  </button>
                  <button
                    className={`size-btn ${selectedSize === "L" ? "selected" : ""
                      }`}
                    onClick={() => setSelectedSize("L")}
                  >
                    L
                  </button>
                  <button
                    className={`size-btn ${selectedSize === "XL" ? "selected" : ""
                      }`}
                    onClick={() => setSelectedSize("XL")}
                  >
                    XL
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="specifications">
            <div className="spec">
              <p className="spec-title">Texture:</p>
              <p className="title-desc">{item[0].texture}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Weight:</p>
              <p className="title-desc">{item[0].weight}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Size:</p>
              <p className="title-desc">{item[0].size}</p>
            </div>
          </div>
        </div>
        <TrendingSlider />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;


