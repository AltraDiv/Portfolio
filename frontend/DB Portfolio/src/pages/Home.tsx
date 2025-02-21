// pages/Home.tsx
import React from 'react';
import Intro from './components/homepage/Intro';
import Cards from './components/homepage/Cards';

const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <Cards />
    </>
  );
};

export default Home;
