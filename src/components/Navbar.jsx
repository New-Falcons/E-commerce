import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const {cartProducts} = useSelector((state)=> state.cartReducer)
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light nav"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container-fluid">
        <Link to="/">
          <h2 className="icon">ST🌐RE</h2>
        </Link>
        <button
          className="navbar-toggler navbtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/men">
              <li className="nav-item">MEN</li>
            </Link>

            <Link to="/women">
              <li className="nav-item">WOMEN</li>
            </Link>
            <Link to="/kids">
              <li className="nav-item">KIDS</li>
            </Link>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary search-btn" type="submit">
              Search
            </button>
            <div className="profile">
              <Link to="/cart">
                <div className="cartdiv"><i class="fa fa-shopping-cart carticon" aria-hidden="true"></i>
                <span className="item-circle">{cartProducts.length}</span></div>
              </Link>
              <i class="fa fa-user usericon" aria-hidden="true"></i>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
