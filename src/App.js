import React from 'react';
import Nav from './nav/nav';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import Footer from './footer/footer.js'
import Offers from './offers/offers';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Home />
    <About />
    <Offers />
    <Contact/>
    <Footer />
  </div>
  );
}

export default App;
