// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearcart } from "../utills/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const RemoveCartItem = () => {
    dispatch(clearcart());
  };

  const cartItem = useSelector((store) => store.cart.items);

let totalPrice = 0;
    for (let index = 0; index < cartItem.length; index++) {
      totalPrice += cartItem[index].card.info.price / 100;
    }
  return (
    <>
      <div className="mx-40 my-5 pb-3 p-4  bg-gray-100 border-solid border-black border shadow-xl">
        <p className="text-3xl font-bold text-center mb-2">Cart</p>
        {cartItem.length === 0 ? (
          <h4 className="text-3xl font-bold">
            {" "}
            Your Cart is Empy Add Items to the cart!
          </h4>
        ) : (
          <p className="text-3xl font-bold">Cart Items - {cartItem.length}</p>
        )}
        <div
          className={
            cartItem.length === 0
              ? ""
              : "border-solid border-black border-t mt-3"
          }
        >
          <ItemList items={cartItem} cartName={"Remove"} />
        </div>
        {cartItem.length !== 0 && (
          <div>
          <h2 className="text-3xl font-bold pt-2">Total Price : ₹ {totalPrice}</h2>
          <div className="flex justify-between py-1">
          <button
              onClick={RemoveCartItem}
              className="px-7 py-2 m-2 bg-green-400 text-xl rounded-xl text-blue-800 font-bold"
            >
              Cler Cart
            </button>
          <button
              className="px-7 py-2 m-2 bg-green-400 text-xl rounded-xl text-blue-800 font-bold"
            >
              Order Now
            </button>
          </div>            
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
