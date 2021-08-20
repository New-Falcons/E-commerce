// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Home from "./components/HomePage";
import Cart from "./components/cart/Cart";
import Product from "./components/Product";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <h2 className="mainhead">Free shipping for you till mid night</h2> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={ Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
