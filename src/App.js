import './App.css';
import 'core-js/actual';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';

function App() {

  return (
    <div>
      <NavBar />

      <ItemListContainer />

      <ItemDetailContainer />

    </div>
  );
}

export default App;
