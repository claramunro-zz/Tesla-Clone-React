import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div id='mainDivStyle'>
      <style jsx>{`
        #mainDivStyle {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          padding-top: 1em;
        }
        #divStyle {
          display: flex;
          justify-content: center;
          flex-direction: space-around;
        }
        #logoDiv {
          width: 1em;
        }
        #logo {
          width: 6em;
          filter: invert(100%);
        }
        .link {
          text-decoration: none;
          color: white;
          padding: 5px;
          font-weight: 100;
          cursor: pointer;
          display: inline;
          font-weight: 100;
        }
        #ham {
          width: 20px;
          height: 20px;
          filter: invert(100%);
          margin-left: 10px;
          margin-bottom: -4px;
          cursor: pointer;
        }
        #left {
          float: left;
          display: flex;
          justify-content: center;
          flex-direction: space-around;
        }
        `}</style>
      <div id="logoDiv">
        <Link to="/"><img id='logo' src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"></img></Link>
      </div>
      <div id="left">
        <p className='link'>MODEL S</p>
        <p className='link'>MODEL 3</p>
        <p className="link">MODEL X</p>
        <p className="link">MODEL Y</p>
        <p className="link">ROADSTER</p>
        <p className="link">ENERGY</p>
      </div>
      <div className='divStyle'>
        <p className='link'>SHOP</p>
        <p className='link'>SIGN IN</p>
        <img id='ham' src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"></img>
      </div>
    </div>
  );
}

export default Nav;
