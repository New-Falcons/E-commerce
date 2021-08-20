import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light nav"
      style={{ backgroundColor: "rgb(255, 255, 255)" }}
    >
      <div className="container-fluid ">
        <Link to="/">
          <h2 className="icon">Store-360</h2>
        </Link>
        <button
          className="navbar-toggler"
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
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#Home">
                Home
              </a>
            </li> */}

            <li className="nav-item">
              <a className="nav-link" href="#Link">
                MEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Link">
                WOMEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Link">
                KIDS
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            <div className="profile">
              <Link to="/cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};
