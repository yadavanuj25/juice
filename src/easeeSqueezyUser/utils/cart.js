// src/utils/cart.js
export const addToCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingIndex = existingCart.findIndex(
    (item) => item.id === product.id
  );

  if (existingIndex >= 0) {
    existingCart[existingIndex].quantity += 1;
  } else {
    existingCart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(existingCart));
  return existingCart;
};
