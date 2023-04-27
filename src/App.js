import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import All from './components/Categories-pages/All';
import Tshirts from './components/Categories-pages/Tshirts';
import Sweaters from './components/Categories-pages/Sweaters';
import Accessories from './components/Categories-pages/Accessories';
import Hoodies from './components/Categories-pages/Hoodies';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductPage, { CartContext } from './pages/ProductPage';

function App() {
  console.log("App component is rendering");
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item, quantity, size) => {
    setCartItem((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.selectedSize === size,
      );

      if (itemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[itemIndex] = {
          ...newCart[itemIndex],
          quantity: newCart[itemIndex].quantity + quantity,
        };
        return newCart;
      } else {
        const newItem = {
          ...item,
          selectedSize: size,
          quantity: quantity,
        };
        const newCart = [...prevCart, newItem];
        return newCart;
      }
    });
  };

  useEffect(() => {
    const json = localStorage.getItem('cartItem');
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem('cartItem', json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="T-Shirts" element={<Tshirts />} />
          <Route path="Sweaters" element={<Sweaters />} />
          <Route path="Accessories" element={<Accessories />} />
          <Route path="Hoodies" element={<Hoodies />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
