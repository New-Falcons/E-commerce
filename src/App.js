import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from './components/Navbar';
import { Slider } from './components/Slideshow';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
    </div>
  );
}

export default App;
