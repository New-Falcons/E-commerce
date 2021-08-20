import {shortstrouser} from "../data/db.json"
export const Shorts = () => {
  return (
    <div>
      <h1 className="head">Shorts-Trousers</h1>
      <div className="cardone">
        <div className="inner">
          <div className="content">
            <img
              src={shortstrouser[0].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{shortstrouser[0].title}</h4>
              <h6 className="card-text">Rs. {shortstrouser[0].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={shortstrouser[1].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{shortstrouser[1].title}</h4>
              <h6 className="card-text">Rs. {shortstrouser[1].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={shortstrouser[2].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{shortstrouser[2].title}</h4>
              <h6 className="card-text">Rs. {shortstrouser[2].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={shortstrouser[3].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{shortstrouser[3].title}</h4>
              <h6 className="card-text">Rs. {shortstrouser[3].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={shortstrouser[4].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{shortstrouser[4].title}</h4>
              <h6 className="card-text">Rs. {shortstrouser[4].price}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
