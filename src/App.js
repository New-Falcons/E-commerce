import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from './components/Navbar';
import { Slider } from './components/Slideshow';
import { Deal } from './components/Deals';
import { Brands } from './components/Brands';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Deal />
      <Brands />
    </div>
  );
}

export default App;
