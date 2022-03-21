import React from 'react';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Notice from '../components/Notice';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Notice />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
