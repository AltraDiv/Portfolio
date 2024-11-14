// pages/Home.tsx
import React from 'react';
import Intro from './components/homepage/Intro';
import Cards from './components/homepage/Cards';

const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <Cards />
      <p className='flex items-center text-gray-700 mt-4 text-center max-w-6xl mx-auto px-4'>
        PS: Rather than using a flashy template for my portfolio, I decided to build it from scratch from inspirations.
        Despite being simple, I learnt a lot and overall I'm happy with how the portfolio turned out. I'm excited to continue improving it in the future.
      </p>
    </>
  );
};

export default Home;
