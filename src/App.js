import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from './components/Navbar';
import { Slider } from './components/Slideshow';
import { Shirts } from './components/Shirts';
import { Tshirts } from './components/Tshirt';
import { Jeans } from './components/Jeans';
import { Category } from './components/Categories';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <h2 className="mainhead">Free shipping for you till mid night</h2>
      <Slider />
      <Category />
      <Shirts />

      <Tshirts />
      <Jeans />
    </div>
  );
}

export default App;
