import React from 'react';
import Navbar from './component/Navbar';
import Item from './component/Item';
import ItemList from './component/ItemList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='pt-5 mt-5'>
        <div className="container">
          <h1 className="mb-4">ArtShop</h1>
          <ItemList />
        </div>
      </main>
      
    </div>
  );
}

export default App;
