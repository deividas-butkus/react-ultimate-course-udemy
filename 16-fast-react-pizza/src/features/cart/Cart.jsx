import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import { getCart, clearCart } from "./cartSlice";
import { getUsername } from "../user/userSlice";
import EmptyCart from "../cart/EmptyCart";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
