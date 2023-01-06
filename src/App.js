import './App.css';
import Headerr from './componentes/headerr/headerr';
import Card from './componentes/card/card';

function App() {
  return (
    <div className="App">
     <Headerr/>
     <div className='div-cards'>
        <Card titulo="Produto1"/>
        <Card titulo="Produto2"/>
        <Card titulo="Produto3"/>
        <Card titulo="Produto4"/>
        <Card />
     </div>
    </div>
  );
}

export default App;
