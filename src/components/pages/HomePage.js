import React from 'react';
import ParallaxCP from '../contentpages/ParallaxCP';
import CardMVP from '../contentpages/CardMVP';


const HomePage = () => (

  <div>
    <div className="mb-5">
      <ParallaxCP />
    </div>

    <div className="container marketing">
        <CardMVP />
    </div>
  </div>




);

export default HomePage
