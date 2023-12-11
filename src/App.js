import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <header className="hero-image vignette">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 bg-dark text-light px-3 pb-3 pt-2 rounded-xl">
                <h1>Skabt til nørder<br/>Designet med kunst</h1>
                <p>Træd ind i en verden af unikke produkter, skabt til at forføre nørder med en lidenskabelig kærlighed til kunstnerisk design</p>
                <Link to="/shop" className="btn btn-primary btn-lg dragonhunter">Shop Nu</Link>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src="art-lover.svg" alt="Art Lover" className="img-fluid" />
              </div>
            </div>
          </div>
        </header>
      </main>
      <Footer />
    </div>
  );
}

export default App;
