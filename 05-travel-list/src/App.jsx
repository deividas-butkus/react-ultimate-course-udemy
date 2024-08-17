import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("");

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleTogglePacked(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    setSortBy("");
  }

  return (
    <div className="app">
      <Logo />
      <Form items={items} onAddItem={handleAddItem} setSortBy={setSortBy} />
      <PackingList
        items={items}
        setItems={setItems}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far away</h1>;
}

function Form({ onAddItem, setSortBy }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    setQuantity(1);
    setDescription("");
    setSortBy("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🤔</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({
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

function Item({ item, onDeleteItem, onTogglePacked }) {
  return (
    <li>
      <input
        type="checkbox"
        name="packed"
        checked={item.packed}
        onChange={() => onTogglePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </span>
    </li>
  );
}

function Stats({ items }) {
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
