import Item from "./Item";

export default function PackingList({
  items,
  setItems,
  onDeleteItem,
  onTogglePacked,
  sortBy,
  setSortBy,
}) {
  // const [sortBy, setSortBy] = useState("");

  const handleSort = (e) => {
    const sortValue = e.target.value;
    setSortBy(sortValue);

    const sortedItems = [...items];
    if (sortValue === "input") {
      sortedItems.sort((a, b) => a.id - b.id);
    } else if (sortValue === "description") {
      sortedItems.sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortValue === "packed") {
      sortedItems.sort((a, b) => a.packed - b.packed);
    }

    setItems(sortedItems);
  };

  const handleClear = () => {
    const confirmed = window.confirm(
      "Ar you sure you want to delete all items?"
    );
    confirmed && setItems([]);
  };

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleSort}>
          <option value="" disabled default>
            ------- Sort by -------
          </option>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
}
