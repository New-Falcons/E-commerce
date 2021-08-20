import {shoes} from "../data/db.json"
export const Shoes = () => {
  return (
    <div>
      <h1 className="head">Shoes</h1>
      <div className="cardone">
        <div className="inner">
          <div className="content">
            <img
              src={shoes[0].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{shoes[0].title}</h4>
              <h6 className="card-text">Rs. {shoes[0].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={shoes[1].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{shoes[1].title}</h4>
              <h6 className="card-text">Rs. {shoes[1].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={shoes[2].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{shoes[2].title}</h4>
              <h6 className="card-text">Rs. {shoes[2].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={shoes[3].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{shoes[3].title}</h4>
              <h6 className="card-text">Rs. {shoes[3].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={shoes[4].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{shoes[4].title}</h4>
              <h6 className="card-text">Rs. {shoes[4].price}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
