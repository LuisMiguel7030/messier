import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ParallaxCP from '../contentpages/ParallaxCP';
import CardMVP from '../contentpages/CardMVP';
import MainQS from '../contentpages/MainQS';
import Sol1 from '../contentpages/Sol1';
import Sol2 from '../contentpages/Sol2';
import Sol3 from '../contentpages/Sol3';
import Sol4 from '../contentpages/Sol4';

const cardstyle = {
  backgroundColor: '#84BD64',
  paddingTop: '4em',
  paddingBottom: '6em'
}

const HomePage = () => (

  <div>
    <ScrollableAnchor id={'home'}>
      <div className="mb-5">
        <ParallaxCP />
      </div>
    </ScrollableAnchor>

    <ScrollableAnchor id={'aboutme'}>
      <div>
        <div className="container marketing" style={{paddingTop: '5em'}}>
          <MainQS />
        </div>
        <section style={cardstyle} >
          <div className="container marketing">
            <CardMVP />
          </div>
        </section> 
      </div>
         
    </ScrollableAnchor>

    <ScrollableAnchor id={'portfolio'}>
      <div className="container marketing" style={{paddingTop: '1em'}}>
        <Sol1/>
        <hr/>
        <Sol2/>
        <hr/>
        <Sol3/>
        <hr/>
        <Sol4/>
      </div>
    </ScrollableAnchor>
  </div>




);

export default HomePage
