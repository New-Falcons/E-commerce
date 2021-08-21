import { Link } from "react-router-dom";
import { shirts } from "../data/db.json";

export const Shirts = () => {
  const shirtsfive = [shirts[0], shirts[1], shirts[2], shirts[3], shirts[4]];
  return (
    <div>
      <h1 className="head">Shirts</h1>
      <div className="cardone">
        {shirtsfive.map((product) => (
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
        {/* <div className="inner">
          <div className="content">
            <img src={shirts[1].url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title" style={{ textAlign: "start" }}>
                {shirts[1].title}
              </h4>
              <h6 className="brand-name">Rs. {shirts[1].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img src={shirts[2].url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title" style={{ textAlign: "start" }}>
                {shirts[2].title}
              </h4>
              <h6 className="brand-name">Rs. {shirts[2].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img src={shirts[3].url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title" style={{ textAlign: "start" }}>
                {shirts[3].title}
              </h4>
              <h6 className="brand-name">Rs. {shirts[3].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img src={shirts[4].url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title" style={{ textAlign: "start" }}>
                {shirts[4].title}
              </h4>
              <h6 className="brand-name">Rs. {shirts[4].price}</h6>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
