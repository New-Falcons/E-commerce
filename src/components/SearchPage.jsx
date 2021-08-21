import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const { filteredProducts } = useSelector((state) => state.productReducer);

  if (filteredProducts.length === 0)
    return (
      <div style={{ textAlign: "center", paddingTop: 100 }}>
        <h1>We couldn't find any matches!</h1>
        <p style={{ color: "gray", marginBlock: "20px", fontSize: "18px" }}>
          Please check the spelling or try searching something else
        </p>
        <div style={{ marginTop: "50px" }}>
          <img src="https://constant.myntassets.com/web/assets/img/11488523304066-search404.png"></img>
        </div>
      </div>
    );

  return (
    <div className="men">
      <div className="main-Content">
        {filteredProducts.map((product) => (
          <div className="inner CC">
            <Link
              to={`/product/${parseInt(product.id)}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="content">
                <img src={product.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title" style={{ textAlign: "start" }}>
                    {product.title}
                  </h4>
                  <h6 className="brand-name">Rs. {product.price}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
