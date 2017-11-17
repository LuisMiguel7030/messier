import React from 'react';
import ParallaxCP from '../contentpages/ParallaxCP';
import CardMVP from '../contentpages/CardMVP';
import MainQS from '../contentpages/MainQS';

const HomePage = () => (

  <div>
    <div className="mb-5">
      <ParallaxCP />
    </div>

    <div className="container marketing">
      <MainQS/>
      <hr/>
      <CardMVP />
    </div>
  </div>




);

export default HomePage
