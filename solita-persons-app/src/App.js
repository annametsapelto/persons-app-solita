import './App.css';
import Nameslist from './Components/nameslist';
import Title from './Components/title';
import Order from './Components/order';
import Sum from './Components/sum';

function App() {
  return (
    <div className="App">
      <Title/>
      <Nameslist/>
      <Order/>
      <Sum/>
    </div>
  );
}

export default App;
