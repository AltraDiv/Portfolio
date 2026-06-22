import React from 'react';
import Intro from './components/homepage/Intro';
import Stats from './components/homepage/Stats';
import Skills from './components/homepage/Skills';
import Cards from './components/homepage/Cards';

const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <Stats />
      <Skills />
      <Cards />
    </>
  );
};

export default Home;
