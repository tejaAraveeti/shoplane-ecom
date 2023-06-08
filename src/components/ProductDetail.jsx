import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Endpoints from "../api/Endpoints";
import { BsFillCartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  deleteFromCart,
} from "../Redux/Slice/CartSlice";
import { MdDeleteForever } from "react-icons/md";

function ProductDetail(props) {
  const id = props.data;
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState({});

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCTS_URL + id)
      .then((response) => {
        setProduct(response.data);
        setRating(response.data.rating);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  let price = product.price;

  let roundPrice = (Math.floor(price * 100) / 100).toFixed(2);

  const priceString = String(roundPrice);
  const priceArr = priceString.split("");
  const mainPrice = priceArr.slice(0, priceArr.indexOf("."));
  const subPrice = priceArr.slice(priceArr.indexOf(".") + 1);

  const heart = useRef();
  const atcBtn = useRef();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let isItemInCart = cart.cartItems.find((item) => item.id === product.id);
  let isItemInWish = cart.wishListItems.find((item) => item.id === product.id);

  function handleHeartClick() {
    dispatch(addToWishlist(product));
  }

  function handleATCclick() {
    if (atcBtn.current.innerText === "Add to Cart") {
      dispatch(addToCart(product));
    } else {
      dispatch(deleteFromCart(product));
    }
  }

  return (
    <>
        <div className="productDetailDiv">
          <div className=" card productDetailImageDiv">
            <img
              src={product.image}
              className="card-img-top productDetailImg"
              alt={product.title}
            />
          </div>

          <div className="productDetailContentDiv">
            <div className="productDetailBrand">BRAND</div>
            <h2 className="productDetailTitle">{product.title}</h2>
            <div className="productDetailDescription">
              {product.description}
            </div>
            <hr />
            <div className="productDetailContent2">
              <div className="productDetailContent2Left">
                <p className="dollarSign">$</p>
                <p className="mainPrice">{mainPrice}</p>
                <p className="subPrice">{subPrice}</p>
              </div>
              <div className="productDetailContent2Right">
                <div>
                  <button
                    id="b"
                    onClick={handleATCclick}
                    ref={atcBtn}
                    className={
                      isItemInCart
                        ? "btn redBtn addToCartBtnInAllProducts"
                        : "btn blueBtn addToCartBtnInAllProducts"
                    }
                  >
                    {isItemInCart ? (
                      <MdDeleteForever size={"20px"} />
                    ) : (
                      <BsFillCartFill size={"20px"} />
                    )}
                    {isItemInCart ? "Remove from Cart" : "Add to Cart"}
                  </button>
                </div>
                <div ref={heart} onClick={handleHeartClick}>
                  <FaHeart
                    size={"1.5rem"}
                    className={isItemInWish ? "productHeart" : null}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
export default ProductDetail;
