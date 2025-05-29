import { useSelector, useDispatch } from "react-redux";

import {
  decreaseItemQuantity,
  increaseItemQuantity,
  getCurrentQuantityById,
} from "../cart/cartSlice";

const UpdateItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex justify-center gap-3">
      <button onClick={handleDecrease}>-</button>
      <p>{currentQuantity}</p>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default UpdateItemQuantity;
