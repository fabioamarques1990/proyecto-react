import './App.css';
import 'core-js/actual';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/header/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';


function App() {

  return (
    <div>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:activity" element={<ItemListContainer />} />
          <Route exact path="/category/activity/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

{/* <ItemListContainer />
<ItemDetailContainer /> */}

export default App;
