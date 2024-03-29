import { RiAccountCircleLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  let totalCartQuantity = 0;
  cart.cartItems.map(
    (eachItem) => (totalCartQuantity += eachItem.itemQuantity)
  );

  return (
    <div className="navbarComp">
      <Link to={"/"} className="shopWord">
        SHOP<span className="laneWord">LANE</span>
      </Link>
      <div className="navbarRight ">
        <div >
          <button
            className="btn btn-light dropdown-toggle  active dropDownBtn"
            role="button"
          >
            <div >
              <RiAccountCircleLine size={"40px"} />
              <div >
                <span> <Link to={"/login"} className="dropdown-item" >
              <TbLogin size={"20px"} />
              Login
            </Link></span>
                <span className="orSignUp"> <Link to={"/signup"} className="dropdown-item">
              <FaRegAddressCard size={"18px"} />
              Sign Up
            </Link> </span>
              </div>
            </div>
          </button>

          <div className="dropdown-menu">
            {/* <Link to={"/login"} className="dropdown-item" >
              <TbLogin size={"20px"} />
              Login
            </Link>
            <Link to={"/signup"} className="dropdown-item">
              <FaRegAddressCard size={"18px"} />
              Sign Up
            </Link> */}
            <hr />
            <Link to={"/cartPage"} className="dropdown-item">
              <AiOutlineShoppingCart size={"20px"} />
              Cart
            </Link>
            <Link to={"/favorites"} className="dropdown-item">
              <MdOutlineFavoriteBorder size={"20px"} />
              Favorites
            </Link>
          </div>
        </div>
        <div>
          <Link to={"/favorites"} className="navbarWishDiv">
            <div>
              <FaHeart size={"1.9em"} color="red" />
            </div>
            <div
              className={cart.wishListItems.length > 0 ? "wishLengthDiv" : null}
            >
              <span className="wishLengthSpan">
                {cart.wishListItems.length > 0
                  ? cart.wishListItems.length
                  : null}
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link to={"/cartPage"} className="navbarCartDiv">
            <div>
              <AiOutlineShoppingCart color="black" size={"2.5rem"} />
            </div>
            <div className={cart.cartItems.length > 0 ? "cartLengthDiv" : null}>
              <span className="cartLengthSpan">
                {cart.cartItems.length > 0 ? totalCartQuantity : null}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
