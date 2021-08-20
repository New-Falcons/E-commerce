import { tshirts } from "../data/db.json";
export const Tshirts = () => {
  return (
    <div>
      <h1 className="head">T-shirts</h1>
      <div className="cardone">
        <div className="inner">
          <div className="content">
            <img src={tshirts[0].url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title" style={{ textAlign: "start" }}>
                {tshirts[0].title}
              </h4>
              <h6 className="brand-name">Rs. {tshirts[0].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img src={tshirts[1].url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title" style={{ textAlign: "start" }}>
                {tshirts[1].title}
              </h4>
              <h6 className="brand-name">Rs. {tshirts[1].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img src={tshirts[2].url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title" style={{ textAlign: "start" }}>
                {tshirts[2].title}
              </h4>
              <h6 className="brand-name">Rs. {tshirts[2].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img src={tshirts[3].url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title" style={{ textAlign: "start" }}>
                {tshirts[3].title}
              </h4>
              <h6 className="brand-name">Rs. {tshirts[3].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img src={tshirts[4].url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title" style={{ textAlign: "start" }}>
                {tshirts[4].title}
              </h4>
              <h6 className="brand-name">Rs. {tshirts[4].price}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
