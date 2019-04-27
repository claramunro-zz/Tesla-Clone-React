import React from 'react';

function HomeButton(){

  return (
    <div id='buttonDivStyle'>

      <style jsx global>{`

  #buttonStyle {
    background-color; white;
    border-radius: 20px;
    width: 22em;
    height: 4em;
    text-align: center;
    font-size: 0.6em;
    border: solid white 2px;
    color: black;
    margin: 1em;
    font-weight: 600;
  }
  #buttonStyle2 {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    width: 22em;
    height: 4em;
    text-align: center;
    font-size: 0.6em;
    border: solid white 2px;
    color: white;
    margin: 1em;
    font-weight: 600;

  }
    }
    `}</style>
      <button id='buttonStyle'>ORDER YOURS</button>
      <button id='buttonStyle2'>NEW INVENTORY</button>
    </div>
  );
}

export default HomeButton;
