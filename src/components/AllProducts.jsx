import axios from "axios";
import { useEffect, useState } from "react";
import Endpoints from "../api/Endpoints";
import Product from "./Product";

function AllProducts() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCTS_URL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
          <div className="row row-cols-auto justify-content-around allProductsRow">
            {products.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
       
      </div>
    </>
  );
}
export default AllProducts;
