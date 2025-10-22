import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import ProductList from '../components/ProductList';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Indoor', image: 'https://i.imgur.com/3b9YQxF.png' },
  { id: 2, name: 'Snake Plant', price: 15, category: 'Indoor', image: 'https://i.imgur.com/64H0vYk.png' },
  { id: 3, name: 'Cactus', price: 8, category: 'Succulent', image: 'https://i.imgur.com/EK1KEXC.png' },
  { id: 4, name: 'Bamboo Palm', price: 20, category: 'Outdoor', image: 'https://i.imgur.com/KBL76V8.png' },
  { id: 5, name: 'Peace Lily', price: 18, category: 'Indoor', image: 'https://i.imgur.com/FYnhN7L.png' },
  { id: 6, name: 'Echeveria', price: 12, category: 'Succulent', image: 'https://i.imgur.com/GlX4QF3.png' }
];

const ProductPage = () => {
  const dispatch = useDispatch();
  const handleAddToCart = plant => dispatch(addToCart(plant));
  return (
    <div>
      <h2>Our Collection</h2>
      <ProductList products={plants} addToCart={handleAddToCart} />
    </div>
  );
};

export default ProductPage;
