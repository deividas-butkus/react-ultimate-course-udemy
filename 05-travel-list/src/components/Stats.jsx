export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start adding items to your packing list 🚀</p>;

  const itemsQty = items.length;
  const itemsPackedQty = items.filter((item) => item.packed).length;
  const packedItemPart = Math.round((itemsPackedQty / itemsQty) * 100);

  return (
    <footer className="stats">
      <em>
        {packedItemPart !== 100
          ? `🎒 You have ${itemsQty} items on your list, and you already packed
        ${itemsPackedQty} (${packedItemPart}%)`
          : `You're done. Ready to go 🛫`}
      </em>
    </footer>
  );
}
