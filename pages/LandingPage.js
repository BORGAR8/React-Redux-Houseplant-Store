import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const LandingPage = () => (
  <div className="landing">
    <h1>Welcome to GreenLeaf Houseplants 🌿</h1>
    <p>Bringing life and freshness to your home, one plant at a time.</p>
    <Link to="/products" className="button">Get Started</Link>
  </div>
);

export default LandingPage;
