import React from 'react';
import Body from './Body';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Footer from './Footer';



function App() {
  return (
    <div id='imagebc'>
      <style jsx global>{`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Montserrat', sans-serif;
            width: 100%;
            color: white;
          }
          p {
            font-weight: 200;
          }
          #imagebc {
              background-image: url("https://www.tesla.com/content/dam/tesla-site/home-page/images/main-hero-desktop_compressed.jpg");
              background-position: center center;
              position: relative;
              background-size: cover;
              margin: 0 ;
              height: 100vh;
              transition: transform .2s; /* Animation */
          }
          #imagebc:hover {
            background-position: center center;
            transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
          }
          button {
            cursor: pointer;
          }
          `}</style>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
