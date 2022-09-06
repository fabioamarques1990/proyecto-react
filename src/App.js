import './App.css';
import 'core-js/actual';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const lista = ["Paquete 1", "Paquete 2", "Paquete 3", "Paquete 4"];
  const items = lista.map (items => (
    <ItemListContainer valor={items} />
  ));

  return (
    <div>
      <NavBar />

      <ul>
        {items}
      </ul>
    </div>
  );
}

export default App;
