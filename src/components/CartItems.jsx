import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "../Redux/Slice/CartSlice";

import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";


function CartItems(props) {
  const { id, title, price, description, category, image, rating } = props.data;
  const cart = useSelector((state) => state.cart);

  const theProduct = cart.cartItems.filter((eachItem) => eachItem.id === id);

  const quantity = theProduct[0].itemQuantity;

  const handleMinusCLick = () => {
    dispatch(removeFromCart(props.data));
    
  };
  const handlePlusCLick = () => {
    dispatch(addToCart(props.data));
  };

  let productPrice = price;

  let roundPrice = (Math.floor(productPrice * 100) / 100).toFixed(2);

  const priceString = String(roundPrice);
  const priceArr = priceString.split("");
  const mainPrice = priceArr.slice(0, priceArr.indexOf("."));
  const subPrice = priceArr.slice(priceArr.indexOf(".") + 1);

  const dispatch = useDispatch();

  const handleDeleteItemFromCart = () => {
    dispatch(deleteFromCart(props.data));
  };

  return (
    <>
      <div className="card cartDiv">
        <div className="imageDiv">
          <img src={image} alt={title} />
        </div>
        <div className="contentDiv">
          <div>
            <h6>
              {category}
              <p style={{ color: "grey" }}>{title}</p>
            </h6>
          </div>

          <div className="quantityChangeDiv">
            <div className="card quantityChangeInsideDiv">
              <button onClick={handleMinusCLick} className="minusIcon">
                <HiMinusCircle />
              </button>
              <div className="quantityNum">{quantity}</div>
              <button onClick={handlePlusCLick} className="plusIcon">
                <HiPlusCircle />
              </button>
            </div>
          </div>
          <div className="productPriceDivInCart">
            <div className="productPriceDiv">
              <p className="dollarSign">$</p>
              <p className="mainPrice">{mainPrice}</p>
              <p className="subPrice">{subPrice}</p>
            </div>
            <div className="quantityToMultiply">
              x{quantity} {""}= ${(productPrice * quantity).toFixed(2)}
            </div>
          </div>

          <div className="deleteBtnDivContainer">
            <div>
              <MdDeleteForever
                onClick={handleDeleteItemFromCart}
                style={{ cursor: "pointer" }}
                size={"1.8rem"}
                color="#cc0f00"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItems;
