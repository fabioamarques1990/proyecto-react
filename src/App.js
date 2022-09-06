import './App.css';
import 'core-js/actual';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

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

      <ItemCount stock={8} initial={1} onAdd={0} />

    </div>
  );
}

export default App;
