import './App.css';

function App() {
  let imagen = "../assets/background-image.jpg";
  let titulo = "SUP San Luis Potosi";
  let descripcion = "Ven a pasear con nosotros en el lugar mas precioso que vas a ver en tu vida";

  return (
    <div className="container">
      <div className='row'>
        <div class="col-md-4 offset-md-2">
          <img src={imagen} alt={titulo} className="img-fluid"/>
        </div>
        <div class="col-md-4">
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
