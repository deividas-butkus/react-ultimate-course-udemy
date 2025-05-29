import { useDispatch } from "react-redux";

import { decreaseItemQuantity, increaseItemQuantity } from "../cart/cartSlice";
import Button from "../../ui/Button";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  return (
    <div className="mb-1 flex items-center justify-center gap-1 md:gap-2">
      <Button onClick={handleDecrease} type="round">
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button onClick={handleIncrease} type="round">
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
