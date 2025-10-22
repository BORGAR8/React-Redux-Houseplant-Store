import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, removeItem } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  return (
    <div>
      <h2>Shopping Cart 🛒</h2>
      <p>Total items: {totalQuantity}</p>
      <p>Total cost: ${totalPrice}</p>
      {items.length === 0 ? <p>Your cart is empty.</p> : items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <p>${item.price}</p>
          <button onClick={() => dispatch(increase(item.id))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Checkout Coming Soon!')}>Checkout</button>
      <Link to="/products" className="button">Continue Shopping</Link>
    </div>
  );
};

export default CartPage;
