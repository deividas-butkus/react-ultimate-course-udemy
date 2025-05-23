import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item /* isLoadingIngredients */ /* ingredients */ }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="px-6 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
