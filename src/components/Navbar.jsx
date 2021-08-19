export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: 'rgb(36, 189, 228)' }}
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="#Nav">
          Falcon-Store
        </a>
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#Home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#Link">
                kids
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Link">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Link">
                Men
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
          </form>
        </div>
      </div>
    </nav>
  );
};
