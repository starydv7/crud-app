import './App.css';
import {ProductProvider} from './components/Context';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <ProductProvider />
      <Home/>
    </div>
  );
}

export default App;
