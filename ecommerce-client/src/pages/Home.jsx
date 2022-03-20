import React from 'react';
import Navbar from '../components/Navbar';
import Notice from '../components/Notice';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Notice />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
