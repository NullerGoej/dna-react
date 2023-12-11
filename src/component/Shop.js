import React from 'react';
import Navbar from './Navbar';
import ItemList from './ItemList';
import Footer from './Footer';

function Shop() {
    return (
        <div className="App">
          <Navbar />
          <main className='py-5 mt-5 '>
            <div className="container">
              <h1 className="mb-4">ArtShop</h1>
              <ItemList />
            </div>
          </main>
          <Footer />
        </div>
      );
}

export default Shop