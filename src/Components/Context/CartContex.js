import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    if (cart.length > 0) {
      const isExist = cart.filter((b) => b.id === product.id);

      if (isExist.length > 0) {
        const a = cart.map((c) => {
          if (c.id === product.id) {
            setTotalPrice(totalPrice + c.price);

            return { ...c, quantity: c.quantity + 1 };
          } else {
            return c;
          }
        });
        setCart(a);
      } else {
        const a = { ...product, quantity: 1 };
        setCart((prevData) => [...prevData, a]);
        setTotalPrice(totalPrice + product.price);
      }
    } else {
      const a = { ...product, quantity: 1 };
      setCart((prevData) => [...prevData, a]);
      setTotalPrice(totalPrice + product.price);
    }
  };

  const removeCart = (id) => {
    const updateCart = cart.filter((item) => {
      setTotalPrice(totalPrice - item.price * item.quantity);
      return item.id !== id;
    });
    setCart(updateCart);
  };

  const increaseProduct = (id) => {
    const carItem = cart.filter((item) => item.id === id);
    if (carItem) {
      const updateCart = cart.map((item) => {
        if (item.id === id) {
          setTotalPrice(totalPrice + item.price);
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(updateCart);
    }
  };

  //DECREMENT BUTTON
  const decreaseProduct = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const updateCart = cart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          setTotalPrice(totalPrice - item.price);

          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(updateCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeCart,
        increaseProduct,
        decreaseProduct,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
