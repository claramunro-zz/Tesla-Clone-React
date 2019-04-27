import React from 'react';
import Nav from './Nav';
import Hero from './Hero';


function Body(){

  return (

    <div>
      <style jsx global>{`
  #bodyStyle {
    display: flex;
    flexDirection: column;
    alignItems: center;
  }
    `}</style>

      <div >
        <Nav />
        <Hero />
      </div>

    </div>
  
  );
}

export default Body;
