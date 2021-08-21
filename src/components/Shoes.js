import { shoes } from "../data/db.json";
import { Link } from "react-router-dom";

export const Shoes = () => {
  return (
    <div>
      <h1 className="head">Shoes</h1>
      <div className="cardone">
        {shoes.map((product) => (
          <div className="inner">
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
