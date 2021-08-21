import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { Link ,Redirect} from "react-router-dom";

const SearchPage =()=>{
    const { filteredProducts } = useSelector((state) => state.productReducer);
    // const [count,setCount] = useState(filteredProducts) 
    // useEffect(() => { setCount(JSON.parse(window.localStorage.getItem("filteredProducts"))); }, []);
    
    // useEffect(() => { window.localStorage.setItem("filteredProducts", filteredProducts); }, [filteredProducts]);

    if (filteredProducts.length === 0)
        return (
            <div style={{textAlign:"center",paddingTop:100}}>
                <h1>Please enter text in search-box to search.</h1>
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
