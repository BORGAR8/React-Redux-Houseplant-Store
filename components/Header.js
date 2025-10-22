import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <header className="header">
      <h1>🌿 GreenLeaf</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 ({totalQuantity})</Link>
      </nav>
    </header>
  );
};

export default Header;
