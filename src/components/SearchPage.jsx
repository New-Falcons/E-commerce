import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchPage = () => {
    const { filteredProducts } = useSelector((state) => state.productReducer)
    return (
      <div>
        <div className="container-2">
          <div className="row-5">
            {filteredProducts.map((product) => (
              <div className="col-3 temp" key={product.id}>
                <div className="product">
                  <div className="product__img">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt="" />
                    </Link>
                  </div>
                  <div className="product__name">{product.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default SearchPage;