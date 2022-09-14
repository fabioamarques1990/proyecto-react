import React from 'react';
import NavBar from './header/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';

const Home = () => {

  return (
    <div>
        <NavBar />

        <ItemListContainer />

        <ItemDetailContainer />
    </div>
  );
}

export default Home;