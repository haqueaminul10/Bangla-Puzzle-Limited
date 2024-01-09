import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);
  const [count, setCount] = useState(true);

  const addToCart = (product) => {
    if (cart.length > 0) {
      const isExist = cart.filter((b) => b.id === product.id);

      if (isExist.length > 0) {
        const a = cart.map((c) => {
          if (c.id === product.id) {
            return { ...c, quantity: c.quantity + 1 };
          } else {
            return c;
          }
        });
        setCart(a);
      } else {
        const a = { ...product, quantity: 1 };
        setCart((prevData) => [...prevData, a]);
      }
    } else {
      const a = { ...product, quantity: 1 };
      setCart((prevData) => [...prevData, a]);
    }
  };

  const removeCart = (id) => {
    const updateCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(updateCart);
  };

  //   TOTAL COST
  //   useEffect(() => {
  //     const total = cart.reduce((all, current) => {
  //       return all + current.price * current.amount;
  //     }, 0);
  //     setTotal(total);
  //   }, [total]);

  const increaseProduct = (id) => {
    const carItem = cart.filter((item) => item.id === id);

    if (carItem) {
      const updateCart = cart.map((item) => {
        if (item.id === id) {
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
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(updateCart);
    }
  };

  //UPDATE ITEM AMOUNT
  //   useEffect(() => {
  //     if (cart) {
  //       const amount = cart.reduce((total, currentItem) => {
  //         return total + currentItem.amount;
  //       }, 0);
  //       setCartAmount(amount);
  //     }
  //   }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeCart,
        total,
        setTotal,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
