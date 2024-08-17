import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

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
