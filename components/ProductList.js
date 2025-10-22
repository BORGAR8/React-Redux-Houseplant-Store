import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => (
  <div className="grid">
    {products.map(product => <ProductCard key={product.id} product={product} addToCart={addToCart} />)}
  </div>
);

export default ProductList;
