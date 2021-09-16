import React from 'react';
import RealHomePage from 'src/home-page-data/RealHomePage';
import Providers from 'src/Providers';

function HomePage(props) {
  return (
    <Providers>
      <RealHomePage />
    </Providers>
  );
}

export default HomePage;
