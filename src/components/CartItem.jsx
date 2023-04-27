import { useContext } from "react";
import { CartContext } from "../pages/ProductPage";

function CartItem({ item }) {
  const { setCartItem } = useContext(CartContext);

  const increase = (id) => {
    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calcPrice = (item) => {
    return item.quantity * item.price;
  };

  const removeFromCart = (id, size) => {
    const updateCart = setCartItem((prevCart) => prevCart.filter((item) => item.id !== id || item.selectedSize !== size));
    const json = JSON.stringify(updateCart);
    localStorage.setItem("cartItem", json);
  };
  

  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={item.img} alt="product" />
      </div>
      <div className="cart-middle">
        <p className="cart-name">{item.description}</p>
        <p className="cart-size">Size: {item.selectedSize}</p> {/* Added size display */}
        <div className="cart-btns">
          <button onClick={() => decrease(item.id)}>-</button>
          <p className="quantity">{item.quantity}</p>
          <button onClick={() => increase(item.id)}>+</button>
        </div>
      </div>
      <div className="cart-right">
        <p className="cart-price">{calcPrice(item)}.00$</p>
        <i
  onClick={() => removeFromCart(item.id, item.selectedSize)}
  className="fa-sharp fa-solid fa-xmark"
></i>
      </div>
    </div>
  );
}

export default CartItem;
