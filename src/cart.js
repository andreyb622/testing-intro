function addToCart(cart, product, quantity) {
  const result = [...cart];

  const existingProductIndex = result.findIndex(
    (item) => item.id === product.id,
  );

  if (existingProductIndex !== -1) {
    const existingProduct = result[existingProductIndex];
    const newQuantity = existingProduct.quantity + quantity;

    if (newQuantity <= 0 || newQuantity > product.stock) {
      throw new RangeError("Недопустимое количество товара.");
    }

    result[existingProductIndex] = {
      ...existingProduct,
      quantity: newQuantity,
    };
  } else {
    if (quantity <= 0 || quantity > product.stock) {
      throw new RangeError("Недопустимое количество товара.");
    }

    result.push({ ...product, quantity });
  }

  return result;
}

function changeQuantity(cart, productId, quantity) {
  const result = [...cart];

  const productIndex = result.findIndex((item) => item.id === productId);

  if (productIndex !== -1) {
    const product = result[productIndex];
    if (quantity <= 0 || quantity > product.stock) {
      throw new RangeError("Недопустимое количество товара.");
    }

    result[productIndex] = { ...product, quantity };
  }

  return result;
}

function removeFromCart(cart, productId) {
  const result = [...cart];
  const productIndex = result.findIndex((item) => item.id === productId);

  if (productIndex !== -1) {
    result.splice(productIndex, 1);
  }

  return result;
}

function calculateCartSubtotal(cart) {
  return cart.reduce(
    (subtotal, item) => subtotal + item.price * item.quantity,
    0,
  );
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);
  let discount = 0;

  if (promoCode === "SAVE10" && subtotal >= 20000) {
    discount = subtotal * 0.1;
  }

  const delivery = subtotal >= 50000 ? 0 : 30000;

  return {
    subtotal,
    discount,
    delivery,
    total: subtotal - discount + delivery,
  };
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
