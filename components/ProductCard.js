import React from 'react';
import { useSelector } from 'react-redux';

const ProductCard = ({ product, addToCart }) => {
  const cartItems = useSelector(state => state.cart.items);
  const isAdded = cartItems.some(item => item.id === product.id);
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)} disabled={isAdded}>
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
