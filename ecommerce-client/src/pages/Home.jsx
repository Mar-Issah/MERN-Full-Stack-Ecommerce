import React from 'react';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Notice from '../components/Notice';
import Slider from '../components/Slider';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <Notice />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
