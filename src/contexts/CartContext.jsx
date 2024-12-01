import React from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount ]= useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, item) => {
      return accumulator +item.price*item.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // update item amount
  useEffect(() => {
    const amount = cart.reduce((accumulator, item) => {
      return accumulator + item.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  const addToCart = (product, id) => {
    console.log("add to cart");
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const tempCart = cart.map((item) => {
        if (item.id === id) {
          let newAmount = item.amount + 1;
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      setCart(tempCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      if (cartItem.amount <= 1) {
        removeFromCart(id);
      } else {
        const newAmount = cartItem.amount - 1;
        const tempCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        setCart(tempCart);
      }
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        removeFromCart,
        itemAmount,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;