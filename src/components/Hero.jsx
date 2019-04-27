import React from 'react';
import HeroButtons from './HeroButtons';

function Hero() {

  return (
    <div id='headerStyle'>

      <style jsx global>{`
      #headerStyle {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      #heroTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 500;
      }
    `}</style>

      <h1 id='heroTitle' style={{ marginTop: '3em', marginBottom: '.4em' }}>Model 3</h1>
      <HeroButtons />
    </div>
  );
}

export default Hero;
