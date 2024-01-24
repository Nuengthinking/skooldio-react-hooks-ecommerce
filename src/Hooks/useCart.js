import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState({});
  useEffect(() => {
    const cartItemsString = window.localStorage.getItem('cartItems');
    const cart = cartItemsString ? JSON.parse(cartItemsString) : [];
    setCartItems(cart);
  }, []);
  const addCartItem = (product, quantity) => {
    const newCartItem = [...cartItems, { product, quantity }];
    setCartItems(newCartItem);
    window.localStorage.setItem('cartItem', JSON.stringify(newCartItem));
  };
  const removeCartItem = (productId) => {
    const newCartItem = cartItems.filter((cartItems) => cartItems.product.id !== productId);
    setCartItems(newCartItem);
    window.localStorage.setItem('cartItem', JSON.stringify(newCartItem));
  };
  return { cartItems, addCartItem, removeCartItem };
};
export default useCart;
