import './App.css';
import Headerr from './componentes/headerr/headerr';
import Card from './componentes/card/card';
import Carousel from './componentes/caroucel/caroucel';
import Rodape from './componentes/rodape/rodape';

function App() {
  return (
    <div className="App">
     <Headerr/>
      <Carousel/>

     <div className='div-cards'>
        <Card titulo="Produto1"/>
        <Card titulo="Produto2"/>
        <Card titulo="Produto3"/>
        <Card titulo="Produto4"/>
        <Card />
     </div>

     <Rodape />
    </div>
  );
}

export default App;
