import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchPage =()=>{
    const { filteredProducts } = useSelector((state) => state.productReducer);

    if (filteredProducts.length === 0)
        return (
            <div style={{textAlign:"center",paddingTop:100}}>
                <h1>Enter text in search-box to search.</h1>
            </div>
        )

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

    }

export default SearchPage;
