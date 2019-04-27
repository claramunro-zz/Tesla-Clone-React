import React from 'react';

function Footer(){
  return (
    <div  id='footerDivStyle'>

      <style jsx global>{`
     #footerDivStyle {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
    };
    #footerTextDivStyle {
      justifyContent: center;
      flexDirection: space-around;
      padding: 2em;
      text-shadow: 0px 4px 11px rgba(0,0,0,1);
      font-size: .8em;
    };
    }
    `}</style>

      <div id='footerTextDivStyle'>
        <p>You can return your car for a full refund within 7 days or 1,000 miles, whichever comes first.</p>
      </div>
    </div>
  );

}

export default Footer;
